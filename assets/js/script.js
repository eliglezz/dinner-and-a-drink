var edamamApiKey = "e3dc2dfdc5b7caba73d800f52c560cdc"
var appID = "4c72f271"
var cocktailKey = "9973533"
var dinnerItems
var drinkItems
var dinnerSearchBox = $(".dinner-container")
var drinkSearchBox = $(".drink-container")
var dinnerBoxBtn = $("#dinnerBtn")
var drinkBoxBtn = $("#drinkBtn")


//dinner recipes API
function getRecipes() {
    var requestURL = "https://api.edamam.com/api/recipes/v2?type=public&q=" + dinnerItems + "?app_id=" + appID + "&app_key=" + edamamApiKey + "&mealType=dinner&dishType=main_course,desserts,starter"


    fetch(requestURL)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
    })
}

//drink recipes API
function getDrinks() {
    var requestURL2 = "https://www.thecocktaildb.com/api/json/v2/" + cocktailKey + "/filter.php?i=" + drinkItems


    fetch(requestURL2)
    .then(function(response2) {
        return response2.json()
    })
    .then(function(data2) {
        console.log(data2)
    })

    //first response only contains drink names, thumbnail pic link, and drink id, second fetch searches each of the result id's for detailed info on each drink
for (var i = 0; i < SOMETHING.length; i++) {
var drinkID = data2.drinks.idDrink[i]
}
    var secondSearch = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID

    fetch(secondSearch)
    .then(function(response3) {
        return response3.json()
    })
    .then(function(data3) {
        console.log(data3)
    })
}















//hides the search boxex until needed currently disabled so we can see them as we build
// dinnerSearchBox.hide()
// drinkSearchBox.hide()

//shows search boxes based on which user wants to search for
dinnerBoxBtn.on('click', function() {
    dinnerSearchBox.show()
})
drinkBoxBtn.on('click', function() {
    drinkSearchBox.show()
})