var foodType = 'chicken'

fetch(
    'https://api.edamam.com/api/nutrition-data?app_id=709d15ec&app_key=7d054cc543454bc65ec5a46c084b49fd&nutrition-type=logging&ingr='+foodType
)
.then(function(response) {
    return response.json();
  })
  .then(function(data) {
      console.log(data)
    console.log(data.calories);
  });