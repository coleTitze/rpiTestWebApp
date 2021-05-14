// Create a break line element
let br = document.createElement("br");

// Create a form
let form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", "submit.php");

// Create water text title
let waterText = document.createTextNode("Water Per Day (ml):");

// Create an input element for Water amount
let water = document.createElement("input");
water.setAttribute("type", "text");
water.setAttribute("name", "waterAmount");
water.setAttribute("placeholder", "0");

// Create water text title
let sunText = document.createTextNode("Light Time In Minutes Per Day:");

// Create an input element for sunlight amount
let sun = document.createElement("input");
sun.setAttribute("type", "text");
sun.setAttribute("name", "sunAmount");
sun.setAttribute("placeholder", "0");

// create a submit button
let submit = document.createElement("input");
submit.setAttribute("type", "submit");
submit.setAttribute("value", "Submit");

// Append the water input to the form
form.appendChild(waterText);
form.appendChild(br.cloneNode());
form.appendChild(water);
form.appendChild(br.cloneNode());

// Append the sunlight to the form
form.appendChild(sunText);
form.appendChild(br.cloneNode());
form.appendChild(sun);
form.appendChild(br.cloneNode());
form.appendChild(document.createElement("p"));

// Append the submit button to the form
form.appendChild(submit);

document.getElementsByTagName("body")[0].appendChild(form);
