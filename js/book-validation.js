// find the form
var bookingForm = document.querySelector('#book');

console.log("i hope this works")

// wait for the user to submit the form
bookingForm.onsubmit = function(event) {

	// count how many errors there are
	var totalErrors = 0;

	// get references to the input fields
	var nameInput = document.querySelector("#name");
	var nameMessage = document.querySelector("#name-message");

	var emailInput = document.querySelector("#email");
	var emailMessage = document.querySelector("#email-message");

	var phoneInput = document.querySelector("#phone");
	var phoneMessage = document.querySelector("#phone-message");

	var flightMessage = document.querySelector("#flight-message");
	var flightOptions = document.querySelectorAll("[name=flight]");

	var aircraftMessage = document.querySelector("#aircraft-message");
	var aircraftOptions = document.querySelectorAll("[name=aircraft]");

	var passenegersInput = document.querySelector("#passengers");
	var passengersMessage = document.querySelector("#passengers-message");

	var locationInput = document.querySelector("#location");
	var locationMessage = document.querySelector("#location-message");

	var dateInput = document.querySelector("#date");
	var dateMessage = document.querySelector("#date-message");

	var timeInput = document.querySelector("#time");
	var timeMessage = document.querySelector("#time-message");

	var dropOffLocationInput = document.querySelector("#drop-off-location");
	var dropOffLocationMessage = document.querySelector("#drop-off-location-message");

	var dropOffDateInput = document.querySelector("#drop-off-date");
	var dropOffDateMessage = document.querySelector("#drop-off-date-message");

	var dropOffTimeInput = document.querySelector("#drop-off-time");
	var dropOffTimeMessage = document.querySelector("#drop-off-time-message");

	var pickUpLocationInput = document.querySelector("#pick-up-location");
	var pickUpLocationMessage = document.querySelector("#pick-up-location-message");

	var pickUpDateInput = document.querySelector("#pick-up-date");
	var pickUpDateMessage = document.querySelector("#pick-up-date-message");

	var pickUpTimeInput = document.querySelector("#pick-up-time");
	var pickUpTimeMessage = document.querySelector("#pick-up-time-message");


	// check the name 
	if(namePattern.test(nameInput.value)) {
		nameMessage.innerHTML = "";
		
	}


	// // check the username
	// if(usernamePattern.test(usernameInput.value)) {
	// 	// username is valid
	// 	usernameMessage.innerHTML = "";
	// } else {
	// 	// username is invalid
	// 	usernameMessage.innerHTML = "Username is invalid.";
	// 	totalErrors++;
	// }

	// if(namePattern.test(nameInput.value)) {
	// 	nameMessage.innerHTML = "";
	// } else {
	// 	nameMessage.innerHTML = "Name is invalid.";
	// 	totalErrors++;
	// }

	// // loop over all the campus options
	// var campusIsSelected = false;

	// for(var i=0; i<campusOptions.length; i++) {
	// 	// check if this campus has been selected
	// 	if(campusOptions[i].checked) {
	// 		campusIsSelected = true;
	// 	}
	// }

	// // if campusIsSelected is still false
	// if(campusIsSelected == false) {
	// 	campusMessage.innerHTML = "Please select a campus.";
	// 	totalErrors++;
	// } else {
	// 	campusMessage.innerHTML = "";
	// }

	// // if the total errors are greater than 0
	// if(totalErrors > 0) {
	// 	// stop the form from submiting
	// 	event.preventDefault();
	// }	

	bookingForm.onsubmit = function(event) {
		//stops the form from submitting
		event.preventDefault();
	}

}