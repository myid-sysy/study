const clockContainer = document.querySelector(".js-clock"), //해당하는 class 값을 찾아줌.
 clockTitle = clockContainer.querySelector("h1");

// querySelector는  element(document)의 자식을 탐색 clockTitle은 clickContainer의 자식을 탐색하고 싶기 때문에
// clockContainer.querySelector("h1"); -> 이렇게 작성이 됨.

// 1. 현재 시간을 가져오는 거
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}

// 초기화 과정에서 1) 시간을 얻고 getTime() , 2)interval 설정
function init() {
    getTime();
    setInterval(getTime,1000);
    
}
init();

// setInterval(fn ,1000); 두 인자(argument)을 받는데 첫번쨰 인자로는 실행할 함수를 받고, 그 함수를 실행하고 싶은 시간 입력.