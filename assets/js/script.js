var edamamApiKey = "e3dc2dfdc5b7caba73d800f52c560cdc"
var appID = "4c72f271"
var cocktailKey = "9973533"
var dinnerItems
var drinkItems
var excludeItems
var dinnerSearchBox = $(".recipe-search")
var drinkSearchBox = $(".drink-container")
var dinnerBoxBtn = $("#dinnerBtn")
var drinkBoxBtn = $("#drinkBtn")
var ingredients = $("#ingredients")
var ingredientList = $(".ingredient-list")
var ingredientAddBtn = $(".add-btn")
var ingredientsArray = []
var excludeArray = []
var searchBtn = $("#do-it")
var excludeAddBtn = $(".exclude-btn")
var excludeList = $(".exclude-list")
var exclude = $("#exclude")
var recipeContainer = $("#recipe-cards")


//dinner recipes API
function getRecipes() {
    dinnerItems = ingredientsArray.join('%2C')
    console.log(excludeArray)

    //Adds excluded items into the url if there are any
    if (excludeArray.length == 0) {
        excludeItems = ""
    } else {
        excludeItems = '&excluded=' + excludeArray.join('&excluded=')
    }
    
    console.log(dinnerItems)
    console.log(excludeItems)

    var requestURL = "https://api.edamam.com/api/recipes/v2?type=public&q=" + dinnerItems + "&app_id=" + appID + "&app_key=" + edamamApiKey + "&mealType=dinner&ishType=Desserts&dishType=Main%20course&dishType=Starter&imageSize=REGULAR" + excludeItems + "&random=true&field=uri&field=label&field=image&field=source&field=ingredientLines&field=ingredients&field=url"

    console.log(requestURL)

    fetch(requestURL)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        $("#second-name").text(data.hits[1].recipe.label)
        $("#second-link").attr('href', data.hits[1].recipe.url)
        $("#second-image").attr('src', data.hits[1].recipe.image)

        //create list for ingredients
        for (var i = 0; i < data.hits[1].recipe.ingredientLines.length; i++) {
        var eachIngredient = data.hits[1].recipe.ingredientLines[i]
        var listedIngredients = document.createElement("li")
        listedIngredients.textContent = eachIngredient
        $("#second-list").append(listedIngredients)  
        }
      })
      recipeContainer.show()
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

    //first response only contains drink names, thumbnail pic link, and drink id, second fetch searches each of the first fetch result id's for detailed info on each drink
    for (var i = 0; i < SOMETHING.length; i++)
    var drinkID = data2.drinks.idDrink[i]

    var secondSearch = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID

    fetch(secondSearch)
    .then(function(response3) {
        return response3.json()
    })
    .then(function(data3) {
        console.log(data3)
    })
}

//in the dinner search card these allow user to add their available ingredients or choose recipes which include certain ingredients as criteria
ingredientAddBtn.on('click', function() {
    var addIngredient = document.createElement('li')
    addIngredient.textContent = ingredients.val()
    ingredientList.append(addIngredient)
    ingredientsArray.push(ingredients.val())
    console.log(ingredientsArray)
})

excludeAddBtn.on('click', function() {
    var addExclude = document.createElement('li')
    addExclude.textContent = exclude.val()
    excludeList.append(addExclude)
    excludeArray.push(exclude.val())
    console.log(excludeArray)
})



//hides the search boxex until needed currently disabled so we can see them as we build
dinnerSearchBox.hide()
drinkSearchBox.hide()
recipeContainer.hide()

//shows search boxes based on which user wants to search for
dinnerBoxBtn.on('click', function() {
    dinnerSearchBox.show()
    drinkSearchBox.hide()
})
drinkBoxBtn.on('click', function() {
    drinkSearchBox.show()
    dinnerSearchBox.hide()
})

//inside search boxes do it button
searchBtn.on('click', getRecipes)