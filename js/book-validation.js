// find the form
var bookingForm = document.querySelector('#book-now-form');

console.log('hello?')


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

var passengersInput = document.querySelector("#passengers");
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
} else {
	//name is invalid
	nameMessage.innerHTML = "Name is invalid.";
	totalErrors++
}

// email
if(emailPattern.test(emailInput.value)) {
	emailMessage.innerHTML = "";
} else {
	//email is invalid
	emailMessage.innerHTML = "Email is invalid.";
	totalErrors++
}

// phone
if(phonePattern.test(phoneInput.value)) {
	phoneMessage.innerHTML = "";
} else {
	//phone is invalid
	phoneMessage.innerHTML = "Phone number is invalid.";
	totalErrors++
}

// flights
// loop over all the flight options
var flightIsSelected = false;
	for(var i=0; i<flightOptions.length; i++) {
	// check if this flight has been selected
	if(flightOptions[i].checked) {
		flightIsSelected = true;
	}
}
// if flightIsSelected is still false
if(flightIsSelected == false) {
	flightMessage.innerHTML = "Please select a flight.";
	totalErrors++;
} else {
	flightMessage.innerHTML = "";
}

// aircraft
// loop over all the aircraft options
var aircraftIsSelected = false;
	for(var i=0; i<aircraftOptions.length; i++) {
	// check if this aircraft has been selected
	if(aircraftOptions[i].checked) {
		aircraftIsSelected = true;
	}
}
// if aircraftIsSelected is still false
if(aircraftIsSelected == false) {
	aircraftMessage.innerHTML = "Please select a aircraft.";
	totalErrors++;
} else {
	aircraftMessage.innerHTML = "";
}

// passengers
if(passengersPattern.test(passengersInput.value)) {
	passengersMessage.innerHTML = "";
} else {
	//passengers is invalid
	passengersMessage.innerHTML = "Passengers is invalid.";
	totalErrors++
}

// location
if(locationPattern.test(locationInput.value)) {
	locationMessage.innerHTML = "";
} else {
	//location is invalid
	locationMessage.innerHTML = "Location is invalid.";
	totalErrors++
}

// date
if(datePattern.test(dateInput.value)) {
	dateMessage.innerHTML = "";
} else {
	//date is invalid
	dateMessage.innerHTML = "Date is invalid.";
	totalErrors++
}

// time
if(timePattern.test(timeInput.value)) {
	timeMessage.innerHTML = "";
} else {
	//time is invalid
	timeMessage.innerHTML = "Time is invalid.";
	totalErrors++
}

// drop off location
if(dropOffLocationPattern.test(dropOffLocationInput.value)) {
	dropOffLocationMessage.innerHTML = "";
} else {
	//dropOffLocation is invalid
	dropOffLocationMessage.innerHTML = "Drop off location is invalid.";
	totalErrors++
}

// drop off date
if(dropOffDatePattern.test(dropOffDateInput.value)) {
	dropOffDateMessage.innerHTML = "";
} else {
	//drop off date is invalid
	dropOffDateMessage.innerHTML = "Drop off date is invalid.";
	totalErrors++
}

// drop off time
if(dropOffTimePattern.test(dropOffTimeInput.value)) {
	dropOffTimeMessage.innerHTML = "";
} else {
	//Drop off time is invalid
	dropOffTimeMessage.innerHTML = "Drop off Time is invalid.";
	totalErrors++
}

// pick up location
if(pickUpLocationPattern.test(pickUpLocationInput.value)) {
	pickUpLocationMessage.innerHTML = "";
} else {
	// pick up location is invalid
	pickUpLocationMessage.innerHTML = "Pick up location is invalid.";
	totalErrors++
}

// pick up date
if(pickUpDatePattern.test(pickUpDateInput.value)) {
	pickUpDateMessage.innerHTML = "";
} else {
	// pick up date is invalid
	pickUpDateMessage.innerHTML = "Pick up date is invalid.";
	totalErrors++
}

// pick up time
if(pickUpTimePattern.test(pickUpTimeInput.value)) {
	pickUpTimeMessage.innerHTML = "";
} else {
	// pick up time is invalid
	pickUpTimeMessage.innerHTML = "Pick up time is invalid.";
	totalErrors++
}

// if the total errors are greater than 0
if(totalErrors > 0) {
	// stop the form from submiting
	event.preventDefault();
	console.log('you have errors')
}

//If the total errors is greater than 0
	if( totalErrors > 0 ) {
		// Stop the form from submitting
		event.preventDefault();
	}