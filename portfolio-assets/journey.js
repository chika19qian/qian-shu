document.addEventListener('DOMContentLoaded', () => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set();
    const animate = (element, frames, options) => {
        const animation = element.animate(frames, options);
        animations.add(animation);
        animation.finished.then(() => animations.delete(animation), () => animations.delete(animation));
        return animation;
    };

    // Reveal each piece once, without replaying when the visitor scrolls back.
    const pieces = [...document.querySelectorAll('.reveal, .samo-feature-copy > *, .memory-heading, .projects-head')];
    const reveal = (element, delay = 0) => {
        element.classList.remove('journey-reveal');
        element.classList.add('visible');
        if (reduced.matches) return;
        const card = element.matches('.project-card');
        animate(element, [
            { opacity: 0, transform: card ? 'translateY(12px) rotate(-1deg)' : 'translateY(10px)' },
            { opacity: 1, transform: 'translateY(0) rotate(0deg)' }
        ], { duration: card ? 520 : 420, delay, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' });
    };
    const observer = new IntersectionObserver(entries => {
        let order = 0;
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            observer.unobserve(entry.target);
            reveal(entry.target, Math.min(order++, 3) * 65);
        });
    }, { threshold: 0.04, rootMargin: '0px 0px -20px 0px' });
    pieces.forEach(element => {
        if (reduced.matches) { element.classList.add('visible'); return; }
        element.classList.add('journey-reveal');
        observer.observe(element);
    });

    // Draw the dashed route through a mask so its original dashes stay intact.
    const map = document.querySelector('#memory-map');
    let mapPlayed = false;
    let clearMapMask = () => {};
    const showMapJourney = () => {
        if (mapPlayed || reduced.matches) return;
        mapPlayed = true;
        const route = map.querySelector('.memory-route');
        const atlas = map.querySelector('.memory-coast');
        const ns = 'http://www.w3.org/2000/svg';
        const mask = document.createElementNS(ns, 'mask');
        mask.id = 'memory-route-reveal';
        mask.setAttribute('maskUnits', 'userSpaceOnUse');
        mask.setAttribute('x', '0'); mask.setAttribute('y', '0');
        mask.setAttribute('width', '1000'); mask.setAttribute('height', '650');
        const stroke = document.createElementNS(ns, 'path');
        stroke.setAttribute('d', route.getAttribute('d'));
        stroke.setAttribute('fill', 'none'); stroke.setAttribute('stroke', 'white');
        stroke.setAttribute('stroke-width', '12');
        const length = route.getTotalLength();
        stroke.style.strokeDasharray = `${length} ${length}`;
        mask.append(stroke); atlas.prepend(mask);
        route.setAttribute('mask', 'url(#memory-route-reveal)');
        clearMapMask = () => { route.removeAttribute('mask'); mask.remove(); };
        const drawing = animate(stroke, [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
            { duration: 1050, easing: 'ease-in-out', fill: 'backwards' });
        drawing.finished.then(clearMapMask, clearMapMask);
        map.querySelectorAll('.memory-pin > svg').forEach((pin, index) => {
            animate(pin, [{ opacity: 0, transform: 'translateY(-7px)' }, { opacity: 1, transform: 'translateY(0)' }],
                { duration: 320, delay: index * 270, easing: 'ease-out', fill: 'backwards' });
        });
    };
    const mapObserver = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
            mapObserver.disconnect(); showMapJourney();
        }
    }, { threshold: 0.25 });
    mapObserver.observe(map.querySelector('.memory-atlas'));

    // A small ball follows the existing thread while an explicit navigation scroll runs.
    let frame = 0;
    let traveler;
    let roll;
    let tour = null;
    let tourFrame = 0;
    let cancelSegment;
    let finaleTimer;
    let stopButton;
    const originalYarn = document.querySelector('#yarn');
    const stopJourney = () => {
        tour = null;
        cancelAnimationFrame(tourFrame);
        cancelSegment?.(); cancelSegment = null;
        clearTimeout(finaleTimer);
        stopButton?.remove(); stopButton = null;
        originalYarn.classList.remove('yarn-on-tour');
        originalYarn.setAttribute('aria-pressed', 'false');
        delete document.body.dataset.yarnTour;
        cancelAnimationFrame(frame); frame = 0;
        traveler?.remove(); traveler = null;
        roll?.cancel();
    };
    const makeTraveler = () => {
        const element = document.createElement('div');
        element.className = 'journey-yarn'; element.setAttribute('aria-hidden', 'true');
        const drawing = originalYarn.querySelector('svg').cloneNode(true);
        drawing.querySelectorAll('[id]').forEach(node => {
            const old = node.id; node.id = `journey-${old}`;
            drawing.querySelectorAll('[clip-path]').forEach(child => {
                if (child.getAttribute('clip-path') === `url(#${old})`) child.setAttribute('clip-path', `url(#journey-${old})`);
            });
        });
        element.append(drawing); document.body.append(element);
        return element;
    };
    const maxScroll = () => Math.max(0, document.documentElement.scrollHeight - innerHeight);
    const pageTop = element => element.getBoundingClientRect().top + scrollY;
    const headerGap = () => document.querySelector('.site-nav').getBoundingClientRect().height + 18;
    const clampScroll = y => Math.max(0, Math.min(maxScroll(), y));
    const pointAtY = (path, y) => {
        let low = 0, high = path.getTotalLength();
        for (let i = 0; i < 15; i++) {
            const middle = (low + high) / 2;
            if (path.getPointAtLength(middle).y < y) low = middle; else high = middle;
        }
        return path.getPointAtLength((low + high) / 2);
    };
    const placeTourBall = point => {
        if (!traveler || !tour) return;
        const size = traveler.offsetWidth;
        // Keep the whole ball visible even where the mobile thread hugs the edge.
        const x = Math.max(size / 2 + 2, Math.min(innerWidth - size / 2 - 2, point.x));
        traveler.style.transform = `translate(${x - size / 2}px, ${point.y - scrollY - size / 2}px)`;
        tour.rotation += (point.y - tour.lastY) * 1.6;
        tour.lastY = point.y;
        traveler.querySelector('svg').style.transform = `rotate(${tour.rotation}deg)`;
    };
    const segment = (token, destination, duration, phase, ballProgress) => new Promise(resolve => {
        if (tour !== token) { resolve(false); return; }
        document.body.dataset.yarnTour = phase;
        const from = scrollY;
        const started = performance.now();
        cancelSegment = () => resolve(false);
        const tick = now => {
            if (tour !== token) { resolve(false); return; }
            const progress = Math.min(1, (now - started) / duration);
            const eased = phase === 'slow' ? progress : progress * progress * (3 - 2 * progress);
            const to = clampScroll(destination());
            scrollTo({ top: from + (to - from) * eased, behavior: 'instant' });
            if (ballProgress) ballProgress(eased);
            else placeTourBall(pointAtY(token.path, scrollY + Math.min(innerHeight * .36, 280)));
            if (progress < 1) tourFrame = requestAnimationFrame(tick);
            else { cancelSegment = null; resolve(true); }
        };
        tourFrame = requestAnimationFrame(tick);
    });
    const startTour = async ({ jump }) => {
        if (tour) { stopJourney(); return; }
        stopJourney();
        const path = document.querySelector('#yarn-path');
        const tail = document.querySelector('#yarn-tail');
        if (!path?.getAttribute('d') || !tail?.getAttribute('d')) return;
        const token = { path, rotation: 0, lastY: pageTop(originalYarn) + originalYarn.offsetHeight / 2 };
        tour = token;
        originalYarn.classList.add('yarn-on-tour');
        originalYarn.setAttribute('aria-pressed', 'true');
        traveler = makeTraveler(); traveler.classList.add('is-touring');
        stopButton = document.createElement('button');
        stopButton.type = 'button'; stopButton.className = 'journey-stop';
        stopButton.textContent = window.portfolioI18n.t('Stop tour');
        stopButton.addEventListener('click', stopJourney);
        document.body.append(stopButton);
        const catchBall = () => { if (tour === token) stopJourney(); };
        const finish = () => {
            if (tour !== token) return;
            document.body.dataset.yarnTour = 'catch';
            // The cat invokes this callback at the peak of its existing jump.
            if (!jump(catchBall)) catchBall();
            else finaleTimer = setTimeout(catchBall, 1800);
        };
        if (reduced.matches) {
            scrollTo({ top: maxScroll(), behavior: 'instant' });
            finish(); return;
        }
        const targets = [...document.querySelectorAll('#me, #samodiary, #memory-map, .project-card, #experience')];
        for (let index = 0; index < targets.length; index++) {
            const target = targets[index];
            const arrival = () => pageTop(target) - headerGap();
            if (!(await segment(token, arrival, index === 0 ? 900 : 650, 'fast'))) return;
            const departure = () => {
                const bottom = pageTop(target) + target.offsetHeight - innerHeight * .62;
                const next = targets[index + 1];
                const limit = next ? pageTop(next) - headerGap() : pageTop(document.querySelector('#contact')) - headerGap();
                return Math.max(arrival(), Math.min(limit, Math.max(arrival() + 90, bottom)));
            };
            const duration = Math.max(2000, Math.min(4800, (departure() - scrollY) / 95 * 1000));
            if (!(await segment(token, departure, duration, 'slow'))) return;
        }
        // Join the tail, then follow it all the way to the waiting cat.
        const tailStart = () => tail.getPointAtLength(0);
        if (!(await segment(token, () => tailStart().y - Math.min(innerHeight * .36, 280), 650, 'fast'))) return;
        if (!(await segment(token, maxScroll, 1500, 'finale', progress => {
            placeTourBall(tail.getPointAtLength(tail.getTotalLength() * progress));
        }))) return;
        finish();
    };
    const guide = target => {
        stopJourney();
        if (reduced.matches || !target) return;
        const yarn = document.querySelector('#yarn');
        const trail = document.querySelector('#yarn-path');
        if (!trail?.getAttribute('d')) return;
        const distance = target.getBoundingClientRect().top - parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop || '0');
        if (Math.abs(distance) < 30) return;
        const direction = Math.sign(distance);
        roll = animate(yarn.querySelector('svg'), [
            { transform: 'rotate(0deg)' }, { transform: `rotate(${direction * 26}deg)` }, { transform: 'rotate(0deg)' }
        ], { duration: 340, easing: 'ease-in-out' });
        traveler = makeTraveler();
        const drawing = traveler.querySelector('svg');
        const start = performance.now();
        let previousScroll = scrollY, stillSince = start;
        const tick = now => {
            const elapsed = now - start;
            if (Math.abs(scrollY - previousScroll) > .5) stillSince = now;
            previousScroll = scrollY;
            if (elapsed > 1800 || (elapsed > 300 && now - stillSince > 110)) { stopJourney(); return; }
            const length = trail.getTotalLength();
            const screenY = Math.min(innerHeight * .34, 260);
            const wantedY = scrollY + screenY;
            let low = 0, high = length;
            for (let i = 0; i < 14; i++) {
                const middle = (low + high) / 2;
                if (trail.getPointAtLength(middle).y < wantedY) low = middle; else high = middle;
            }
            const point = trail.getPointAtLength((low + high) / 2);
            const size = traveler.offsetWidth;
            traveler.style.opacity = Math.abs(point.y - wantedY) < 30 ? String(Math.min(1, elapsed / 100)) : '0';
            traveler.style.transform = `translate(${point.x - size / 2}px, ${point.y - scrollY - size / 2}px)`;
            drawing.style.transform = `rotate(${direction * elapsed * .38}deg)`;
            frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
    };
    document.querySelectorAll('.site-nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', event => {
            if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
            guide(document.querySelector(link.getAttribute('href')));
        });
    });
    window.portfolioJourney = { guide, startTour };
    document.addEventListener('portfolio:languagechange', () => {
        if (stopButton) stopButton.textContent = window.portfolioI18n.t('Stop tour');
    });
    document.addEventListener('click', event => {
        if (tour && event.isTrusted && !event.target.closest('#yarn, .journey-stop')) stopJourney();
    });
    addEventListener('wheel', stopJourney, { passive: true });
    addEventListener('touchstart', stopJourney, { passive: true });
    addEventListener('resize', stopJourney);
    addEventListener('keydown', event => {
        if (['Escape', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) stopJourney();
    });
    document.addEventListener('visibilitychange', () => { if (document.hidden) stopJourney(); });
    reduced.addEventListener('change', () => {
        if (!reduced.matches) return;
        stopJourney(); observer.disconnect(); mapObserver.disconnect(); clearMapMask();
        animations.forEach(animation => animation.finish());
        pieces.forEach(element => { element.classList.remove('journey-reveal'); element.classList.add('visible'); });
    });
});
