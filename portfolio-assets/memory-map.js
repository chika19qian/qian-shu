document.addEventListener('DOMContentLoaded', () => {
    const map = document.getElementById('memory-map');
    if (!map) return;
    const pins = [...map.querySelectorAll('[data-memory-place]')];
    const stories = [...map.querySelectorAll('.memory-story')];
    const placeholder = map.querySelector('.memory-empty');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let activePin = null;
    let entrance;
    const selectPlace = pin => {
        entrance?.cancel();
        activePin = pin;
        pins.forEach(button => button.setAttribute('aria-expanded', String(button === pin)));
        stories.forEach(story => { story.hidden = !pin || story.id !== pin.getAttribute('aria-controls'); });
        placeholder.hidden = Boolean(pin);
        if (pin && !reducedMotion.matches) {
            entrance = document.getElementById(pin.getAttribute('aria-controls')).animate(
                [{ opacity: 0, transform: 'translateY(8px) rotate(-1deg)' }, { opacity: 1, transform: 'none' }],
                { duration: 240, easing: 'ease-out' }
            );
        }
    };
    const closeStory = () => {
        const previous = activePin;
        selectPlace(null);
        previous?.focus({ preventScroll: true });
    };
    pins.forEach(pin => pin.addEventListener('click', () => selectPlace(activePin === pin ? null : pin)));
    map.querySelectorAll('.memory-close').forEach(button => button.addEventListener('click', closeStory));
    map.addEventListener('keydown', event => {
        if (event.key === 'Escape' && activePin) { event.preventDefault(); closeStory(); }
    });
});
