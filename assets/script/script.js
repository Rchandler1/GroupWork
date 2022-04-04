let foodCals = [];
let sumWithInitial = "";
function getCals() {
  let food0 = document.getElementById("food1").value;
  let food1 = document.getElementById("food2").value;
  let food2 = document.getElementById("food3").value;
  let food3 = document.getElementById("food4").value;
  let foods = [food0, food1, food2, food3];

  let sum = 0;
  document.getElementById("f0").innerHTML = food0;
  document.getElementById("f1").innerHTML = food1;
  document.getElementById("f2").innerHTML = food2;
  document.getElementById("f3").innerHTML = food3;
  for (let i = 0; i < 4; i++) {
    var foodQuery =
      "https://api.edamam.com/api/nutrition-data?app_id=709d15ec&app_key=7d054cc543454bc65ec5a46c084b49fd&nutrition-type=logging&ingr=" +
      foods[i];

    fetch(foodQuery)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        var kCal = data.calories;
        foodCals.push(kCal);
        console.log(foodCals);
        document.getElementById("cals"+i).innerHTML = data.calories;
        const initialValue = 0;
    const sumWithInitial = foodCals.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    console.log(sumWithInitial)
    document.getElementById("total").innerHTML = sumWithInitial
      })

      


    
    }
    
    console.log(foodCals)
    


      
      
      
      
  //    var makeTable = function(){
    //  
      //  var table = document.getElementById("table1")
//        //var foodtype = document.createElement("p")
  //    foo/dtype.innerHTML=foods[i]
    ///   var calorieAmount = document.createElement("p")
       //calorieAmount.innerHTML=foodCals[i]
//        table.appendChild(foodtype)
  //      table.appendChild(calorieAmount)


     //   document.getElementById("row" + i).innerHTML = foods[i];
  ///      document.getElementById("cals"+i).value = foodCals[i];
//       console.log("cals"+i)

//      }
}


