var down = document.getElementById("Form");

// Create a break line element
var br = document.createElement("br");

// Create a form synamically
var form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", "submit.php");

// Create an input element for Water amount
var water = document.createElement("input");
water.setAttribute("type", "text");
water.setAttribute("name", "waterAmount");
water.setAttribute("placeholder", "0");

// Create an input element for sunlight amount
var sun = document.createElement("input");
sun.setAttribute("type", "text");
sun.setAttribute("name", "sunAmount");
sun.setAttribute("placeholder", "0");

// create a submit button
var submit = document.createElement("input");
submit.setAttribute("type", "submit");
submit.setAttribute("value", "Submit");

// Append the full name input to the form
form.appendChild(water);
// Inserting a line break
form.appendChild(br.cloneNode());

// Append the sunlight to the form
form.appendChild(sun);
form.appendChild(br.cloneNode());

// Append the submit button to the form
form.appendChild(s);

document.getElementsByTagName("body")[0].appendChild(form);
