
//UserID
let User = document.getElementById("userID");
let UserError = document.getElementById("UserID-error");
let EmptyUserError = document.getElementById("empty-UserID");

//Password
let password = document.getElementById("password");
let PasswordError = document.getElementById("password-error");
let EmptyPassword = document.getElementById("empty-password");

//Re-eneter password
let RPassword = document.getElementById("Re-enenter password");
let RPasswordError = document.getElementById("Re-eneter-password-error");
let EmptyRPassword = document.getElementById("Re-eneter-empty-password");

//First name
let FirstName = document.getElementById("fname");
let FirstNameError = document.getElementById("first-name-error");
let EmptyFirstNameError = document.getElementById("empty-first-name");

//Middle Initial
let MiddleInitial = document.getElementById("mname");
let MiddleError = document.getElementById("middle-initial-error");
let EmptyMiddleNameError = document.getElementById("empty-middle-name");


//Last name
let LastName = document.getElementById("lname");
let LastNameError = document.getElementById("last-name-error");
let EmptyLasttNameError = document.getElementById("empty-last-name");

//Birtday 
let bday = document.getElementById("birthday");
let Emptybday = document.getElementById("empty-Birthday");

//Social Secuirty 
let Social = document.getElementById("ssn");
let EmptySocial = document.getElementById("empty-social");

//Email
let Email = document.getElementById("email");
let EmailError = document.getElementById("email-error");
let EmptyEamil = document.getElementById("empty-email");

//Phone number
let Phone = document.getElementById("phone");
let EmptyPhone = document.getElementById("empty-phone");

//Valid
let validClasses = document.getElementsByClassName("valid");
let invalidClasses = document.getElementsByClassName("error");

// Phone verfication
const phoneVerfiy = (number) => {
	const regex = /^[0-9]{10}$/;
	return regex.test(number);
};

// Email verfication
const emailVerfiy = (input) => {
	const regex = /^[a-z0-9_]+@[a-z]{3,}\.[a-z]/.]{3,}$/;
	return regex.test(input);

};

//Text verfication
const textVerify = (text) => {
	const regex = /^[a-zA-Z]{3,}$/;
	return regex.test(text);
}

//Empty inputs
const emptyUpdate = (
	inputReference,
	emptyErrorReference,
	otherErrorReference,
) => {
	if(!inputReference.value) {
		emptyErrorReference.classList.remove("hide");
		otherErrorReference.classList.add("hide");
		inputReference.classList.add("error");

	}
	else{
		emptyErrorReference.classList.add("hide");

	}
};

const errorUpdate = (inputReference, emptyErrorReference) =>
{
	emptyErrorReference.classList.remove("hide");
	inputReference.classList.remove("valid");
	inputReference.classList.add("error");
};

const ValidInputs = (inputReference) => {
	inputReference.classList.remove("error");
	inputReference.classList.add("valid");
};

//First name validation
firstNameInput.addEventListener("input", () => {
	if (textVerify(firstNameInput.value)) {
		FirstNameError.classList.add("hide");
		ValidInputs(firstNameInput);
	} else {
		errorUpdate(firstNameInput,FirstNameError);
		emptyUpdate(firstNameInput, EmptyFirstNameError,FirstNameError);
	}
});

//Last name validation
lastnameInput.addEventListener("input", () => {
	if (textVerify(lastnameInput.value)) {
		LastNameError.classList.add("hide");
		ValidInputs(lastnameInput);
	} else {
		errorUpdate(lastnameInput, LastNameError);
		emptyUpdate(lastnameInput, EmptyLasttNameError, LastNameError);

	}
});

phoneInput.addEventListener("input", () => {
	if (phoneVerfiy(phoneInput.value)) {
		phoneError.classList.add("hide");
		ValidInputs(phoneInput);
	} else {
		errorUpdate(phoneInput, phoneError);
		emptyUpdate(phoneInput, EmptyPhone, phoneError);
	}
	
});

emailInput.addEventListener("input", () => {
	if (emailVerfiy(emailInput.vaule)) {
		EmailError.classList.add("hide");
		ValidInputs(emailInput);
	} else {
		errorUpdate(emailInput, EmailError);
		emptyUpdate(emailInput, EmptyEamil, EmailError);
	}
});

