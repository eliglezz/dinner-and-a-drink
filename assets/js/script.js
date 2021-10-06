//websites access
var edamamApiKey = "e3dc2dfdc5b7caba73d800f52c560cdc"
var appID = "4c72f271"
var cocktailKey = "9973533"

//global available undefined until later
var dinnerItems
var drinkItems
var excludeItems

//dinner box
var dinnerSearchBox = $(".recipe-search")
var dinnerBoxBtn = $("#dinnerBtn")

//drink box
var drinkSearchBox = $(".drink-container")
var drinkBoxBtn = $("#drinkBtn")

//inside dinner search box
var ingredients = $("#ingredients")
var ingredientList = $(".ingredient-list")
var ingredientAddBtn = $(".add-btn")
var ingredientsArray = []
var excludeArray = []
var searchBtn = $("#do-it")
var excludeAddBtn = $(".exclude-btn")
var excludeList = $(".exclude-list")
var exclude = $("#exclude")

//inside drink search box
var drinkIngredientAddBtn = $(".drink-add-btn")
var drinkIngredient = $("#drink-ingredients")
var drinkIngredientList = $(".drink-ingredient-list")
var drinkIngredientsArray = []
var drinkIDArray = []
var drinkResults = []
var drinkSearchBtn = $("#do-it-drink")
var randomBtn = $('#random')
var drinkSearchInput = $('#searchByName')
var drinkSearchBtn2 = $('#searchByNameBtn')


//recipe cards container
var recipeContainer = $("#recipe-cards")

//dinner recipes API
function getRecipes() {
    dinnerItems = ingredientsArray.join('%2C')

    //Adds excluded items into the url if there are any
    if (excludeArray.length == 0) {
        excludeItems = ""
    } else {
        excludeItems = '&excluded=' + excludeArray.join('&excluded=')
    }

    var requestURL = "https://api.edamam.com/api/recipes/v2?type=public&q=" + dinnerItems + "&app_id=" + appID + "&app_key=" + edamamApiKey + "&mealType=dinner&ishType=Desserts&dishType=Main%20course&dishType=Starter&imageSize=REGULAR" + excludeItems + "&random=true&field=uri&field=label&field=image&field=source&field=ingredientLines&field=ingredients&field=url"

    console.log(requestURL)

    fetch(requestURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            //first card
            $("#first-name").text(data.hits[0].recipe.label)
            $("#first-link").attr('href', data.hits[0].recipe.url)
            $("#first-image").attr('src', data.hits[0].recipe.image)
            $("#first-image").attr('alt', data.hits[0].recipe.label)

            //create list for ingredients
            for (var i = 0; i < data.hits[0].recipe.ingredientLines.length; i++) {
                var eachIngredient = data.hits[0].recipe.ingredientLines[i]
                var listedIngredients = document.createElement("li")
                listedIngredients.textContent = eachIngredient
                $("#first-list").append(listedIngredients)
            }

            //second card
            $("#second-name").text(data.hits[1].recipe.label)
            $("#second-link").attr('href', data.hits[1].recipe.url)
            $("#second-image").attr('src', data.hits[1].recipe.image)
            $("#second-image").attr('alt', data.hits[1].recipe.label)

            //create list for ingredients
            for (var i = 0; i < data.hits[1].recipe.ingredientLines.length; i++) {
                var eachIngredient = data.hits[1].recipe.ingredientLines[i]
                var listedIngredients = document.createElement("li")
                listedIngredients.textContent = eachIngredient
                $("#second-list").append(listedIngredients)
            }

            //third card
            $("#third-name").text(data.hits[2].recipe.label)
            $("#third-link").attr('href', data.hits[2].recipe.url)
            $("#third-image").attr('src', data.hits[2].recipe.image)
            $("#third-image").attr('alt', data.hits[2].recipe.label)

            //create list for ingredients
            for (var i = 0; i < data.hits[2].recipe.ingredientLines.length; i++) {
                var eachIngredient = data.hits[2].recipe.ingredientLines[i]
                var listedIngredients = document.createElement("li")
                listedIngredients.textContent = eachIngredient
                $("#third-list").append(listedIngredients)
            }

            //fourth card
            $("#fourth-name").text(data.hits[3].recipe.label)
            $("#fourth-link").attr('href', data.hits[3].recipe.url)
            $("#fourth-image").attr('src', data.hits[3].recipe.image)
            $("#fourth-image").attr('alt', data.hits[3].recipe.label)

            //create list for ingredients
            for (var i = 0; i < data.hits[3].recipe.ingredientLines.length; i++) {
                var eachIngredient = data.hits[3].recipe.ingredientLines[i]
                var listedIngredients = document.createElement("li")
                listedIngredients.textContent = eachIngredient
                $("#fourth-list").append(listedIngredients)
            }

            //fifth card
            $("#fifth-name").text(data.hits[4].recipe.label)
            $("#fifth-link").attr('href', data.hits[4].recipe.url)
            $("#fifth-image").attr('src', data.hits[4].recipe.image)
            $("#fifth-image").attr('alt', data.hits[4].recipe.label)

            //create list for ingredients
            for (var i = 0; i < data.hits[4].recipe.ingredientLines.length; i++) {
                var eachIngredient = data.hits[4].recipe.ingredientLines[i]
                var listedIngredients = document.createElement("li")
                listedIngredients.textContent = eachIngredient
                $("#fifth-list").append(listedIngredients)
            }

            //sixth card
            $("#sixth-name").text(data.hits[5].recipe.label)
            $("#sixth-link").attr('href', data.hits[5].recipe.url)
            $("#sixth-image").attr('src', data.hits[5].recipe.image)
            $("#sixth-image").attr('alt', data.hits[5].recipe.label)

            //create list for ingredients
            for (var i = 0; i < data.hits[5].recipe.ingredientLines.length; i++) {
                var eachIngredient = data.hits[5].recipe.ingredientLines[i]
                var listedIngredients = document.createElement("li")
                listedIngredients.textContent = eachIngredient
                $("#sixth-list").append(listedIngredients)
            }
        })
    recipeContainer.show()
    dinnerSearchBox.hide()
}

