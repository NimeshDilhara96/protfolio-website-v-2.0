import { useEffect } from 'react';

export function useInteractionAnimation() {
  useEffect(() => {
    let hasInteracted = false;
    const animationDisableClass = 'animations-disabled';

    const disableAnimations = () => {
      if (!hasInteracted) {
        hasInteracted = true;
        document.documentElement.classList.add(animationDisableClass);
      }
    };

    // Detect various user interactions
    window.addEventListener('click', disableAnimations, { once: true, passive: true });
    window.addEventListener('scroll', disableAnimations, { once: true, passive: true });
    window.addEventListener('keydown', disableAnimations, { once: true, passive: true });
    window.addEventListener('touchstart', disableAnimations, { once: true, passive: true });
    window.addEventListener('wheel', disableAnimations, { once: true, passive: true });

    return () => {
      window.removeEventListener('click', disableAnimations);
      window.removeEventListener('scroll', disableAnimations);
      window.removeEventListener('keydown', disableAnimations);
      window.removeEventListener('touchstart', disableAnimations);
      window.removeEventListener('wheel', disableAnimations);
    };
  }, []);
}
