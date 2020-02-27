const fs = require("fs")
const inquirer = require("inquirer")
const axios = require("axios")

inquirer
    .prompt([
        {
            message: "What is your github username?",
            name: "username"
        },
        {
            message: "leave a badge?",
            name: "badge"
        },
        {
            message: "What is your project title?",
            name: "title"
        },
        {
            message: "Describe your project.",
            name: "discription"
        },
        {
            message: "Your table of contents.",
            name: "contents"
        },
        {
            message: "how do you install it",
            name: "install"
        },
        {
            message: "What is your project for?",
            name: "usage"
        },
        {
            message: "Your project licence?",
            name: "licence"
        },
        {
            message: "How would you test it?",
            name: "test"
        },
        {
            message: "How much did you contribute?",
            name: "contribute"
        },
    ])
    .then(function ({ username }) {

        const queryUrl = `https://api.github.com/users/${username}`;
        axios
            .get(queryUrl)
            .then(function ({ data }) {
                console.log(data)

                // const questions = [

                // ];

                // function writeToFile(fileName, data) {
                // }

                // function init() {

                // }

                // init();
            });


    });

