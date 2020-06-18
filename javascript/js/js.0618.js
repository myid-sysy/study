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