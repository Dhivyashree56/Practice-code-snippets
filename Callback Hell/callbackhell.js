// node js callback hell example
const makeBurger = () => {
    getIngredients(function(potato) {
        // We can only cook potato after we get it with other ingredients.
        cookPatty(potato, function(cookedPatty) {
            // get the buns
            getBuns(function(buns) {
                // Put patty in bun
                putAlooBetweenBuns(buns, potato, function(burger) {
                    // Serve the burger
                    nextStep(burger);
                });
            });
       });
    });
};

// function to Make and serve the burger
makeBurger((burger) => {
  serve(burger);
})
