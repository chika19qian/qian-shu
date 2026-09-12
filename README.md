# Qian Shu — personal site

Egg-yolk cream portfolio. Open `index.html`, or visit [the live site](https://chika19qian.github.io/qian-shu/).

Drop a square photo at `portfolio-assets/avatar.png` to replace the portrait placeholder.

Language copy lives in `portfolio-assets/i18n.js`. The navigation switch remembers English or Chinese in local storage. SamoDiary uses eight English slides and seven Chinese slides, with lightweight WebP previews and the original PNGs for the enlarged view. Keep `index.html` and `qian-shu-portfolio.html` in sync.

The original Caveat and Plus Jakarta Sans fonts are served locally from `portfolio-assets/fonts/`, with the two first-screen fonts preloaded. `font-display: block` briefly waits for those fonts instead of immediately painting a mismatched fallback. Font licenses are included beside the files.

The music note at the left of the navigation plays or pauses `portfolio-assets/audio/our-special-place-154505.mp3`. Playback is opt-in on every page load, loops at 30% volume, and resumes from the paused position. Its controls live in `portfolio-assets/music.js`. The homepage cat uses `audio/meow-single.mp3`, while the second-page cat uses `audio/cutcatmeow.mp3` (both under `portfolio-assets`).

The hand-drawn memory map sits between the SamoDiary feature and the project list. Its appearance and interactions live in `portfolio-assets/memory-map.css` and `portfolio-assets/memory-map.js`; story text is in the HTML and its Chinese translations are in `i18n.js`. City pins link to the corresponding project cards.