//drink recipes API
function getDrinks() {
    drinkItems = drinkIngredientsArray.join()
    drinkItems = drinkItems.replace(' ', '+')
    console.log(drinkItems)
    var requestURL2 = "https://www.thecocktaildb.com/api/json/v2/" + cocktailKey + "/filter.php?i=" + drinkItems

    console.log(requestURL2)

    fetch(requestURL2)
        .then(function (response2) {
            return response2.json()
        })
        .then(function (data2) {
            console.log(data2)
            console.log(data2.drinks)
            if (data2.drinks == 'None Found') {
                $("#first-card").hide()
                $("#second-card").hide()
                $("#third-card").hide()
                $("#fourth-card").hide()
                $("#fifth-card").hide()
                $("#sixth-card").hide()
                var sorryResponse = "<p>Sorry. Your search parameters returned no results. Please click on the Drinks button to try again</p>"
                $("#recipe-cards").append(sorryResponse)
            } else {

                //first response only contains drink names, thumbnail pic link, and drink id, second fetch searches each of the first fetch result id's for detailed info on each drink
                for (var i = 0; i < data2.drinks.length; i++) {
                    var drinkID = data2.drinks[i].idDrink
                    drinkIDArray.push(drinkID)
                }

                for (i = 0; i < 6; i++) {
                    var secondSearch = "https://www.thecocktaildb.com/api/json/v2/" + cocktailKey + "/lookup.php?i=" + drinkIDArray[i]


                    fetch(secondSearch)
                        .then(function (response3) {
                            return response3.json()
                        })
                        .then(function (data3) {
                            drinkResults.push(data3)
                            console.log(drinkResults)
                            $("#first-card").hide()
                            $("#second-card").hide()
                            $("#third-card").hide()
                            $("#fourth-card").hide()
                            $("#fifth-card").hide()
                            $("#sixth-card").hide()

                            //first card name, pic, and link creation
                            $("#first-name").text(drinkResults[0].drinks[0].strDrink)
                            $("#first-link").attr('href', 'https://www.thecocktaildb.com/drink/' + drinkResults[0].drinks[0].idDrink)
                            $("#first-image").attr('src', drinkResults[0].drinks[0].strDrinkThumb)
                            $("#first-image").attr('alt', drinkResults[0].drinks[0].idDrink)

                            //second card name, pic, and link creation
                            $("#second-name").text(drinkResults[1].drinks[0].strDrink)
                            $("#second-link").attr('href', 'https://www.thecocktaildb.com/drink/' + drinkResults[1].drinks[0].idDrink)
                            $("#second-image").attr('src', drinkResults[1].drinks[0].strDrinkThumb)
                            $("#second-image").attr('alt', drinkResults[1].drinks[0].idDrink)

                            //third card name, pic, and link creation
                            $("#third-name").text(drinkResults[2].drinks[0].strDrink)
                            $("#third-link").attr('href', 'https://www.thecocktaildb.com/drink/' + drinkResults[2].drinks[0].idDrink)
                            $("#third-image").attr('src', drinkResults[2].drinks[0].strDrinkThumb)
                            $("#third-image").attr('alt', drinkResults[2].drinks[0].idDrink)

                            //fourth card name, pic, and link creation
                            $("#fourth-name").text(drinkResults[3].drinks[0].strDrink)
                            $("#fourth-link").attr('href', 'https://www.thecocktaildb.com/drink/' + drinkResults[3].drinks[0].idDrink)
                            $("#fourth-image").attr('src', drinkResults[3].drinks[0].strDrinkThumb)
                            $("#fourth-image").attr('alt', drinkResults[3].drinks[0].idDrink)

                            //fifth card name, pic, and link creation
                            $("#fifth-name").text(drinkResults[4].drinks[0].strDrink)
                            $("#fifth-link").attr('href', 'https://www.thecocktaildb.com/drink/' + drinkResults[4].drinks[0].idDrink)
                            $("#fifth-image").attr('src', drinkResults[4].drinks[0].strDrinkThumb)
                            $("#fifth-image").attr('alt', drinkResults[4].drinks[0].idDrink)

                            //sixth card name, pic, and link creation
                            $("#sixth-name").text(drinkResults[5].drinks[0].strDrink)
                            $("#sixth-link").attr('href', 'https://www.thecocktaildb.com/drink/' + drinkResults[5].drinks[0].idDrink)
                            $("#sixth-image").attr('src', drinkResults[5].drinks[0].strDrinkThumb)
                            $("#sixth-image").attr('alt', drinkResults[5].drinks[0].idDrink)

                            // first card create list for ingredients
                            for (var i = 1; i < 15; i++) {
                                if (drinkResults[0].drinks[0]['strIngredient' + i] !== null && drinkResults[0].drinks[0]['strIngredient' + i] !== "") {
                                    var eachDrinkIngredient = drinkResults[0].drinks[0]['strIngredient' + i]
                                    var listedDrinkIngredients = document.createElement("li")
                                    listedDrinkIngredients.textContent = eachDrinkIngredient
                                    $("#first-list").append(listedDrinkIngredients)
                                }
                            }

                            for (var i = 1; i < 15; i++) {
                                if (drinkResults[1].drinks[0]['strIngredient' + i] !== null && drinkResults[1].drinks[0]['strIngredient' + i] !== "") {
                                    var eachDrinkIngredient = drinkResults[1].drinks[0]['strIngredient' + i]
                                    var listedDrinkIngredients = document.createElement("li")
                                    listedDrinkIngredients.textContent = eachDrinkIngredient
                                    $("#second-list").append(listedDrinkIngredients)
                                }
                            }

                            for (var i = 1; i < 15; i++) {
                                if (drinkResults[2].drinks[0]['strIngredient' + i] !== null && drinkResults[2].drinks[0]['strIngredient' + i] !== "") {
                                    var eachDrinkIngredient = drinkResults[2].drinks[0]['strIngredient' + i]
                                    var listedDrinkIngredients = document.createElement("li")
                                    listedDrinkIngredients.textContent = eachDrinkIngredient
                                    $("#third-list").append(listedDrinkIngredients)
                                }
                            }

                            for (var i = 1; i < 15; i++) {
                                if (drinkResults[3].drinks[0]['strIngredient' + i] !== null && drinkResults[3].drinks[0]['strIngredient' + i] !== "") {
                                    var eachDrinkIngredient = drinkResults[3].drinks[0]['strIngredient' + i]
                                    var listedDrinkIngredients = document.createElement("li")
                                    listedDrinkIngredients.textContent = eachDrinkIngredient
                                    $("#fourth-list").append(listedDrinkIngredients)
                                }
                            }

                            for (var i = 1; i < 15; i++) {
                                if (drinkResults[4].drinks[0]['strIngredient' + i] !== null && drinkResults[4].drinks[0]['strIngredient' + i] !== "") {
                                    var eachDrinkIngredient = drinkResults[4].drinks[0]['strIngredient' + i]
                                    var listedDrinkIngredients = document.createElement("li")
                                    listedDrinkIngredients.textContent = eachDrinkIngredient
                                    $("#fifth-list").append(listedDrinkIngredients)
                                }
                            }

                            for (var i = 1; i < 15; i++) {
                                if (drinkResults[5].drinks[0]['strIngredient' + i] !== null && drinkResults[5].drinks[0]['strIngredient' + i] !== "") {
                                    var eachDrinkIngredient = drinkResults[5].drinks[0]['strIngredient' + i]
                                    var listedDrinkIngredients = document.createElement("li")
                                    listedDrinkIngredients.textContent = eachDrinkIngredient
                                    $("#sixth-list").append(listedDrinkIngredients)
                                }
                            }

                            console.log()

                            if (drinkResults.length > 0) {
                                $("#first-card").show()
                            }

                            if (drinkResults.length > 1) {
                                $("#second-card").show()
                            }
                            if (drinkResults.length > 2) {
                                $("#third-card").show()
                            }
                            if (drinkResults.length > 3) {
                                $("#fourth-card").show()
                            }
                            if (drinkResults.length > 4) {
                                $("#fifth-card").show()
                            }
                            if (drinkResults.length > 5) {
                                $("#sixth-card").show()
                            }
                        })
                }
            }
        })
    recipeContainer.show()
    drinkSearchBox.hide()
}

