const year = document.getElementById("year");
if (year) year.innerHTML = new Date().getFullYear().toString();

const display = (statement: string, output: string): void => {
  const command = document.getElementById("statement");
  const result = document.getElementById("output");
  if (command)
    command.innerHTML = "<p class='text-center'>" + statement + "</p>";
  if (result) result.innerHTML = "<p class='text-center'>" + output + "</p>";
};
const clearStatement = (): void => {
  const statement = document.getElementById("statement");
  if (statement) statement.innerHTML = "";
};
const clearOutput = (): void => {
  const output = document.getElementById("output");
  if (output) output.innerHTML = "";
};

const concatnateStrings = (): void => {
  const str1: string = "First";
  const str2: string = "Second";
  const finalResult = str1 + " " + str2;
  display('const finalResult = str1 + " " + str2;', finalResult);
};

const askNameFromUser = (): void => {
  const name: string = prompt("Enter your name") ?? "";
  alert(name);
  display('const name:string = prompt("Enter your name");', name);
};

const compareNumbers = (): void => {
  const num1: number = Number(prompt("Enter a number"));
  const num2: number = Number(prompt("Enter another number"));
  const html: string =
    'const num1: number = Number(prompt("Enter a number")); <br> const num2: number = Number(prompt("Enter another number"));';
  if (num1 > num2) {
    display(html, "Condition is true");
    alert("Condition is true");
  } else {
    display(html, "Condition is false");
    alert("Condition is false");
  }
};

const ifElseIf = (): void => {
  const num: number = Number(prompt("Enter your full marks"));
  if (num >= 90 && num <= 100) {
    alert("Congratulations, You got A+");
  } else if (num >= 80 && num <= 89) {
    alert("Congratulations, You got A");
  } else if (num >= 70 && num <= 79) {
    alert("Congratulations, You got B");
  } else if (num >= 60 && num <= 69) {
    alert("Congratulations, You got C");
  } else if (num >= 50 && num <= 59) {
    alert("Congratulations, You got D");
  } else if (num >= 40 && num <= 49) {
    alert("Congratulations, You got E");
  } else {
    alert("You Failed");
  }
};

const testConditions = (): void => {
  const num1: number = Number(prompt("Enter a number"));
  const num2: number = Number(prompt("Enter another number"));
  const html: string =
    'const num1: number = Number(prompt("Enter a number")); <br> const num2: number = Number(prompt("Enter another number"));';

  if (num1 > num2) {
    alert("Condition 1 is true");
    return display(html, "Condition 1 is true");
  } else if (num2 > num1) {
    alert("Condition 2 is true");
    return display(html, "Condition 2 is true");
  } else {
    alert("Condition 3 is true");
    return display(html, "Condition 3 is true");
  }
};

const ifNested = (): void => {
  const age: number = Number(prompt("Enter your age"));
  const weight: number = Number(prompt("Enter your weight"));
  const html: string =
    'const age: number = Number(prompt("Enter your age")); <br> const weight: number = Number(prompt("Enter your weight"));';
  const healthy: string = "You are healthy";
  const unhealthy: string = "You are unhealthy";
  if (age >= 18 && age <= 20) {
    if (weight >= 70 && weight <= 85) {
      display(healthy, html);
      return alert(healthy);
    } else {
      display(healthy, html);
      return alert(unhealthy);
    }
  } else if (age <= 17) {
    if (weight > 70) {
      display(healthy, html);
      return alert(unhealthy);
    } else {
      display(healthy, html);
      return alert(healthy);
    }
  } else if (age >= 20) {
    if (weight > 90) {
      display(healthy, html);
      return alert(unhealthy);
    } else {
      display(healthy, html);
      return alert(healthy);
    }
  } else if (age <= 40 && age >= 21) {
    if (weight >= 80 && weight <= 100) {
      display(healthy, html);
      display(healthy, html);
      return alert(healthy);
    }
  } else {
    display(healthy, html);
    return alert(unhealthy);
  }
};

const login = (): void => {
  const email: string = prompt("Enter your email") ?? "";
  if (!email) return alert("Please enter email");
  const password: string = prompt("Enter your password") ?? "";
  if (!password) return alert("Please enter password");
  const html: string =
    'const email: string = prompt("Enter your email") ?? ""; <br> const password: string = prompt("Enter your password") ?? "";';

  if (email == "hashir@gmail.com" && password == "123123") {
    alert("Successfully loggged in ");
    display(html, "Successfully logged in");
  } else {
    return alert("Invalid Credentials");
  }
};
