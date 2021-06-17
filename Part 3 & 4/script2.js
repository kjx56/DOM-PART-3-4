

let addToDoButton = document.getElementById('ntn_1');
let toDoContainer = document.getElementById('Container_3');
let inputField = document.getElementById('TXTbx');
let LISTARR = [];
let LIST , id;
var Store_data = localStorage.getItem("TODO") ;

if(Store_data){
   LIST = JSON.parse(Store_data);
   id = LIST.length;
   loadList(LIST);

}else{
      
    LIST = [];
    id = 0;

}

function loadlist(array){
  array.array.forEach(element => {
      addToDoButton(array.length);
  });

}

alert("Click item once to cross out item, Click item twice to delete");
    

const NewTextadd = (ev) =>{
    ev.preventDefault();
      
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = `--${inputField.value}`;
    toDoContainer.appendChild(paragraph);
    LISTARR.push(paragraph.innerText);
    localStorage.setItem("TODOLIST", JSON.stringify(LISTARR));
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
        paragraph.style.color = "grey"
    })
    paragraph.addEventListener('dblclick', function(event){
        toDoContainer.removeChild(paragraph);
        
    })


    
  };


  

  




document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('ntn_1').addEventListener('click', NewTextadd);

});



