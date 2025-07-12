const audioCards = document.querySelectorAll('.audio-card');

audioCards.forEach(card => {
    const audioPlayer = card.querySelector('audio');
    const playPauseBtn = card.querySelector('.play-pause');
    const seekSlider = card.querySelector('#seekSlider');
    const currentTimeEl = card.querySelector('#currentTime');
    const durationEl = card.querySelector('#duration');

    audioPlayer.addEventListener('loadedmetadata', () => {
        seekSlider.max = Math.floor(audioPlayer.duration);
        durationEl.textContent = formatTime(audioPlayer.duration);
    });

    playPauseBtn.addEventListener('click', () => {
        if (audioPlayer.paused) {
            // Pause other playing audios
            audioCards.forEach(otherCard => {
                const otherAudio = otherCard.querySelector('audio');
                const otherBtn = otherCard.querySelector('.play-pause');
                if (otherAudio !== audioPlayer) {
                    otherAudio.pause();
                    otherBtn.textContent = '▶️';
                }
            });

            audioPlayer.play();
            playPauseBtn.textContent = '⏸️';
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = '▶️';
        }
    });

    audioPlayer.addEventListener('timeupdate', () => {
        seekSlider.value = Math.floor(audioPlayer.currentTime);
        currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    });

    seekSlider.addEventListener('input', () => {
        audioPlayer.currentTime = seekSlider.value;
    });
});

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
}
