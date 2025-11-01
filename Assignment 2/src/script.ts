const year = document.getElementById("year");
if (year) year.innerHTML = new Date().getFullYear().toString();

const display = (statement: string, output: string): void => {
    const command = document.getElementById(statement);
    const result = document.getElementById(output);
    
};
