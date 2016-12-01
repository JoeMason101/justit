/*var car = { 
    
    "model": "Audi",
    "price": "25000",
    "engine": "Petrol"


}


var F1driers = ["Lewis","Kimi","Fernando"];


console.log(F1driers[0]);








console.log(car.engine);*/

/*
var F1 = {  
   "data":[  
      {  
         "car":"Mercedes",
         "driver":"Lewis",
         "wins":2
      },
      {  
         "circuit":"Monaco",
         "pointsystem":[  
            {  
               "firstplace":25,
               "secondplace":18,
               "thirdplace":15
            }
         ],
         "teams":11
      }
   ]
}
*/


//Starting with AJAX

var myRequest = new XMLHttpRequest; //Creating an instance of the http request
console.log("HELLO");

myRequest.onreadystatechange = function() {
    
    if(myRequest.readyState == 4 && myRequest.status == 200) { 
 
        console.log(myRequest.responseText);
        
    } 
};
    
myRequest.open("GET", "https://raw.githubusercontent.com/SenchaArchitect/CarListings/master/CarListings/data/cars.json", true);

myRequest.onload = function() { 
    var myData = JSON.parse(myRequest.responseText);
    
    console.log(myData);



}

myRequest.send();
console.log("test");

console.log(myRequest);


//console.log(F1.data[1].pointsystem[0].thirdplace);