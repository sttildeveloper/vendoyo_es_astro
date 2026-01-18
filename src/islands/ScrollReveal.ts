/**
 * ScrollReveal.ts - CSS-based scroll reveal animations using IntersectionObserver
 * Lightweight alternative to GSAP for simple fade/slide animations.
 * Respects prefers-reduced-motion.
 */

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

function initScrollReveal(options: ScrollRevealOptions = {}): void {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', once = true } = options;

  // Respect reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');

  if (prefersReducedMotion) {
    // Show all elements immediately without animation
    elements.forEach((el) => {
      el.classList.add('revealed');
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  // Add initial hidden styles
  elements.forEach((el) => {
    const direction = el.dataset.reveal || 'up';
    const delay = el.dataset.revealDelay || '0';
    const duration = el.dataset.revealDuration || '600';

    el.style.opacity = '0';
    el.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
    el.style.transitionDelay = `${delay}ms`;

    switch (direction) {
      case 'up':
        el.style.transform = 'translateY(30px)';
        break;
      case 'down':
        el.style.transform = 'translateY(-30px)';
        break;
      case 'left':
        el.style.transform = 'translateX(30px)';
        break;
      case 'right':
        el.style.transform = 'translateX(-30px)';
        break;
      case 'scale':
        el.style.transform = 'scale(0.95)';
        break;
      case 'fade':
      default:
        // Just fade, no transform
        break;
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.classList.add('revealed');

          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          const el = entry.target as HTMLElement;
          const direction = el.dataset.reveal || 'up';

          el.style.opacity = '0';
          el.classList.remove('revealed');

          switch (direction) {
            case 'up':
              el.style.transform = 'translateY(30px)';
              break;
            case 'down':
              el.style.transform = 'translateY(-30px)';
              break;
            case 'left':
              el.style.transform = 'translateX(30px)';
              break;
            case 'right':
              el.style.transform = 'translateX(-30px)';
              break;
            case 'scale':
              el.style.transform = 'scale(0.95)';
              break;
          }
        }
      });
    },
    { threshold, rootMargin }
  );

  elements.forEach((el) => observer.observe(el));
}

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initScrollReveal());
} else {
  initScrollReveal();
}

export { initScrollReveal };