//functions directed towards by listeners below
function addIngredientList(event) {
    if (ingredients.val() == "") {
        picoModal("Entry cannot be blank please add an item").show()
    } else {
        console.log(event)
        var addIngredient = document.createElement('li')
        addIngredient.textContent = ingredients.val()
        ingredientList.append(addIngredient)
        ingredientsArray.push(ingredients.val())
        document.querySelector("#dinner-form").reset()
        console.log(ingredientsArray)
    }
}

function addExcludeList() {
    if (exclude == "") {
        picoModal("Entry cannot be blank please add an item").show()
    } else {
        var addExclude = document.createElement('li')
        addExclude.textContent = exclude.val()
        excludeList.append(addExclude)
        excludeArray.push(exclude.val())
        document.querySelector("#exclude-form").reset()
        console.log(excludeArray)
    }
}

function addDrinkIngredientList() {
    if (drinkIngredient == "") {
        picoModal("Entry cannot be blank please add an item").show()
    } else {
        var addDrinkIngredient = document.createElement('li')
        addDrinkIngredient.textContent = drinkIngredient.val()
        drinkIngredientList.append(addDrinkIngredient)
        drinkIngredientsArray.push(drinkIngredient.val())
        document.querySelector("#drink-form").reset()
        console.log(drinkIngredientsArray)
    }
}

