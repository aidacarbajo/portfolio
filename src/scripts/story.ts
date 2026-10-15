// "Who I am" video: plays muted while on screen; the button restarts it with sound.
const video = document.querySelector<HTMLVideoElement>('.story-video video');
const button = document.querySelector<HTMLButtonElement>('.story .sound');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (video) {
  let userControlled = false;
  video.addEventListener('play', () => { if (!video.muted) userControlled = true; });

  if (!reduced && 'IntersectionObserver' in window) {
    new IntersectionObserver(
      ([entry]) => {
        if (userControlled) return;
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.4 },
    ).observe(video);
  }

  if (button) {
    button.hidden = false;
    const label = () => (button.textContent = video.muted ? (button.dataset.sound ?? '') : (button.dataset.mute ?? ''));
    button.addEventListener('click', () => {
      if (video.muted) {
        userControlled = true;
        video.muted = false;
        video.loop = false;
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.muted = true;
      }
      label();
    });
    video.addEventListener('volumechange', label);
  }
}
