// patterns to use in validation

	// for book-validation.js
	var namePattern = new RegExp("^[a-zA-Z '.-]{1,30}$");
	var emailPattern = new RegExp("^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i");
	var phonePattern = new RegExp("[0-9+()/-]{3,50}")
	var passengersPattern = new RegExp("^[0-9]{1,2}$")
	var locationPattern = new RegExp("[0-9a-zA-Z./-]{1-50}")
	var datePattern = new RegExp("^(0?[ 1-9]|[12][0-9]|3[01])[\/\-](0?[ 1-9]|1[012])[\/\-]\d{4}$")
	var timePattern = new RegExp("^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$")
	var dropOffLocationPattern = new RegExp("[0-9a-zA-Z./-]{1-50}")
	var dropOffDatePattern = new RegExp("^(0?[ 1-9]|[12][0-9]|3[01])[\/\-](0?[ 1-9]|1[012])[\/\-]\d{4}$")
	var dropOffTimePattern = new RegExp("^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$")
	var pickUpLocationPattern = new RegExp("[0-9a-zA-Z./-]{1-50}")
	var pickUpDatePattern = new RegExp("^(0?[ 1-9]|[12][0-9]|3[01])[\/\-](0?[ 1-9]|1[012])[\/\-]\d{4}$")
	var pickUpTimePattern = new RegExp("^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$")