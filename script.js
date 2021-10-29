function validateForm() {
  let x = document.forms["myForm"]["pass"].value;
  let y = document.forms["myForm"]["rpass"].value;
  if (x.length < 8) {
    alert("The password is less than 8 characters");
    return false;
  }
  if (x != y) {
    alert("The passwords do not match");
    return false;
  }
}