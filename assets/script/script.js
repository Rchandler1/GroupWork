//const food1 = "chickn"

function getCals() {
    let food1 = document.getElementById('food1').value
    let food2 = document.getElementById('food2').value    
    let food3 = document.getElementById('food3').value
    let food4 = document.getElementById('food4').value
 
    for (i=1;i<5;i++) {


    //let food1 = "chicken"
 console.log(food1)


 var foodQuery1 = 'https://api.edamam.com/api/nutrition-data?app_id=709d15ec&app_key=7d054cc543454bc65ec5a46c084b49fd&nutrition-type=logging&ingr='+food1


 
 fetch(
     foodQuery1
 )
 .then(function(response) {
     return response.json();
   })
   .then(function(data) {
 
       console.log(data);
     console.log(data.calories);
     var kCal = data.calories;
     console.log(kCal)
   });
 }
 }

 

