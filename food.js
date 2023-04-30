const foods= [
    { food : "pizza and beer",
      price : "4만원"},
    { food : "sushi and sake",
      price : "5만원"},
    { food : "fried chicken and somack",
      price : "3만원"},
    { food : "taco and beer",
      price : "2만원"},
    { food : "ramen and sosu",
      price : "5천원"},
    { food : "cheese cake and coffee",
      price : "1만원"}  
  ]
  
  const food = document.querySelector("#food h4:first-child");
  const price = document.querySelector("#food h4:last-child");
  
  const num = Math.floor(Math.random()*(foods.length));
  console.log(num)
  
  const todayFood = foods[num];
  food.innerText = todayFood.food +"  "+ todayFood.price;
  