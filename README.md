# study
## 1-6) Variables
  모든 expressions는 한 둘에 있어야 됨. 그리고 끝나는 곳을 선언하는 방법 ';'세미콜론 을 사용
  
    1. Create 생성 
    2. Initialize 초기화 필요할 때는 생성과 초기화를 동시에 함
    3. Use 사용
 
   let =>  변수를 초기화하거나 생성할 떄에는 let을 써야하지만 쓰지 않아도 작동됨(안좋은 습관?)
 
 ## 1-7) let, const, var
    const => 상수, 변수의 변화를 허용하지 않음.
    let => 변수의 변화를 허용
    
    
       const a = 221;  // const로 선언하고 
       let b = a - 5;
       a = 4;
       console.log(b ,a); //console.log를 찍었을 때 에러메세지가 뜸.
    
    
   Assignment to constant variable. => 상수 변수에 대입.

## 2-1) function
### JS 함수를 정의하는 문법

  외부에 있는 데이터를 읽는 함수를 만드는 방법
  
    function sayHello(name, age){ 
    console.log('Hello', name, " you havev ", age, " years of age. "); 
    }
    
    sayHello("Nicolas", 15);
    
    
Result
------

  <div>  
    <img width="642" alt="스크린샷 2020-06-18 오후 1 51 25" src="https://user-images.githubusercontent.com/60874174/84979664-f3040c80-b16a-11ea-99c7-85453d4f3d72.png">
  </div>


- function sayHello(name, age)<- argument를 넣어는거임 변수명이라고 생각하면 됨.(함수안에서 사용하게 될 이름)
- console.log 함수는 argument를 무한하게 가질 수 있음.
- sayHello(); 가 log(); 의 모양과 비슷함.
- console.log(); log= 함수 
 console object 안에 있는 함수라는 뜻
("넣고 싶은 것을 두개 따옴표 안에 넣으면 함수는 그걸 이용함.")
- 인자(argument) -> 변수 같은 거 우리가 주는 값은 저장함. 함수 우리가 주는 argument를 가지고 갈 수 있게? sayHello를 준비시켜야 됨.  

## JS DOM Function

 - DOM : Document Object Module 
 - HTML을 이 DOM 객체(object)로 바꿔서 자바스크립트로 활용할 수 있음, HTML로 style을 수정 할 수 있지만 권장하지 않음.
 
 ```  
 const title = document.getElementById("title"); 
 title.innerHTML= "Hi! From JS";
 title.style.color = "white";
 document.title = "I own you now";
 ```
   
getElementById => id값으로 특정한 값을 가진 요소를 가져오는거.
 
```  
const selector = document.querySelector("#title"); //css 선택자와 비슷함.
title.innerHTML= "Hi! From JS";
title.style.color = "red";
document.title = "I own you now";
console.dir(document);
```   
querySelector("#title"); => CSS 선택자로 선택 주의할 점은 선택자에 해당하는 첫번째 요소만 선택한다는 점.


## Events and event handlers

```   
const selector = document.querySelector("#title"); //id= "title" 값을 선택

function handleClick(){
      console.log(" I have been resized");
      title.style.color = "red";
 }
title.addEventListener("click", handleClick); //click handleResize 함수를 호출하는게 addEventListener?
```   

addEventListener => 이벤트가 발생했을 때 그 처리를 담당하는 함수. 지정된 타입의 이벤트가 특정요소에 발생하면, 웹 브라우져는 그 요소에 해당하는 이벤트 리스너를 실행시킴.

- window.addEventListener("resize", handleResize) -> 필요한 시점에서 함수를  호출하는거 
- window.addEventListener("resize", handleResize()) -> 지금 당장 함수를 호출하는거

## If else / AND / OR

#### if-else 
``` 
if(condition조건){ // 조건은 항상 true
    block  //true
} else {
    block //false
}
``` 

#### AND = &&
- true &&  true = true;
- true && false =false;
- false && true = false;
- false && false = false;
- 둘 중 하나라도 거짓이만 false


#### OR= ||
- true ||  true = true;
- true || false = true;
- false ||  true = true;
- false ||  false = false;
- 하나 혹은 나머지 것을 뜻함.

