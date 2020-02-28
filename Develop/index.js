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
    .then(function ({ username, badge, title, discription, contents, install, usage, licence, test, contribute,}) {

        const queryUrl = `https://api.github.com/users/${username}`;
        axios
            .get(queryUrl)
            .then(function ({ data }) {
                console.log(data)
                let templete =`
                   * Your username is: ${username}
                   * Your badge is: ${badge}
                   * Your project title is: ${title}
                   * Your table of contents is: ${contents}
                   * Your project discription is: ${discription}
                   * This is how you install it: ${install}
                   * This is how you use it: ${usage}
                   * Your project licence: ${licence}
                   * This is how you test your : ${test}
                   * Who contributed: ${contribute}
                   * git hub avatar: ${data.avatar_url}
                   * email: ${data.email}

                `;


                    fs.writeFile("Project.md", templete, err => {
                        if (err) {
                            throw err
                        }
                        

                    })


                // function init() {

                // }

                // init();
            });


    });

