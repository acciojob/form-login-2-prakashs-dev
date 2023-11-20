//your JS code here. If required.
function getFormvalue() {
  let fn = document.querySelector('input[name="First Name"]').value;
  let ln = document.querySelector('input[name="Last Name"]').value;
  let number = document.querySelector('input[name="Phone Number"]').value;
  let email = document.querySelector('input[name="Email ID"]').value;
	alert(`First Name: ${fn} 
Last Name: ${ln}
Phone Number: ${number}
Email ID: ${email}`);
}