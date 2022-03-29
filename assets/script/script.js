//const food1 = "chickn"

function getCals() {
   
    let food0 = "chicken"
    let food1 = document.getElementById('food1').value
    let food2 = document.getElementById('food2').value    
    let food3 = document.getElementById('food3').value
    let food4 = document.getElementById('food4').value
    let foods = [food0,food1,food2,food3,food4];
    let foodCals = []

    for (i=1;i<5;i++) {


 var foodQuery = 'https://api.edamam.com/api/nutrition-data?app_id=709d15ec&app_key=7d054cc543454bc65ec5a46c084b49fd&nutrition-type=logging&ingr='+foods[i]

 
 fetch(
     foodQuery 
 )
 .then(function(response) {
     return response.json();
   })
   .then(function(data) {
 
       console.log(data);

     var kCal = data.calories;
     foodCals.push(kCal)
     console.log(kCal)
   });
 }
 }

 

 

