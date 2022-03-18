var petArray = []
var petPicture = document.querySelector(".pet-image");
var factContainer = document.querySelector(".random-fact")
var catButton = document.querySelector("#cat-button")
var dogButton = document.querySelector("#dog-button")
var searchHistory = document.querySelector("#search-list")

//function when cat button run fuctions
var catButtonClick = function(event) {
    event.preventDefault();
    getCatFact();
    getCatPicture();
    catList();
    // saveCat();
}

//fetch the cat fact
var getCatFact = function() {
    
    var catFactUrl = "https://catfact.ninja/fact";

    fetch(catFactUrl).then(function (response) {
        response.json().then(function (data) {
          displayCatFact(data);
        });
    });
}

//function to display cat fact
 var displayCatFact = function(data) {
    factContainer.innerText = data.fact;
 }
    
//fetch the cat picture
 var getCatPicture = function() {
    var catPictureUrl = "https://api.thecatapi.com/v1/images/search?api_key=28de4828-5aca-4a85-b971-89d535b05fd1";

    fetch(catPictureUrl).then(function (response) {
        response.json().then(function (data) {
          displayCatPicture(data);
        });
    });
}

//display the cat picture
var displayCatPicture = function(picture) {
    var apiPicUrl = picture[0].url
    petPicture.setAttribute("src", apiPicUrl)
}

// display "You picked cat!"
var catList = function () {
    var buttonName = document.createElement("p");
    buttonName.innerText = "You learned a cat fact!";
    buttonName.className = "cat-search-history"
    searchHistory.appendChild(buttonName);
}

//and save to local storage
var saveCat = function () {
        petArray = JSON.parse(localStorage.getItem("buttonName")) || []
        console.log(petArray);
        petArray.push(buttonName.innerText);
        localStorage.setItem("buttonName", JSON.stringify(petArray));
}


//function when dog button is pressed random picture and fact is displayed
var dogButtonClick = function(event) {
    event.preventDefault();
    getDogFact();
    getDogPicture();
    dogList();
    // savePet();
}

// display "You picked dog!"
var dogList = function () {
    var dogButtonName = document.createElement("p");
    dogButtonName.innerText = "You learned a dog fact!";
    dogButtonName.className = "dog-search-history";
    searchHistory.appendChild(dogButtonName);
}


//fetch the dog fact
var getDogFact = function() {
    
    var dogFactUrl = "https://dog-api.kinduff.com/api/facts?number=1";

    fetch(dogFactUrl).then(function (response) {
        response.json().then(function (data) {
          displayDogFact(data);
        });
    });
}

//function to display dog fact
var displayDogFact = function(data) {
    factContainer.innerText = data.facts[0];
}
    
//fetch the dog picture
var getDogPicture = function() {
    var dogPictureUrl = "https://api.thedogapi.com/v1/images/search?api_key=28de4828-5aca-4a85-b971-89d535b05fd1";

    fetch(dogPictureUrl).then(function (response) {
        response.json().then(function (data) {
          displayDogPicture(data);
        });
    });
}

//display the dog picture
var displayDogPicture = function(dogpic) {
    var dogPicUrl = dogpic[0].url
    petPicture.setAttribute("src", dogPicUrl)
}

// add event listener to cat button
catButton.addEventListener('click', catButtonClick)

// add event listener to dog botton
dogButton.addEventListener('click', dogButtonClick)