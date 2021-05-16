// Create a break line element
let br = document.createElement("br");

// Create a form
let form = document.createElement("form");
form.setAttribute("method", "post");
// form.setAttribute("action", "");

// Create water text title
let waterText = document.createTextNode("Water Per Day (ml):");

// Create an input element for Water amount
let water = document.createElement("input");
water.setAttribute("type", "text");
water.setAttribute("name", "waterAmount");

// Create water text title
let sunText = document.createTextNode("Light Time In Minutes Per Day:");

// Create an input element for sunlight amount
let sun = document.createElement("input");
sun.setAttribute("type", "text");
sun.setAttribute("name", "sunAmount");

// create a submit button
let submit = document.createElement("input");
submit.setAttribute("type", "Submit");
submit.setAttribute("name", "submitButton")
submit.setAttribute("value", "Submit");

// Get placeholders
$(document).ready(function(){
    $.getJSON("static/autoGrower/config.json", function(data){
        let j = data;
        console.log(j['waterMl'])
        sun.setAttribute("placeholder", j['lightMinutes']);
        water.setAttribute("placeholder", j['waterMl']);

    }).fail(function(){
        console.log("An error has occurred.");
    });
});

// Append the water input to the form
form.appendChild(waterText);
form.appendChild(br.cloneNode());
form.appendChild(water);
form.appendChild(br.cloneNode());
form.appendChild(document.createElement("p"));

// Append the sunlight to the form
form.appendChild(sunText);
form.appendChild(br.cloneNode());
form.appendChild(sun);
form.appendChild(br.cloneNode());
form.appendChild(document.createElement("p"));

// Append the submit button to the form
form.appendChild(submit);

document.getElementsByTagName("body")[0].appendChild(form);
