"use strict";
const setYear = document.getElementById("year");
if (setYear)
    setYear.innerHTML = new Date().getFullYear().toString();
const alertName = () => {
    clearOutput();
    clearStatement();
    const statement = document.getElementById("statement");
    if (statement)
        statement.innerHTML = '<p class="text-center">alert(name);</p>';
    const name = "Muhammad Hashir";
    alert(name);
};
const alertNumber = () => {
    clearOutput();
    clearStatement();
    const statement = document.getElementById("statement");
    if (statement)
        statement.innerHTML = '<p class="text-center">alert(24408);</p>';
    const num = 24408;
    alert(num);
};
const variableName = () => {
    clearOutput();
    clearStatement();
    const html = "<ul class='list-disc'><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords.</li><li>For example, <code>userAlert</code> and <code>myVar</code> are legal.</li><li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a <code>Rose</code>. If you assign the string \"Floribundas\" to the variable <code>rose</code>, and then ask JavaScript for the value assigned to <code>Rose</code>, you'll come up empty.</li><li>I teach the camelCase naming convention. Why \"camelCase\"? Because there is a hump or two (or three) in the middle if the name is formed by more than one word. A camelCase name begins in lower case. If there's more than one word in the name, each subsequent word gets an initial cap, creating a hump. If you form a variable name with only one word, like <code>response</code>, there's no hump. It's a camel that's out of food. Please adopt the camelCase convention. It'll make your variable names more readable, and you'll be less likely to get variable names mixed up.</li></ul>";
    const element = document.getElementById("output");
    if (element) {
        element.innerHTML = html;
    }
};
const camelCase = () => {
    clearOutput();
    clearStatement();
    const html = "<p class='text-center'><code>camelCase <br> addTwoNumber <br> subtractTwoNumber</code></p>";
    const statement = document.getElementById("statement");
    const output = document.getElementById("output");
    if (statement)
        statement.innerHTML =
            '<p class="text-center">if (statement) statement.innerHTML = "html";</p>';
    if (output)
        output.innerHTML = html;
};
const sum = () => {
    const num1 = prompt("Enter first number");
    const n1 = Number(num1);
    const num2 = prompt("Enter second number");
    const n2 = Number(num2);
    console.log(n1, n2);
    const sum = n1 + n2;
    const statement = document.getElementById("statement");
    const output = document.getElementById("output");
    if (statement)
        statement.innerHTML =
            "<p class='text-center'>const sum: number = n1 + n2;</p>";
    if (output)
        output.innerHTML = "<p class='text-center'>" + sum + "</p>";
};
const subtract = () => {
    const num1 = prompt("Enter first number");
    const n1 = Number(num1);
    const num2 = prompt("Enter second number");
    const n2 = Number(num2);
    console.log(n1, n2);
    const subtract = n1 - n2;
    const statement = document.getElementById("statement");
    const output = document.getElementById("output");
    if (statement)
        statement.innerHTML =
            "<p class='text-center'>const subtract: number = n1 - n2;</p>";
    if (output)
        output.innerHTML = "<p class='text-center'>" + subtract + "</p>";
};
const multiply = () => {
    const num1 = prompt("Enter first number");
    const n1 = Number(num1);
    const num2 = prompt("Enter second number");
    const n2 = Number(num2);
    console.log(n1, n2);
    const multiply = n1 * n2;
    const statement = document.getElementById("statement");
    const output = document.getElementById("output");
    if (statement)
        statement.innerHTML =
            "<p class='text-center'>const multiply: number = n1 * n2;</p>";
    if (output)
        output.innerHTML = "<p class='text-center'>" + multiply + "</p>";
};
const divide = () => {
    const num1 = prompt("Enter first number");
    const n1 = Number(num1);
    const num2 = prompt("Enter second number");
    const n2 = Number(num2);
    console.log(n1, n2);
    const divide = n1 / n2;
    const statement = document.getElementById("statement");
    const output = document.getElementById("output");
    if (statement)
        statement.innerHTML =
            "<p class='text-center'>const divide: number = n1 / n2;</p>";
    if (output)
        output.innerHTML = "<p class='text-center'>" + divide + "</p>";
};
const calculate = () => {
    const result = (36 / 6) * 3 + Math.pow(2, 4) - (3 + 5);
    const statement = document.getElementById("statement");
    const output = document.getElementById("output");
    if (statement)
        statement.innerHTML =
            "<p class='text-center'>const result:number = 36 / 6 * 3 + 2 ** 4 - (3 + 5);</p>";
    if (output)
        output.innerHTML = "<p class='text-center'>" + result + "</p>";
};
const clearStatement = () => {
    const statement = document.getElementById("statement");
    if (statement)
        statement.innerHTML = "";
};
const clearOutput = () => {
    const output = document.getElementById("output");
    if (output)
        output.innerHTML = "";
};
//# sourceMappingURL=script.js.map