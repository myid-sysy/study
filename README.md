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
