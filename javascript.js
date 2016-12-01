
var correctPassword = "Joe";
var i = 0; // Counter

var correctP = []; // empty array waiting for data

var wrongP = []; // empty array waiting for data 


document.getElementById("myButton").addEventListener("click", checkFunction, false ); //event listener
document.getElementById("enterWebsite").style.visibility="hidden"; //hide the button to start
   
function checkFunction() {
    

    var userInput = document.getElementById("userP").value;
console.log(userInput);
    if(userInput !== correctPassword && userInput !== "") {
        i++;
        
       switch(i) { 
       
           case 1:
               var linkButton = document.getElementById("linkB").style.visibility="visible";
               
               document.getElementById("myMessage").innerHTML = "You entered your PASSWORD WRONG <br /> <br />" + (i) + "TIME(S), you are left with 2 more chances <br /> <br/> then you will be locked out of your account.";
               
               var linkButton = document.getElementById("linkB").firstElementChild.style.visibility = "hidden";
               
               wrongP.push(userInput);
               
               break;
               
           case 2:
       
                var linkButton = document.getElementById("linkB").style.visibility="visible";
               
               document.getElementById("myMessage").innerHTML = "You entered your PASSWORD WRONG <br /> <br />" + (i) + "TIME(S), you are left with 1 more chance <br /> <br/> then you will be locked out of your account.";
               
               var linkButton = document.getElementById("linkB").firstElementChild.style.visibility = "hidden";
               
               wrongP.push(userInput);
               
               break;
               
           default:
       
                var linkButton = document.getElementById("linkB").style.visibility="hidden";
               
               document.getElementById("myMessage").innerHTML = "You entered your PASSWORD WRONG 3 times <br /> <br />" + (i) + "TIME(S) <br /> <br/> you are now locked out of your account.";
               
               var linkButton = document.getElementById("linkB").firstElementChild.style.visibility = "hidden";
               
               wrongP.push(userInput);
               
           
               
               var submitP = document.getElementById("myButton");
               submitP.remove();
               
            
               
               document.getElementById("wrongMessages").innerHTML = "HERE ARE YOUR WRONG PASSWORDS: <br /> <br />" +
                   wrongP.toString().split(",").join("  | ");
               
               break;
       }
        
  
    
    } else if (userInput === "") {
        document.getElementById("myMessage").innerHTML = "You have not entered anything";
    } else {
        document.getElementById("myMessage").innerHTML = "You are now able to access my website!"
        document.getElementById("enterWebsite").style.visibility = "visible";
    }

}

//document.title = "This is the new tite";
// document.getElementsByTagName("title")[0].innerHTML = "Whatever you want";

