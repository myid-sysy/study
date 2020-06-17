// alert('Im Working. Im JS. Im Beautiful. Im Worth it')
//console.log('Im Working. Im JS. Im Beautiful. Im Worth it')

/*
const a = 221; //a를 생성하고, 숫자 221로 초기화.
let b = a - 5;
a = 4;
console.log(b ,a);
*/
 //  모든 expressions는 한 둘에 있어야 됨. 그리고 끝나는 곳을 선언하는 방법 ';'세미콜론 을 사용
 //  1) Create 생성 
 //  2) Initialize 초기화 필요할 때는 생성과 초기화를 동시에 함
 //  3) Use 사용
 // let =>  변수를 초기화하거나 생성할 떄에는 let을 써야하지만 사용할 떄는 쓰지않아도 됨.
 // const = 상수. 변하지 않음 
 //Assignment to constant variable. => 상수 변수에 대입. 에러 메세지가 뜸.

// String => text 큰 따옴표("")안에 작성하면 텍스트로 인식
const what = "SY";
console.log(what);

//Boolean
const wat = true; //모두 소문자로 작성하고 ""없음. 텍스트가 아님
// true = 1, false = 0

//Number
const num = 666;

//Float  floating number(떠돌이 소숫점)을 가지고 있음.
const dot = 55.5;

//Array 데이터를 저장하는 곳, 리스트 형태로 저장 여러 String들은 하나로 묶는거
const monday = "Mon";
const tue  = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(monday, thu, wed, thu, fri); //이건 효적인 방법이 아님

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", 54, true, "stuff", monday];
console.log(daysOfWeek);

// Array 3번째 요일을 알고 싶다 => console.log(daysOfWeek[2]); 

//Object 실제 객체를 만드는거 lable을 내가 저장하고 싶은 data 줄 수 있음.
// array 

// const nicoInfo = ["Nicolas", "55", true, "Seoul"];
const nicoInfo ={
    name:"Nico",
    age:33,
    gender:"Male",
    isHandsome:false,
    favMovies: ["oldboy","Along the gods","LOTR"],
    favFood: [{name:"Kimchi", fatty:false}, {name:"cheese burger", fatty:true}]
}

console.log(nicoInfo);

/*
console.log(nicoInfo.gender); //gender값만 받음. 즉 데이터의 이름만 사용


nicoInfo.gender = "Female";
console.log(nicoInfo.gender);
결과값이 male/ female이 나옴. const안에 있는 값(gender)을 바꿀 수 있음..?
*/
