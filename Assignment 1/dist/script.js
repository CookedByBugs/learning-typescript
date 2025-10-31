"use strict";
const setYear = document.getElementById("year");
if (setYear)
    setYear.innerHTML = new Date().getFullYear().toString();
const alertName = () => {
    const statement = document.getElementById("statement");
    if (statement)
        statement.innerHTML = '<p class="text-center">alert(name);</p>';
    const name = "Muhammad Hashir";
    alert(name);
};
const alertNumber = () => {
    const statement = document.getElementById("statement");
    if (statement)
        statement.innerHTML = '<p class="text-center">alert(24408);</p>';
    const num = 24408;
    alert(num);
};
const variableName = () => {
    const html = "<ul class='list-disc'><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords.</li><li>For example, <code>userAlert</code> and <code>myVar</code> are legal.</li><li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a <code>Rose</code>. If you assign the string \"Floribundas\" to the variable <code>rose</code>, and then ask JavaScript for the value assigned to <code>Rose</code>, you'll come up empty.</li><li>I teach the camelCase naming convention. Why \"camelCase\"? Because there is a hump or two (or three) in the middle if the name is formed by more than one word. A camelCase name begins in lower case. If there's more than one word in the name, each subsequent word gets an initial cap, creating a hump. If you form a variable name with only one word, like <code>response</code>, there's no hump. It's a camel that's out of food. Please adopt the camelCase convention. It'll make your variable names more readable, and you'll be less likely to get variable names mixed up.</li></ul>";
    const element = document.getElementById("output");
    if (element) {
        element.innerHTML = html;
    }
};
//# sourceMappingURL=script.js.map