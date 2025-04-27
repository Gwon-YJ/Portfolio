function toggleVideo(videoId, buttonClass, timeDisplayClass, totalTimeClass, sliderClass) {
    const myVideo = document.getElementById(videoId);
    const button = document.querySelector(buttonClass);
    const timeDisplay = document.querySelector(timeDisplayClass);
    const totalTimeDisplay = document.querySelector(totalTimeClass);
    const slider = document.querySelector(sliderClass);

    function updateTime() {
        const currentTime = myVideo.currentTime;
        const minutes = Math.floor(currentTime / 60);
        const seconds = Math.floor(currentTime % 60).toString().padStart(2, '0');
        timeDisplay.textContent = `${minutes}:${seconds}`; // 현재 시간 형식 (MM:SS)

        // 슬라이더 업데이트
        slider.value = currentTime;
        slider.max = myVideo.duration;

        // 총 시간 업데이트
        const totalMinutes = Math.floor(myVideo.duration / 60);
        const totalSeconds = Math.floor(myVideo.duration % 60).toString().padStart(2, '0');
        totalTimeDisplay.textContent = `${totalMinutes}:${totalSeconds}`; // 총 시간 형식 (MM:SS)
    }

    if (myVideo.paused) {
        myVideo.play();
        button.style.backgroundPosition = '0 -50px'; // 일시정지 아이콘
    } else {
        myVideo.pause();
        button.style.backgroundPosition = '0 0px'; // 재생 아이콘
    }

    myVideo.addEventListener('timeupdate', updateTime);

    // 슬라이더 변경 시 비디오 시간 설정
    slider.addEventListener('input', () => {
        myVideo.currentTime = slider.value;
    });

    // 메타데이터가 로드될 때 총 시간 업데이트
    myVideo.addEventListener('loadedmetadata', updateTime);
}

window.onload = function () {
    toggleVideo('myVideo', '.btn', '.current-time', '.total-time', '.slider');
    toggleVideo('myVideo2', '.btn2', '.current-time2', '.total-time2', '.slider2');
    toggleVideo('myVideo3', '.btn3', '.current-time3', '.total-time3', '.slider3');
};