//removes the listed items from dinner and drink containers and arrays if respective buttons every time they are pressed 
function clearPastDrink() {
    drinkIngredientList.empty()
    $(".ingredients-list").empty()
    drinkIngredientsArray.length = 0
    drinkIDArray.length = 0
    drinkResults.length = 0
}

function clearPast() {
    ingredientList.each(function (i) {
        $(this).html("")
    })
    excludeList.each(function (i) {
        $(this).html("")
    })
    $(".ingredients-list").empty()
    ingredientsArray.length = 0
    excludeArray.length = 0
}
//LISTENERS--in the dinner search card these allow user to add their available ingredients or choose recipes which include certain ingredients as criteria
ingredientAddBtn.on('click', addIngredientList)
ingredients.on('keydown', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        addIngredientList()
    }
})

excludeAddBtn.on('click', addExcludeList)
exclude.on('keydown', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        addExcludeList()
    }
})

drinkIngredientAddBtn.on('click', addDrinkIngredientList)
drinkIngredient.on('keydown', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        addDrinkIngredientList()
    }
})

drinkSearchInput.on('keydown', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        getSearchedDrink()
    }
})

//shows search boxes based on which user wants to search for
dinnerBoxBtn.on('click', function () {
    dinnerSearchBox.show()
    drinkSearchBox.hide()
    recipeContainer.hide()
    clearPast()
})

