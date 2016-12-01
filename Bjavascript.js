/* This is my JS for the Car Luxury Practice*/

document.getElementById("manufacturer").addEventListener("change",loadMyData,false);

document.getElementById("survey").addEventListener("change",loadMyData,false);
var theValues = document.getElementById("manufacturer");
var survey = document.getElementById("survey");


                                                          
function loadMyData() {
  var showValues = theValues.options[theValues.selectedIndex].value;
    console.log(showValues);
 var surveyStored = survey.options[survey.selectedIndex].value;
   


var myRequest = new XMLHttpRequest;

myRequest.open("GET","https://raw.githubusercontent.com/SenchaArchitect/CarListings/master/CarListings/data/cars.json", true);


myRequest.onload = function() {     
    
    if(myRequest.readyState == 4 && myRequest.status == 200) {
        
        var myData = JSON.parse(myRequest.responseText);
        
        function clearAll() { 
        var hideText = document.getElementById("");
        }
        
        if (showValues === "") {
            document.getElementById("manufacturerC").innerHTML = "";
            document.getElementById("modelC").innerHTML = "";
            document.getElementById("priceC").innerHTML = "";
            document.getElementById("descriptionC").innerHTML = "";
   //         document.getElementById("manufacturerC").innerHTML = "";
            
        } else {
            
            document.getElementById("manufacturerC").innerHTML = myData.data[showValues].manufacturer;
            document.getElementById("modelC").innerHTML = myData.data[showValues].model;
            document.getElementById("priceC").innerHTML = myData.data[showValues].price;
            document.getElementById("descriptionC").innerHTML = myData.data[showValues].wiki;
        
            

        }
        
        if(surveyStored === "") {
            document.getElementById("mechanicalC").innerHTML = "";
            document.getElementById("overallC").innerHTML = "";
            document.getElementById("powertrainC").innerHTML = "";
            document.getElementById("bodyC").innerHTML = "";
            document.getElementById("accessoriesC").innerHTML = "";
            
        } else {
    
            document.getElementById("overallC").innerHTML = myData.data[showValues].quality[0].rating;
            document.getElementById("mechanicalC").innerHTML = myData.data[showValues].quality[1].rating;
            document.getElementById("powertrainC").innerHTML = myData.data[showValues].quality[2].rating;
            document.getElementById("bodyC").innerHTML = myData.data[showValues].quality[3].rating;
            document.getElementById("accessoriesC").innerHTML = myData.data[showValues].quality[4].rating;
            
            
        }
      
    }
        //all the action happens here 
    }
        myRequest.onerror = function() { 
        document.getElementById("messageAlert").innerHTML = "You are not connected online and can't reach server";
      
        }
        myRequest.send();
        
    
}



