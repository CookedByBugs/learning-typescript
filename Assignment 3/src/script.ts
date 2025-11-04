//  1) Faisalabad 2) Lahore 3) Karachi 4) Islamabad 5) Burewala 6) Sheikhupura 7) Kashmir

const cities: string[] = [
  "Faisalabad",
  "Lahore",
  "Karachi",
  "Islamabad",
  "Burewala",
  "Sheikupura",
  "Kashmir",
];

const clearInput = (): void => {
  const input = document.getElementById("input") as HTMLInputElement | null;
  if (input) input.value = "";
};
const clearOutput = (): void => {
  const output = document.getElementById("output") as HTMLInputElement | null;
  if (output) output.innerHTML = "";
};

const getFieldValue = (fieldName: string): string | undefined => {
  const input = document.getElementById(fieldName) as HTMLInputElement | null;
  if (input) {
    return input.value;
  }
};
const display = (statement: string): void => {
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

const showAlert = (): void => {
  alert("A simple alert");
  display("A simple alert");
};

const printName = (): void => {
  const name = getFieldValue("input");
  if (!name) return alert("Please enter name");
  display(name);
};

const printCities = (): void => {
  display(
    cities
      .map((c, i) => {
        return `${i + 1}. ${c} <br>`;
      })
      .join(" ")
  );
};

const addCity = (): void => {
  const cityName = getFieldValue("input");
  if (!cityName) return alert("First enter a city name");
  cities.push(cityName);
};

const generateTable = (): void => {
  const num: number = Number(prompt("Enter first number"));
  if (Number.isNaN(num)) {
    return alert("Enter a valid number");
  }
  const limitNum: number = Number(prompt("Enter limit number"));
  if (Number.isNaN(limitNum)) {
    return alert("Enter a valid number");
  }
  let html: string = `<div class="text-center">`;
  for (let i = 1; i <= limitNum; i++) {
    console.log(`${num} x ${i} = ${i * num} <br>`);
    html += `${num} x ${i} = ${i * num} <br>`;
  }
  html += `</div>`;
  display(html);
};