drinkBoxBtn.on('click', function () {
    drinkSearchBox.show()
    dinnerSearchBox.hide()
    recipeContainer.hide()
    clearPastDrink()
})

//inside search boxes do it button
searchBtn.on('click', getRecipes)
drinkSearchBtn.on('click', getDrinks)

//hides the search boxex until needed currently disabled so we can see them as we build
dinnerSearchBox.hide()
drinkSearchBox.hide()
recipeContainer.hide()









function getRandomDrink() {
    drinkItems = drinkIngredientsArray.join()
    var requestURL2 = "https://www.thecocktaildb.com/api/json/v2/" + cocktailKey + "/randomselection.php"

    fetch(requestURL2)
        .then(function (response2) {
            return response2.json()
        })
        .then(function (data2) {
            console.log(data2)
            //first card name, pic, and link creation
            $("#first-name").text(data2.drinks[0].strDrink)
            $("#first-link").attr('href', 'https://www.thecocktaildb.com/drink/' + data2.drinks[0].idDrink)
            $("#first-image").attr('src', data2.drinks[0].strDrinkThumb)
            $("#first-image").attr('alt', data2.drinks[0].strDrink)

            //second card name, pic, and link creation
            $("#second-name").text(data2.drinks[1].strDrink)
            $("#second-link").attr('href', 'https://www.thecocktaildb.com/drink/' + data2.drinks[1].idDrink)
            $("#second-image").attr('src', data2.drinks[1].strDrinkThumb)
            $("#second-image").attr('alt', data2.drinks[1].strDrink)

            //third card name, pic, and link creation
            $("#third-name").text(data2.drinks[2].strDrink)
            $("#third-link").attr('href', 'https://www.thecocktaildb.com/drink/' + data2.drinks[2].idDrink)
            $("#third-image").attr('src', data2.drinks[2].strDrinkThumb)
            $("#third-image").attr('alt', data2.drinks[2].strDrink)

            //fourth card name, pic, and link creation
            $("#fourth-name").text(data2.drinks[3].strDrink)
            $("#fourth-link").attr('href', 'https://www.thecocktaildb.com/drink/' + data2.drinks[3].idDrink)
            $("#fourth-image").attr('src', data2.drinks[3].strDrinkThumb)
            $("#fourth-image").attr('alt', data2.drinks[3].strDrink)

            //fifth card name, pic, and link creation
            $("#fifth-name").text(data2.drinks[4].strDrink)
            $("#fifth-link").attr('href', 'https://www.thecocktaildb.com/drink/' + data2.drinks[4].idDrink)
            $("#fifth-image").attr('src', data2.drinks[4].strDrinkThumb)
            $("#fifth-image").attr('alt', data2.drinks[4].strDrink)

            //sixth card name, pic, and link creation
            $("#sixth-name").text(data2.drinks[5].strDrink)
            $("#sixth-link").attr('href', 'https://www.thecocktaildb.com/drink/' + data2.drinks[5].idDrink)
            $("#sixth-image").attr('src', data2.drinks[5].strDrinkThumb)
            $("#sixth-image").attr('alt', data2.drinks[5].strDrink)


            // first card create list for ingredients
            for (var i = 1; i < 15; i++) {
                if (data2.drinks[0]['strIngredient' + i] !== null && data2.drinks[0]['strIngredient' + i] !== "") {
                    var eachDrinkIngredient = data2.drinks[0]['strIngredient' + i]
                    var listedDrinkIngredients = document.createElement("li")
                    listedDrinkIngredients.textContent = eachDrinkIngredient
                    $("#first-list").append(listedDrinkIngredients)
                }
            }

            for (var i = 1; i < 15; i++) {
                if (data2.drinks[1]['strIngredient' + i] !== null && data2.drinks[1]['strIngredient' + i] !== "") {
                    var eachDrinkIngredient = data2.drinks[1]['strIngredient' + i]
                    var listedDrinkIngredients = document.createElement("li")
                    listedDrinkIngredients.textContent = eachDrinkIngredient
                    $("#second-list").append(listedDrinkIngredients)
                }
            }


            for (var i = 1; i < 15; i++) {
                if (data2.drinks[2]['strIngredient' + i] !== null && data2.drinks[2]['strIngredient' + i] !== "") {
                    var eachDrinkIngredient = data2.drinks[2]['strIngredient' + i]
                    var listedDrinkIngredients = document.createElement("li")
                    listedDrinkIngredients.textContent = eachDrinkIngredient
                    $("#third-list").append(listedDrinkIngredients)
                }
            }
            for (var i = 1; i < 15; i++) {
                if (data2.drinks[3]['strIngredient' + i] !== null && data2.drinks[3]['strIngredient' + i] !== "") {
                    var eachDrinkIngredient = data2.drinks[3]['strIngredient' + i]
                    var listedDrinkIngredients = document.createElement("li")
                    listedDrinkIngredients.textContent = eachDrinkIngredient
                    $("#fourth-list").append(listedDrinkIngredients)
                }
            }
            for (var i = 1; i < 15; i++) {
                if (data2.drinks[4]['strIngredient' + i] !== null && data2.drinks[4]['strIngredient' + i] !== "") {
                    var eachDrinkIngredient = data2.drinks[4]['strIngredient' + i]
                    var listedDrinkIngredients = document.createElement("li")
                    listedDrinkIngredients.textContent = eachDrinkIngredient
                    $("#fifth-list").append(listedDrinkIngredients)
                }
            }
            for (var i = 1; i < 15; i++) {
                if (data2.drinks[5]['strIngredient' + i] !== null && data2.drinks[5]['strIngredient' + i] !== "") {
                    var eachDrinkIngredient = data2.drinks[5]['strIngredient' + i]
                    var listedDrinkIngredients = document.createElement("li")
                    listedDrinkIngredients.textContent = eachDrinkIngredient
                    $("#sixth-list").append(listedDrinkIngredients)
                }
            }

        })
    recipeContainer.show()
    drinkSearchBox.hide()
}

