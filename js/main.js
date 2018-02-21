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
    var textSpan = document.createTextNode("\u232B");
    span.className = "close";
    var button = document.createElement("button");
    var textButton = document.createTextNode("\u2713");
    button.className = "done";
    
 
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

//Current date format
function renderTime () {

	//Date variables
	var mydate = new Date(); 
	var year = mydate.getYear();
		if(year < 1000){
			year += 1900
		}
	var day = mydate.getDay();
	var month = mydate.getMonth();
	var daym = mydate.getDate();
	var dayarray = new Array("Sunday,","Monday,","´Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,");
	var montharray = new Array("January","February","March","April","May","June","July","August","September", "October","November","December")
	// Date End

	//Time 
	var currentTime = new Date ();
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();
		if(h == 24){
			h = 0;
		} else if(h > 12){
			h = h - 0;
		}

		if(h < 10){
			h = "0" + h;
		}

		if(m < 10){
			m = "0" + m;
		}

		if(s < 10){
			s = "0" + s;
		}

		// end ifstatments with "0" to make it look digital

		var myClock = document.getElementById("clockDisplay");
		myClock.textContent = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;
		myClock.innerText = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;

		setTimeout("renderTime()", 1000);
}
renderTime();



