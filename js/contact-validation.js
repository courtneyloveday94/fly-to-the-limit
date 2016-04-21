// find the form

var contactForm=document.querySelector('#contact-form');
var totalErrors = 0;

var contactNameInput = document.querySelector("#contact-name");
var contactNameMessage = document.querySelector("#contact-name-message");

var contactEmailInput = document.querySelector("#email");
var contactEmailMessage = document.querySelector("#contact-email-message");

var contactPhoneInput = document.querySelector("#phone");
var contactPhoneMessage = document.querySelector("#contact-phone-message");

var contactMessageInput = document.querySelector("#contact-message");
var contactMessageMessage = document.querySelector("#phone-message-message");

contactNameInput.onblur=function() {
	// check the name 
	if(contactNamePattern.test(contactNameInput.value)) {
		contactNameMessage.innerHTML = "";
	} else {
		//name is invalid
		contactNameMessage.innerHTML = "Name is invalid.";
		totalErrors++
	}
}

contactEmailInput.onblur=function() {
	// email
	if(contactEmailPattern.test(contactEmailInput.value)) {
		contactEmailMessage.innerHTML = "";
	} else {
		//email is invalid
		contactEmailMessage.innerHTML = "Email is invalid.";
		totalErrors++
	}
}

contactPhoneInput.onblur=function() {
		// phone
	if(contactPhonePattern.test(contactPhoneInput.value)) {
		contactPhoneMessage.innerHTML = "";
	} else {
		//phone is invalid
		contactPhoneMessage.innerHTML = "Phone number is invalid.";
		totalErrors++
	}
}

// if the total errors are greater than 0
if(totalErrors > 0) {
	// stop the form from submiting
	event.preventDefault();
	console.log('you have errors')
}