var edamamApiKey = "e3dc2dfdc5b7caba73d800f52c560cdc"
var appID = "4c72f271"
var cocktailKey = "9973533"
var dinnerItems
var drinkItems



function getRecipes() {
    var requestURL = "https://api.edamam.com/api/recipes/v2/" + dinnerItems + "?app_id=" + appID + "&app_key=" + edamamApiKey + "&type=public&mealType=dinner&dishType=main_course,desserts,starter"


    fetch(requestURL)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
    })
}

function getDrinks() {
    var requestURL2 = "https://www.thecocktaildb.com/api/json/v2/" + cocktailKey + "/filter.php?i=" + drinkItems


    fetch(requestURL2)
    .then(function(response2) {
        return response2.json()
    })
    .then(function(data2) {
        console.log(data2)
    })
}