function getSearchedDrink() {
    var searchCriteria = drinkSearchInput.val()
    drinkItems = drinkIngredientsArray.join()
    var requestURL2 = "https://www.thecocktaildb.com/api/json/v2/" + cocktailKey + "/search.php?s=" + searchCriteria
    console.log(requestURL2)
    fetch(requestURL2)
        .then(function (response2) {
            return response2.json()
        })
        .then(function (data2) {
            console.log(data2)
            //first card name, pic, and link creation
            $("#first-name").text(data2.drinks[0].strDrink)
            $("#first-link").attr('href', 'https://www.thecocktaildb.com/drink/' + data2.drinks[0].idDrink)
            $("#first-image").attr('src', data2.drinks[0].strDrinkThumb)
            $("#first-image").attr('alt', data2.drinks[0].strDrink)
            for (var i = 1; i < 15; i++) {
                if (data2.drinks[0]['strIngredient' + i] !== null && data2.drinks[0]['strIngredient' + i] !== "") {
                    var eachDrinkIngredient = data2.drinks[0]['strIngredient' + i]
                    var listedDrinkIngredients = document.createElement("li")
                    listedDrinkIngredients.textContent = eachDrinkIngredient
                    $("#first-list").append(listedDrinkIngredients)
                    $("#second-card").hide()
                    $("#third-card").hide()
                    $("#fourth-card").hide()
                    $("#fifth-card").hide()
                    $("#sixth-card").hide()
                }
            }

            //second card name, pic, and link creation
            if (data2.length > 1) {
                $("#second-name").text(data2.drinks[1].strDrink)
                $("#second-link").attr('href', 'https://www.thecocktaildb.com/drink/' + data2.drinks[1].idDrink)
                $("#second-image").attr('src', data2.drinks[1].strDrinkThumb)
                $("#second-image").attr('alt', data2.drinks[1].strDrink)
                for (var i = 1; i < 15; i++) {
                    if (data2.drinks[1]['strIngredient' + i] !== null && data2.drinks[1]['strIngredient' + i] !== "") {
                        var eachDrinkIngredient = data2.drinks[1]['strIngredient' + i]
                        var listedDrinkIngredients = document.createElement("li")
                        listedDrinkIngredients.textContent = eachDrinkIngredient
                        $("#second-list").append(listedDrinkIngredients)
                        $("#second-card").show()
                    }

                    //third card name, pic, and link creation
                    if (data2.length > 2) {
                        $("#third-name").text(data2.drinks[2].strDrink)
                        $("#third-link").attr('href', 'https://www.thecocktaildb.com/drink/' + data2.drinks[2].idDrink)
                        $("#third-image").attr('src', data2.drinks[2].strDrinkThumb)
                        $("#third-image").attr('alt', data2.drinks[2].strDrink)
                        for (var i = 1; i < 15; i++) {
                            if (data2.drinks[2]['strIngredient' + i] !== null && data2.drinks[2]['strIngredient' + i] !== "") {
                                var eachDrinkIngredient = data2.drinks[2]['strIngredient' + i]
                                var listedDrinkIngredients = document.createElement("li")
                                listedDrinkIngredients.textContent = eachDrinkIngredient
                                $("#third-list").append(listedDrinkIngredients)
                                $("#third-card").show()
                            }
                        }

                        //fourth card name, pic, and link creation
                        if (data2.length > 3) {
                            $("#fourth-name").text(data2.drinks[3].strDrink)
                            $("#fourth-link").attr('href', 'https://www.thecocktaildb.com/drink/' + data2.drinks[3].idDrink)
                            $("#fourth-image").attr('src', data2.drinks[3].strDrinkThumb)
                            $("#fourth-image").attr('alt', data2.drinks[3].strDrink)
                            for (var i = 1; i < 15; i++) {
                                if (data2.drinks[3]['strIngredient' + i] !== null && data2.drinks[3]['strIngredient' + i] !== "") {
                                    var eachDrinkIngredient = data2.drinks[3]['strIngredient' + i]
                                    var listedDrinkIngredients = document.createElement("li")
                                    listedDrinkIngredients.textContent = eachDrinkIngredient
                                    $("#fourth-list").append(listedDrinkIngredients)
                                    $("#fourth-card").show()
                                }
                            }

                            //fifth card name, pic, and link creation
                            if (data2.length > 4) {
                                $("#fifth-name").text(data2.drinks[4].strDrink)
                                $("#fifth-link").attr('href', 'https://www.thecocktaildb.com/drink/' + data2.drinks[4].idDrink)
                                $("#fifth-image").attr('src', data2.drinks[4].strDrinkThumb)
                                $("#fifth-image").attr('alt', data2.drinks[4].strDrink)
                                for (var i = 1; i < 15; i++) {
                                    if (data2.drinks[4]['strIngredient' + i] !== null && data2.drinks[4]['strIngredient' + i] !== "") {
                                        var eachDrinkIngredient = data2.drinks[4]['strIngredient' + i]
                                        var listedDrinkIngredients = document.createElement("li")
                                        listedDrinkIngredients.textContent = eachDrinkIngredient
                                        $("#fifth-list").append(listedDrinkIngredients)
                                        $("#fifth-card").show()
                                    }

                                    //fourth card name, pic, and link creation
                                    if (data2.length > 3) {
                                        $("#fourth-name").text(data2.drinks[3].strDrink)
                                        $("#fourth-link").attr('href', 'https://www.thecocktaildb.com/drink/' + data2.drinks[3].idDrink)
                                        $("#fourth-image").attr('src', data2.drinks[3].strDrinkThumb)
                                        $("#fourth-image").attr('alt', data2.drinks[3].strDrink)
                                        for (var i = 1; i < 15; i++) {
                                            if (data2.drinks[3]['strIngredient' + i] !== null && data2.drinks[3]['strIngredient' + i] !== "") {
                                                var eachDrinkIngredient = data2.drinks[3]['strIngredient' + i]
                                                var listedDrinkIngredients = document.createElement("li")
                                                listedDrinkIngredients.textContent = eachDrinkIngredient
                                                $("#fourth-list").append(listedDrinkIngredients)
                                            }
                                        }

                                        //fifth card name, pic, and link creation
                                        if (data2.length > 4) {
                                            $("#fifth-name").text(data2.drinks[4].strDrink)
                                            $("#fifth-link").attr('href', 'https://www.thecocktaildb.com/drink/' + data2.drinks[4].idDrink)
                                            $("#fifth-image").attr('src', data2.drinks[4].strDrinkThumb)
                                            $("#fifth-image").attr('alt', data2.drinks[4].strDrink)
                                            for (var i = 1; i < 15; i++) {
                                                if (data2.drinks[4]['strIngredient' + i] !== null && data2.drinks[4]['strIngredient' + i] !== "") {
                                                    var eachDrinkIngredient = data2.drinks[4]['strIngredient' + i]
                                                    var listedDrinkIngredients = document.createElement("li")
                                                    listedDrinkIngredients.textContent = eachDrinkIngredient
                                                    $("#fifth-list").append(listedDrinkIngredients)
                                                }
                                            }

                                            //sixth card name, pic, and link creation
                                            if (data2.length > 5) {
                                                $("#sixth-name").text(data2.drinks[5].strDrink)
                                                $("#sixth-link").attr('href', 'https://www.thecocktaildb.com/drink/' + data2.drinks[5].idDrink)
                                                $("#sixth-image").attr('src', data2.drinks[5].strDrinkThumb)
                                                $("#sixth-image").attr('alt', data2.drinks[5].strDrink)
                                                for (var i = 1; i < 15; i++) {
                                                    if (data2.drinks[5]['strIngredient' + i] !== null && data2.drinks[5]['strIngredient' + i] !== "") {
                                                        var eachDrinkIngredient = data2.drinks[5]['strIngredient' + i]
                                                        var listedDrinkIngredients = document.createElement("li")
                                                        listedDrinkIngredients.textContent = eachDrinkIngredient
                                                        $("#sixth-list").append(listedDrinkIngredients)

                                                    }
                                                }


                                            }
                                        }
                                    }

                                    //sixth card name, pic, and link creation
                                    if (data2.length > 5) {
                                        $("#sixth-name").text(data2.drinks[5].strDrink)
                                        $("#sixth-link").attr('href', 'https://www.thecocktaildb.com/drink/' + data2.drinks[5].idDrink)
                                        $("#sixth-image").attr('src', data2.drinks[5].strDrinkThumb)
                                        $("#sixth-image").attr('alt', data2.drinks[5].strDrink)
                                        for (var i = 1; i < 15; i++) {
                                            if (data2.drinks[5]['strIngredient' + i] !== null && data2.drinks[5]['strIngredient' + i] !== "") {
                                                var eachDrinkIngredient = data2.drinks[5]['strIngredient' + i]
                                                var listedDrinkIngredients = document.createElement("li")
                                                listedDrinkIngredients.textContent = eachDrinkIngredient
                                                $("#sixth-list").append(listedDrinkIngredients)
                                                $("#sixth-card").show()

                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }








                                
        )

    recipeContainer.show()
    drinkSearchBox.hide()

}


// function to hide unused cards//
function hideUnusedCards() {
    $('.show-card').each(function () {
        if ($(this).find('a').attr('href') == '') {
            $(this).hide()
        }
    })
}


drinkSearchBtn2.on('click', getSearchedDrink)
randomBtn.on("click", getRandomDrink)