(function () {
    const cfg = window.QIAN_ANALYTICS || {};
    const clarityId = String(cfg.clarity || '').trim();
    const ga4 = String(cfg.ga4 || '').trim();
    if (!clarityId && !ga4) return;

    const loadClarity = (id) => {
        if (window.clarity) return;
        (function (c, l, a, r, i, t, y) {
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
            t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
            y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
        })(window, document, 'clarity', 'script', id);
    };

    const loadGA = (id) => {
        if (window.gtag) return;
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
        document.head.appendChild(script);
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () { window.dataLayer.push(arguments); };
        window.gtag('js', new Date());
        window.gtag('config', id, { anonymize_ip: true, send_page_view: true });
    };

    if (clarityId) loadClarity(clarityId);
    if (ga4) loadGA(ga4);

    const send = (name, params) => {
        const payload = params || {};
        if (typeof window.gtag === 'function' && ga4) {
            window.gtag('event', name, payload);
        }
        if (typeof window.clarity === 'function') {
            window.clarity('event', name);
            Object.keys(payload).forEach((key) => {
                const value = payload[key];
                if (value == null || value === '') return;
                if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                    window.clarity('set', key, String(value));
                }
            });
        }
    };

    const labelFor = (el) => {
        if (!el) return '';
        return (
            el.getAttribute('data-track') ||
            el.getAttribute('aria-label') ||
            (el.getAttribute('href') || '').replace(location.origin, '') ||
            (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80) ||
            el.id ||
            el.tagName.toLowerCase()
        );
    };

    document.addEventListener('click', (event) => {
        const target = event.target.closest('a, button, summary, [data-track]');
        if (!target || target.closest('.skip')) return;
        const href = target.getAttribute('href') || '';
        send('site_click', {
            event_category: 'interaction',
            event_label: labelFor(target),
            link_url: href,
            outbound: href.startsWith('http') && !href.includes(location.host) ? '1' : '0'
        });
    }, true);

    const sectionTime = {};
    let activeSection = 'top';
    let sectionStarted = Date.now();
    const markSection = (id) => {
        if (id === activeSection) return;
        const now = Date.now();
        sectionTime[activeSection] = (sectionTime[activeSection] || 0) + (now - sectionStarted);
        activeSection = id;
        sectionStarted = now;
        send('section_view', { event_label: id });
    };

    const sections = ['top', 'me', 'work', 'experience', 'contact']
        .map((id) => document.getElementById(id))
        .filter(Boolean);
    if ('IntersectionObserver' in window && sections.length) {
        const observer = new IntersectionObserver((entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.35)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
            if (visible && visible.target.id) markSection(visible.target.id);
        }, { threshold: [0.35, 0.6] });
        sections.forEach((section) => observer.observe(section));
    }

    let engagedMs = 0;
    let lastTick = Date.now();
    let visible = document.visibilityState !== 'hidden';
    const tick = () => {
        const now = Date.now();
        if (visible) engagedMs += now - lastTick;
        lastTick = now;
    };

    setInterval(() => {
        if (!visible) return;
        tick();
        send('browse_heartbeat', {
            event_category: 'engagement',
            value: Math.round(engagedMs / 1000),
            engagement_time_msec: Math.min(engagedMs, 30000)
        });
    }, 15000);

    const flush = (reason) => {
        tick();
        sectionTime[activeSection] = (sectionTime[activeSection] || 0) + (Date.now() - sectionStarted);
        sectionStarted = Date.now();
        send('browse_time', {
            event_category: 'engagement',
            event_label: reason,
            value: Math.round(engagedMs / 1000),
            engagement_time_msec: engagedMs,
            section_me: Math.round((sectionTime.me || 0) / 1000),
            section_work: Math.round((sectionTime.work || 0) / 1000),
            section_experience: Math.round((sectionTime.experience || 0) / 1000),
            section_contact: Math.round((sectionTime.contact || 0) / 1000),
            transport_type: 'beacon'
        });
    };

    document.addEventListener('visibilitychange', () => {
        tick();
        visible = document.visibilityState !== 'hidden';
        if (!visible) flush('hidden');
    });
    window.addEventListener('pagehide', () => flush('leave'));
})();
