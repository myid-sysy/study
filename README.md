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

6/22
## clock part
<div>
  <img width="653" alt="스크린샷 2020-06-22 오후 9 53 46" src="https://user-images.githubusercontent.com/60874174/85296212-03561780-b4dc-11ea-8064-ed82dd909ced.png">
</div>
 console창을 이용하여 현재 시간 확인.
 
    function getTime(){
      const date = new Date();
      const minutes = date.getMinutes();
      const hours = date.getHours();
      const seconds = date.getSeconds();
      clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
          seconds < 10 ? `0${seconds}` : seconds
      }`;
    }
  - innerText : JS로 HTML을 다룰 때 DOM요소내의 내용을 조작. 일반적으로 택트를 엘리먼트에 추가할 경우 사용. 또한 사용자에게 보이는 텍스트 값만 가져온다.
  - innerHTML : innerText와 동일하게 사용된다. 차이점은 HTML 구조까지 모두 복사한다. 
  - 참고) https://hi098123.tistory.com/83
  
  - 삼항연산자 (ternary operator) 혹은 작은 if -> if문의 단축 형태. 하나의 문자열로 작성 가능
  
        조건문 ? 선택문1 : 선택문2;
        
   예시 ) 
   
        ${hours < 10 ? `0${hours}` : hours} 
        // 만약 hours가 10보다 작으면(?) hours 앞에 '0'을 붙이고 or(:) 아니면 hours 그대로 보여줘라.

- setInterval : 일정 시간마다 반복 실행하는 함수 

      setInterval(fn ,1000);
      
   두 인자(argument)을 받는데 첫번쨰 인자로는 실행할 함수를 받고, 그 함수를 실행하고 싶은 시간 입력.
   예시 ) getTime() 함수로 현재 시간은 받고, setInterval로 1초마다 갱신

      function init() {
          getTime();
          setInterval(getTime,1000);
      }
      init();
  
  
 
 
  
  
    
  
 
  
 
