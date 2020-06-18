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
