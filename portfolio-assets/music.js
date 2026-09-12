// Music starts only after the visitor presses the navigation button.
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.music-toggle');
    const music = document.querySelector('#background-music');
    const status = document.querySelector('.music-status');
    if (!button || !music || !status) return;

    music.volume = 0.3;
    let requested = false;
    let message = '';
    const update = () => {
        const t = window.portfolioI18n.t;
        button.setAttribute('aria-pressed', String(!music.paused));
        button.title = t(music.paused ? 'Play music' : 'Pause music');
        status.textContent = t(message);
    };
    const reportError = () => {
        requested = false;
        music.pause();
        message = 'Music could not play. Please try again.';
        update();
    };
    button.addEventListener('click', async () => {
        if (requested || !music.paused) {
            requested = false;
            music.pause();
            return;
        }
        requested = true;
        message = '';
        update();
        try {
            await music.play();
        } catch (error) {
            // A second click can cancel playback while the file is loading.
            if (error.name !== 'AbortError' && requested) reportError();
        }
    });
    music.addEventListener('play', update);
    music.addEventListener('playing', () => {
        message = 'Music is playing';
        update();
    });
    music.addEventListener('pause', () => {
        requested = false;
        message = 'Music paused';
        update();
    });
    music.addEventListener('error', reportError);
    document.addEventListener('portfolio:languagechange', update);
    update();
});
