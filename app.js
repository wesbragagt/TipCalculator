// packages
const inquirer = require("inquirer");

inquirer
    .prompt([
        { type: "number", name: "bill", message: "Insert the bill amount..." },
        {
            type: "list",
            name: "tip",
            message: "what kind of tip would you like to leave?",
            choices: ["very nice", "good", "decent", "low"]
        }
    ])
    .then(function(answer) {
        let result;
        switch (answer.tip) {
            case "very nice":
                result = (answer.bill * 0.25).toFixed(2);
                break;
            case "good":
                result = (answer.bill * 0.2).toFixed(2);
                break;
            case "decent":
                result = (answer.bill * 0.15).toFixed(2);
                break;
            case "low":
                result = (answer.bill * 0.1).toFixed(2);
                break;
            default:
                result = (answer.bill * 0.2).toFixed(2);
        }
        console.log(
            "----------------------------------------------------------"
        );
        console.log(
            `A ${answer.tip} tip for $${
                answer.bill
            } would be considered at least $${result}`
        );
        console.log(
            "----------------------------------------------------------"
        );
    });