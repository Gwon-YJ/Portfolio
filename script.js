function initializeVideoControls(videoId, buttonClass, timeDisplayClass, totalTimeClass, sliderClass) {
    const myVideo = document.getElementById(videoId);
    const button = document.querySelector(buttonClass);
    const timeDisplay = document.querySelector(timeDisplayClass);
    const totalTimeDisplay = document.querySelector(totalTimeClass);
    const slider = document.querySelector(sliderClass);

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    }

    function updateTime() {
        timeDisplay.textContent = formatTime(myVideo.currentTime);
        slider.value = myVideo.currentTime;

        if (!isNaN(myVideo.duration)) {
            slider.max = myVideo.duration;
            totalTimeDisplay.textContent = formatTime(myVideo.duration);
        }
    }

    button.addEventListener('click', () => {
        if (myVideo.paused) {
            myVideo.play();
            button.style.backgroundPosition = '0 -50px'; // 일시정지 아이콘
        } else {
            myVideo.pause();
            button.style.backgroundPosition = '0 0px'; // 재생 아이콘
        }
    });

    myVideo.addEventListener('timeupdate', updateTime);
    myVideo.addEventListener('loadedmetadata', updateTime);

    slider.addEventListener('input', () => {
        myVideo.currentTime = slider.value;
    });
}

window.onload = function () {
    initializeVideoControls('myVideo', '.btn', '.current-time', '.total-time', '.slider');
    initializeVideoControls('myVideo2', '.btn2', '.current-time2', '.total-time2', '.slider2');
    initializeVideoControls('myVideo3', '.btn3', '.current-time3', '.total-time3', '.slider3');
};
