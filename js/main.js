//    Global variables 
var list = document.getElementById("todoList");
var completeList = document.getElementById("completeList");


// Create list Item from input value and create List
function todoList() {   
    var item = document.getElementById("taskInput").value;
    var textItem = document.createTextNode(item);   
    var newItem = document.createElement("li");

 	// Create Delete and Check buttons  
    var span = document.createElement("SPAN");
    var textSpan = document.createTextNode("\u00D7");
    span.className = "close";
    

	  // Appending to HTML
	  newItem.appendChild(span);
	  span.appendChild(textSpan); 

	  newItem.appendChild(textItem);   
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


