const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSumit(event){
    event.preventDefault(); //event의 기본동작(기본값)을 막는거.
    const currentValue = input.value;
    // value 값을 받아서 paintGreeting을 다시 호출
    paintGreeting(currentValue);
    saveName(currentValue);
}
// event의 preventDefault 
function askForName(){ // currentUser가 없다면 form을 보여주는거임. 있다면 보여줄 필요 없음.
    form.classList.add(SHOWING_CN); 
    form.addEventListener("submit", handleSumit);                                                                                                                                                                                         
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

function loadName(){ //local storage에서 정보를 가져오는 역할
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser); //유저가 있는 경우 paintGreeting 함수 호출 로컬 스토리지에서 가져온 텍스트와 함께
    }

}

function init(){
    loadName();
}
init();