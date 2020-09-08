var sideRadio = document.querySelector("#side");
var mainRadio = document.querySelector("#main");
var dessertRadio = document.querySelector("#dessert");
var entireRadio = document.querySelector("#entire");
var letsCook = document.querySelector(".lets-cook-button");
var potImage = document.querySelector(".pot-image");
var suggestionText = document.querySelector(".suggestion-text");

var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies"
];

var mainDish = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza"
];

var desserts = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs",
];

letsCook.addEventListener("click", function() {
  toggleHidden(suggestionText, potImage);
});

sideRadio.addEventListener("click", function() {
  getRandomFoodItem(sides);
})

function toggleHidden(show, hide) {
  show.classList.toggle("hidden");
  hide.classList.toggle("hidden");
}

function getRandomFoodItem(foodArray) {
  var randomFood = Math.floor(Math.random() * foodArray.length);
  return foodArray[randomFood];
}
