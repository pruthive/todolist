//Start of the script

const button = document.getElementById("btn");
const todo = document.querySelector(".list-group-item");
const todoUL = document.querySelector(".list-group list-group-flush");
const todoDiv = document.querySelector(".listContainer");
const alert = document.getElementById("alert");

//Adding the event listener for the "Add" button
button.addEventListener("click", addToList);


//function for the button
 function addToList(e){
      
    //getting the textbox by ID
     const text = document.getElementById("txt");

     //checking if the text box value is null or not
     if(text.value == ""){
         
         alert.style.display = "block";
 
     }else{
        
        alert.style.display = "none";
        //creating a list element and setting it's attributes
        var newLi = document.createElement("li");
        newLi.setAttribute("class", "list-group-item");
        newLi.setAttribute("id", "inputTxt");

        //creating the span for the date and the delete button for the list item
        var newSpan = document.createElement("span");
        newSpan.setAttribute("class", "badge badge-primary badge-pill");
        newSpan.setAttribute("id", "date");
        var xSpan = document.createElement("button");
        xSpan.setAttribute("class", "btn btn-danger");
        xSpan.setAttribute("id", "deleteButton");
        xSpan.innerHTML = "X";

       //setting the user input value to the list item value
        newLi.innerHTML = text.value;
       
        //getting the date and creating a string for the complete date
        var d = new Date();
        newSpan.innerHTML = d.getUTCDate() +"/"+ (d.getMonth()+1)+"/"+ d.getUTCFullYear();

        //appending the date and the "X" button to the list item
        newLi.appendChild(newSpan);
        newLi.appendChild(xSpan);

        //appending the list item to the Div
        todoDiv.appendChild(newLi);
        
        //adding the eventlistener for the delete button
        xSpan.addEventListener("click", removeItem);

        function removeItem(){
            //referencing the parentNode of the list Item which is the UL and deleting the corresponding list item
            newLi.parentNode.removeChild(newLi);
        }

     }
        
    
    //failsafe for no reload on button submit   
    e.preventDefault();

 }


//end of the script

