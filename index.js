// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const fileName = "README.md";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What's the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of your project",
  },
  {
    type: "input",
    name: "instructions",
    message: "Please enter the installation instructions of your project",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter the usage information of your project",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please enter the contribution guidelines of your project",
  },
  {
    type: "input",
    name: "test",
    message: "Please enter the test instructions of your project",
  },
  {
    type: "list",
    name: "license",
    message: "Please Select One of the licences available :",
    choices: [
      "Apache 2.0 License",
      "BSD 3-Clause License",
      "Eclipse Public License 1.0",
    ],
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your Github username :",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address :",
  },
];

// TODO: Create a function to write README file
function writeToFile(
  fileName,
  {
    title,
    description,
    instructions,
    usage,
    contribution,
    test,
    license,
    github,
    email,
  }
) {
  console.log("LIC", license);
  let licenseLogoURL = "";
  switch (license) {
    case "Apache 2.0 License":
      licenseLogoURL =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "BSD 3-Clause License":
      licenseLogoURL =
        "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "Eclipse Public License 1.0":
      licenseLogoURL =
        "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
  }

  const readMeBody = `  
  ${licenseLogoURL}

  # ${title}  <a id='title'></a> 
  
  ## Description  <a id='description'></a>
  - **${description}**  
   ### Installation instructions  <a id='installationInstructions'></a>
    - ${instructions}  

   ### Usage Information  <a id='usageInformation'></a>
    - ${usage}  

   ### Contribution guidelines  <a id='contributionGuidelines'></a>
    - ${contribution}  

   ### Test Instructions  <a id='testInstructions'></a>
    - ${test}  

   #### Questions  <a id='questions'></a>  
   
   + Github : [${github}](https://github.com/${github})
   + Email : ${email}  
   Please if your got more questions contact me via email, please enter the title of the project to disscuss in the subject area as well as the specific issue in the subject area, and a  description of your suggestions/questions, thank you in advance.  

   # My Table of content
- [Project Title](#title)
- [Description](#description)
- [Installation instructions](#installationInstructions)
- [Usage Information](#usageInformation)
- [Contribution guidelines](#contributionGuidelines)
- [Test Instructions](#testInstructions)
- [Questions](#questions)
    `;
  console.log("FILE NAME", fileName);
  console.log("TITULO", title);
  console.log(readMeBody);

  fs.writeFile("README.md", readMeBody, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => writeToFile(fileName, answers));
}

// Function call to initialize app
init();
