// console.log / alert => built-in function

console.log('Grettings Nicolas');
console.log('Grettings Jun');
console.log('Grettings Liyn');
console.log('Grettings Dal');

// 이름을 받아와서 내가 무슨 이름은 주든 Gretting을 해주게 나오는 함수?

//JS 함수를 정의하는 문법
//외부에 있는 데이터를 읽는 함수를 만드는 방법
function sayHello(name, age){ //()<- argument를 넣어는거임     변수명이라고 생각하면 됨.(함수안에서 사용하게 될 이름)
    console.log('Hello', name, " you havev ", age, " years of age. "); //console.log 함수는 argument를 무한하게 가질 수 있음.
}

sayHello("Nicolas", 15);

// JS "Nicolas"값을 potato애 넣고 potato = Nicolas가 되는 거임. 결과값은 Hello Nicolas가 나옴

/*
sayHello(); 가 log(); 의 모양과 비슷함.
console.log(); log= 함수 
console object 안에 있는 함수라는 뜻
("넣고 싶은 것을 두개 따옴표 안에 넣으면 함수는 그걸 이용함.")
인자(argument) -> 변수 같은 거 우리가 주는 값은 저장함.함수 우리가 주는 argument를 가지고 갈 수 있게? sayHello를 준비시켜야 됨.  
*/



// JS DOM Function
// const title = document.getElementById("title");
// title.innerHTML= "Hi! From JS";
// title.style.color = "white";
// document.title = "I own you now";


// const selector = document.querySelector("#title"); //css 선택자와 비슷함.
// title.innerHTML= "Hi! From JS";
// title.style.color = "red";
// document.title = "I own you now";
// console.dir(document);


/*
DOM = Document Object Module
JS는 HTML있는 모든 요소를 가져오고 그리고 그걸 객체로(object) 바꿈
*/

/*
Events and event handlers
*/

// const selector = document.querySelector("#title");

// function handleClick(){
//     // console.log(" I have been resized");
//     title.style.color = "red";
// }
// title.addEventListener("click", handleClick); //윈도우 사이즈가 변화될 떄 handleResize 함수를 호출하자~!


// window.addEventListener("resize", handleResize) -> 필요한 시점에서 함수를  호출하는거 
// window.addEventListener("resize", handleResize()) -> 지금 당장 함수를 호출하는거


/*
2-5
if-else 
if(condition조건){ // 조건은 항상 true
    block  //true
} else {
    block //false
}
*/
if ("10" === 10){ //문자열과 숫자는 같지 않음.
    console.log('hi');
} else if("10" === "10"){
    console.log("lalala");
} else {
    console.log("ho");
}

/*
AND = &&
true &&  true = true;
true && false =false;
false && true = false;
false && false = false;
둘 중 하나라도 거짓이만 false
*/

if(20 >5 && "nicolas" === "nicolas"){
    console.log('yes');
} else {
    console.log('no');
}

/*
OR= ||
true ||  true = true;
true || false = true;
false ||  true = true;
false ||  false = false;
하나 혹운 나머지 것 을 뜻함.

*/


if(20 >5 ||"niolas" === "nicolas"){
    console.log('yes');
} else {
    console.log('no');
}

const age =  prompt("How old are you"); 

if (age >= 18 && age <= 21){
    console.log("you can drink but you should not");
} else if(age > 21){
    console.log("go ahed");
} else {
    console.log("too young");
}

console.log(age);


// 연습1
/*
const title = document.querySelector("#title");
const BASE_COLOR = "rgb(69, 69, 69)";
const OTHER_COLOR = "#ffffff";

function handleClick() { 
    const currentColor = title.style.color;
    // console.log(currentColor);
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(){ //어플리케이션을 초기화
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick); //click을 하면 handleClick()함수를 호출

}

init(); //호출
*/

// 연습2

const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
    // const hasClass = title.classList.contains(CLICKED_CLASS); //value값이 존재 하는지 체크
    // if(hasClass){  // hasClass가 CLICKED_CLASS를 가지고 있는지 체크 
    //     title.classList.remove(CLICKED_CLASS);
    // } else {
    //     title.classList.add(CLICKED_CLASS);
    // }
    title.classList.toggle(CLICKED_CLASS);
}

function init(){ //어플리케이션을 초기화
    title.addEventListener("click", handleClick); //click을 하면 handleClick()함수를 호출
}
init();
