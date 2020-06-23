const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDOs";
let toDos = [];



function deleteToDO(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li); 
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id); //parseInt는 string을 숫자로 바꿔줌.
    });
    toDos = cleanToDos
    saveToDos();
   
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //JSON.stringify는 JS object를 string으로 바꿔줌.
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId= toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDO);
    span.innerText = text
    li.appendChild(span);
    li.appendChild(delBtn);  //뭔가를 father element 안에 넣는거임. li 자식으로  span과 delBtn버튼을 넣는거임.
    li.id = newId;
    toDoList.appendChild(li); // .js-toDoList (ul) 자식으로 li를 넣음.
    const toDoOBJ = {
        text: text,
        id: newId
    };
    toDos.push(toDoOBJ); // push를 사용해서 array(toDOs)안에 element(toDoOBJ)를 넣어주는거.
    saveToDos(); //push 한 이후에 호출 
}

function handleSubmit(){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; //submit 후 toDoInput을 공란으로 만들기.

}

function loadTodos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        }); //array 가 가진거 forEach는 기본적으로 함수를 실행하는데, array 안에 담겨있는 것들 각각에 한번씩 함수를 실행시켜주는거
    }
}

/*
JSON (JavaScript Object Notation) - 데이터를 전달할 때, JS가 그걸 다룰 수 있도록 object로 바꿔주는 기능 string <-> object 서로 바꾸는거 가능
*/

function init(){
    loadTodos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();