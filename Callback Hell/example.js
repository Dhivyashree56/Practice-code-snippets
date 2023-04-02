const foodOrder = (ordNumber, callback) => {
    setTimeout(() => {
      const foodDescription = {
         order: ordNumber,
         meal: 'Burger',
         drink: 'Sprite'
      }
      
      callback(foodDescription);
    }, 5000)
 }
 
 // calling the foodOrder function and passing a callback function as a parameter 
 foodOrder(5, (foodDescription) => {
   console.log(foodDescription)
 });