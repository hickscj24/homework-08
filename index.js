
var inquirer = require('inquirer');
var fs = require('fs');
var path = require('path');



inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input', 
        name: 'title',
        message: 'what is the title of your repository?'
    },
    {
        type: 'input', 
        name: 'description',
        message: 'what is your description of your repository?'
    },
    {
        type: 'input', 
        name: 'github',
        message: 'what is the title of your Github Username'
    },
    
    {
        type: 'input', 
        name: 'installation',
        message: 'install'
    },
    {
        type: 'input', 
        name: 'usage',
        message: 'additional info'
    },
    {
        type: 'list', 
        name: 'license',
        message: 'license info',
        choices: ['MIT', 'GPL', 'BSD-3',]
    },
    {
        type: 'input', 
        name: 'contributing',
        message: 'contributing info'
    },
    {
        type: 'input', 
        name: 'tests',
        message: 'testing info'
    },
    {
        type: 'input', 
        name: 'questions',
        message: 'do you have any questions?'
    },
    {
        type: 'input', 
        name: 'email',
        message: 'whats your email address?'
    },
  ])
  .then((answers) => {
   console.log(answers)
    // Use user feedback for... whatever!!
    createReadme(answers)
  });

  //function to generate readme file
  function createReadme(res){
    console.log(res);
    var licenseUrl = ''
    if (res.license == 'MIT'){
        licenseUrl = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (res.license == 'BSD-3'){
        licenseUrl ='[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    } else if (res.license == 'GPL'){
        licenseUrl = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }


    var readmeFile = `
 
# ${res.title}
## Description 
${res.description}
## table of contents
* [description](#description)
* [installation](#installation)
* [usage](#usage)
* [license](#license)
* [contributing](#contributing)
* [tests](#tests)
* [questions](#questions)
## installation
${res.installation}
## usage
${res.usage}
## license
${licenseUrl}
## contributing
${res.contributing}
## tests   
${res.tests}
## questions
${res.questions} <br/>
if you have any additional questions please contact ${res.email} <br/>
[github ${res.github}](https://github.com/${res.github})
    `;


console.log(readmeFile);

writeFile(readmeFile);


  }



  //this function will create and add content to file
  function writeFile(content){
    console.log(content);

 fs.writeFile(path.join(process.cwd(), 'output/README.md'), content,  function (err) {
        if (err) throw err;
        console.log('Saved!')
     } );
   


  }