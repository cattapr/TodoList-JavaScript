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
    var button = document.createElement("button");
    var textButton = document.createTextNode("done");
    
 
    // Remove list when click on delete button   
    span.onclick = function() { 
      var div = this.parentElement;
      list.removeChild(div);
  }


    // Check list when click on 'done button' + remove both elements when moved to completeList
    button.onclick = function(){
      const listItem = this.parentElement;
      completeList.appendChild(listItem);
      listItem.removeChild(button);

    span.onclick = function() { 
      var div = this.parentElement;
      completeList.removeChild(div);
    }

  }

	  // Appending to HTML
	  newItem.appendChild(span);
	  span.appendChild(textSpan); 

	  newItem.appendChild(button);
	  button.appendChild(textButton);

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


