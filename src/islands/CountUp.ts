/**
 * CountUp.ts - Animates numbers from 0 to target value when element enters viewport
 * Uses IntersectionObserver for performance. Respects prefers-reduced-motion.
 */

interface CountUpOptions {
  duration?: number;
  easing?: (t: number) => number;
}

const defaultEasing = (t: number): number => {
  // easeOutExpo
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

function animateValue(
  element: HTMLElement,
  start: number,
  end: number,
  duration: number,
  easing: (t: number) => number
): void {
  const startTime = performance.now();
  const suffix = element.dataset.suffix || '';
  const prefix = element.dataset.prefix || '';

  function update(currentTime: number): void {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easing(progress);
    const currentValue = Math.floor(start + (end - start) * easedProgress);

    element.textContent = `${prefix}${currentValue.toLocaleString('es-ES')}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

function initCountUp(options: CountUpOptions = {}): void {
  const { duration = 2000, easing = defaultEasing } = options;

  // Respect reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const elements = document.querySelectorAll<HTMLElement>('[data-count-up]');

  if (prefersReducedMotion) {
    // Just set final values without animation
    elements.forEach((el) => {
      const target = parseInt(el.dataset.countUp || '0', 10);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      el.textContent = `${prefix}${target.toLocaleString('es-ES')}${suffix}`;
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.countUp || '0', 10);
          const customDuration = parseInt(el.dataset.duration || String(duration), 10);

          animateValue(el, 0, target, customDuration, easing);
          observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  elements.forEach((el) => {
    // Initialize with 0
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    el.textContent = `${prefix}0${suffix}`;
    observer.observe(el);
  });
}

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initCountUp());
} else {
  initCountUp();
}

export { initCountUp };
