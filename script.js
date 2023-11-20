//your JS code here. If required.
function getFormvalue() {
  let fn = document.myform.fname.value;
  let ln = document.myform.lname.value;
  let number = document.myform.phone.value;
  let email = document.myform.mail.value;
  alert("First Name: "+fn+"\nLast Name : "+ln+"\nPhone Number: "+number+"\nEmail ID: "+email);
}