function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let instructionsElement = document.querySelector("#input-data");
  let apiKey = "7e0d4oc64c0e7t1ff280ab9035a47b70";
  let prompt = `Generate a recipe based on the following ingredients: ${instructionsElement.value}`;
  let context =
    "You are a world class chef that creates delicious recipes, create recipes that are easy to follow and fun to make, make the recipes very short, include a title for recipe and use <strong><strong> element, each step should be in a new line, use <br /> to create a new line.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayRecipe);
}

let recipeElementForm = document.querySelector("#recipe-form");
recipeElementForm.addEventListener("submit", generateRecipe);
