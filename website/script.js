function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.container');
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.classList.add('visible');
            slide.classList.remove('hidden');
        } else {
            slide.classList.add('hidden');
            slide.classList.remove('visible');
        }
    });
}

function playSound(soundId) {
    stopSound(); // Stop het huidige geluid voordat het nieuwe geluid wordt afgespeeld
    const sound = document.getElementById(soundId);
    if (sound) {
        sound.play();
    }
}

function stopSound() {
    const audioElements = document.querySelectorAll('.container audio');
    audioElements.forEach(audioElement => {
        audioElement.pause();
        audioElement.currentTime = 0;
    });
}

// Initialize by showing the start screen
document.addEventListener("DOMContentLoaded", function() {
    showSlide(0); // Show the start screen initially
});
