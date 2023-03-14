   function validateForm() {
  // Get the values of the input fields
  var fullname = document.getElementById("fullname").value;
  var region = document.getElementById("region").value;
  var province = document.getElementById("province").value;
  var city = document.getElementById("city").value;
  var barangay = document.getElementById("barangay").value;
  var street = document.getElementById("street").value;
  var phonenumber = document.getElementById("phonenumber").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm_password").value;

  // Define regular expressions for validation
  var nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  var phoneRegex = /^\d{11}$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check each input field against the corresponding regex
  if (!nameRegex.test(fullname)) {
    alert("Please enter a valid name.");
    return false;
  }
  if (!nameRegex.test(region)) {
    alert("Please enter a valid region.");
    return false;
  }
  if (!nameRegex.test(province)) {
    alert("Please enter a valid province.");
    return false;
  }
  if (!nameRegex.test(city)) {
    alert("Please enter a valid city/municipality.");
    return false;
  }
  if (!nameRegex.test(barangay)) {
    alert("Please enter a valid barangay.");
    return false;
  }
  if (!nameRegex.test(street)) {
    alert("Please enter a valid street/building name.");
    return false;
  }
  if (!phoneRegex.test(phonenumber)) {
    alert("Please enter a valid phone number.");
    return false;
  }
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  if (password.length <= 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }
  if (password != confirm_password) {
    alert("Passwords do not match.");
    return false;
  }

  // All input fields are valid
  return true;
}
// Add an event listener to the form submit button
document.querySelector("form").addEventListener("submit", function (e) {
  if (!validateForm()) {
    e.preventDefault(); // Prevent form submission if validation fails
  }
});
