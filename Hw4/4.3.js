const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const age = document.getElementById("age");
const phoneno = document.getElementById("phoneno");
const presentAddress = document.getElementById("presentAddress");
const permanentAddress = document.getElementById("permanentAddress");
const checkBox = document.getElementById("present");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const ageValue = age.value.trim();
  const phonenoValue = phoneno.value.trim();
  const presentAddressValue = presentAddress.value.trim();
  const permanentAddressValue = permanentAddress.value.trim();

  if (firstnameValue === "") {
    setErrorFor(firstname, "firstname cannot be blank");
  } else {
    setSuccessFor(firstname);
  }

  if (lastnameValue === "") {
    setErrorFor(lastname, "Lastname cannot be blank");
  } else {
    setSuccessFor(lastname);
  }

  if (ageValue === "") {
    setErrorFor(age, "Age cannot be blank");
  } else {
    setSuccessFor(age);
  }
  if (isNaN(phonenoValue)) {
    setErrorFor(phoneno, "Phone number has to be in numbers");
  } else if (phonenoValue.length !== 11) {
    setErrorFor(phoneno, "Phone number has to be of 11 digits");
  } else {
    setSuccessFor(phoneno);
  }

  if (presentAddressValue === "") {
    setErrorFor(presentAddress, "Present address cannot be blank");
  } else {
    setSuccessFor(presentAddress);
  }

  if (checkBox.checked == true) {
    let preValue = presentAddress.value;
    permanentAddress.value = preValue;
  } else {
    permanentAddress.value = "";
  }

  if (permanentAddressValue === "") {
    setErrorFor(permanentAddress, "Permanent address cannot be blank");
  } else {
    setSuccessFor(permanentAddress);
  }

  if (
    firstnameValue !== "" &&
    lastnameValue !== "" &&
    ageValue !== "" &&
    phonenoValue !== "" &&
    presentAddressValue !== "" &&
    permanentAddressValue !== ""
  ) {
    setTimeout(() => {
      alert("Successfully Submitted");
    }, 10);
  } else {
    return;
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
