//    Global variables 
var list = document.getElementById("todoList");
var completeList = document.getElementById("completeList");


// Create list Item from input value and create List
function todoList() {   
    var item = document.getElementById("taskInput").value;
    var text = document.createTextNode(item);   
    var newItem = document.createElement("li");

 
  newItem.appendChild(text);   
  list.appendChild(newItem); 


} //function todolist () ends here.



//    Reset List
function resetList() {        
    list.innerHTML = "";  

}


// Reset list on completedList
function resetCompleteList() {        
    completeList.innerHTML = "";

}


