function generateRecipe(event) {
  event.preventDefault();
  new Typewriter("#recipe", {
    strings: [
      "Pilau Recipe:\n\nIngredients:\n- 2 cups basmati rice\n- 1/4 cup vegetable oil\n- 1 onion, sliced\n- 2 cloves garlic, minced\n- 1 teaspoon cumin seeds\n- 1 teaspoon cardamom pods\n- 1 cinnamon stick\n- 4 cups water\n- Salt to taste\n\nInstructions:\n1. Rinse the rice under cold water until the water runs clear. Soak for 30 minutes, then drain.\n2. Heat oil in a large pot over medium heat. Add sliced onions and sauté until golden brown.\n3. Add minced garlic, cumin seeds, cardamom pods, and cinnamon stick. Sauté for another minute until fragrant.\n4. Add the drained rice to the pot and stir to coat the rice with the spices and oil.\n5. Pour in the water and add salt to taste. Bring to a boil.\n6. Once boiling, reduce heat to low, cover the pot, and simmer for 15-20 minutes or until the rice is cooked and water is absorbed.\n7. Remove from heat and let it sit covered for 5 minutes. Fluff the rice with a fork before serving.\nEnjoy your delicious Kenyan Pilau!",
    ],
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

let recipeElementForm = document.querySelector("#recipe-form");
recipeElementForm.addEventListener("submit", generateRecipe);
