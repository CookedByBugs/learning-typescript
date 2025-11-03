"use strict";
//  1) Faisalabad 2) Lahore 3) Karachi 4) Islamabad 5) Burewala 6) Sheikhupura 7) Kashmir
const cities = [
    "Faisalabad",
    "Lahore",
    "Karachi",
    "Islamabad",
    "Burewala",
    "Sheikupura",
    "Kashmir",
];
const clearInput = () => {
    const input = document.getElementById("input");
    if (input)
        input.value = "";
};
const clearOutput = () => {
    const output = document.getElementById("output");
    if (output)
        output.innerHTML = "";
};
const getFieldValue = (fieldName) => {
    const input = document.getElementById(fieldName);
    if (input) {
        return input.value;
    }
};
const display = (statement) => {
    const output = document.getElementById("output");
    if (output) {
        output.innerHTML = `<p class="text-center"> ${statement}</p>`;
    }
};
setInterval(() => {
    const city = document.getElementById("cities");
    if (city) {
        city.innerHTML = cities
            .map((c, i) => {
            return `${i + 1}. ${c} `;
        })
            .join(" ");
    }
}, 500);
const showAlert = () => {
    alert("A simple alert");
    display("A simple alert");
};
const printName = () => {
    const name = getFieldValue("input");
    if (!name)
        return alert("Please enter name");
    display(name);
};
const printCities = () => {
    display(cities
        .map((c, i) => {
        return `${i + 1}. ${c} <br>`;
    })
        .join(" "));
};
const addCity = () => {
    const cityName = getFieldValue("input");
    if (!cityName)
        return alert("First enter a city name");
    cities.push(cityName);
};
const generateTable = () => {
    const num = Number(prompt("Enter first number"));
    if (Number.isNaN(num)) {
        return alert("Enter a valid number");
    }
    const limitNum = Number(prompt("Enter limit number"));
    if (Number.isNaN(limitNum)) {
        return alert("Enter a valid number");
    }
    let html = `<div class="text-center">`;
    for (let i = 1; i <= limitNum; i++) {
        console.log(`${num} x ${i} = ${i * num} <br>`);
        html += `${num} x ${i} = ${i * num} <br>`;
    }
    html += `</div>`;
    display(html);
};
//# sourceMappingURL=script.js.map