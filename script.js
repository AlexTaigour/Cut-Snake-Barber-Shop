const scrollCue = document.querySelector(".scroll-cue");

if (scrollCue) {
    const updateScrollCue = () => {
        scrollCue.classList.toggle("is-hidden", window.scrollY > 120);
    };

    window.addEventListener("scroll", updateScrollCue, { passive: true });
    updateScrollCue();
}