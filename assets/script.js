var petArray = []
var petPicture = document.querySelector(".pet-image");
var factContainer = document.querySelector(".random-fact")
var catButton = document.querySelector("#cat-button")

//function when cat button run fuctions
var catButtonClick = function(event) {
    event.preventDefault();
    getCatFact();
    getCatPicture();
    // petList();
    // savePet();
}

//fetch the cat fact
var getCatFact = function() {
    
    var catFactUrl = "https://the-cat-fact.herokuapp.com/api/randomfact";

    fetch(catFactUrl).then(function (response) {
        response.json().then(function (data) {
          displayCatFact(data);
        });
    });
}

//function to display cat fact
 var displayCatFact = function(data) {
     factContainer.innerText = data.data.fact
     console.log(displayCatFact);
 }
    


//fetch the cat picture and display it
 var getCatPicture = function() {
    var catPictureUrl = "www.placekitten.com/600/600";
    
    petPicture.setAttribute("src", catPictureUrl);
    console.log(getCatPicture);
 }
    



// // display "You picked cat!"
// var petList = function () {
// petArray =
// }

// //and save to local storage
// var savePet = function {

// }


//function when dog button is pressed random picture and fact is displayed

//fetch the dog fact


// display "You picked dog!"


//and save to local storage







// add event listener to cat button
catButton.addEventListener('click', catButtonClick)

// add event listener to dog botton