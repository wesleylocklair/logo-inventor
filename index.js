const fs = require('fs')
const inquirer = require('inquirer')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter Logo text (3 characters max!)',
      name: 'textcontent',
      validate: function(input) {
        // Check if the input length is greater than 3
        if (input.length > 3) {
          return ' <Please enter no more than three characters>';
        }
        return true
      }
    },
      {
      type: 'list',
      message: 'What color text would you like?',
      name: 'textcolor',
      choices: ["blue",'green','red','white','black','orange','yellow']
    },
    {
        type: 'list',
        message: 'What shape would you like?',
        name: 'shapelist',
        choices:['triangle','square','circle']
      },
      {
        type: 'list',
        message: 'Shape color?',
        name: 'shapecolor',
        choices: ["blue",'green','red','white','black','orange','yellow']
      },
  ])
  .then((response) => {
   if(response.shapelist === 'circle'){
    const mysvglogo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="90" fill="${response.shapecolor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textcolor}">${response.textcontent}</text>
    </svg>`
          fs.writeFile('logo.svg', mysvglogo, (err) => { 
              err ? console.error(err) : console.log('Generated! logo.svg!')})
   }
else if(response.shapelist === 'triangle'){
const svglogotriangle = `<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150,10 280,200 10,200" fill="${response.shapecolor}" />
  <text x="145" y="150" font-size="60" text-anchor="middle" fill="${response.textcolor}">${response.textcontent}</text>
</svg>`
        fs.writeFile('logo.svg', svglogotriangle, (err) => { 
          err ? console.error(err) : console.log('Generated! logo.svg!')})
}
  else if(response.shapelist === 'square'){
    const svglogosquare = `<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" x="10" y="10" fill="${response.shapecolor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textcolor}">${response.textcontent}</text>
  </svg>`
          fs.writeFile('logo.svg', svglogosquare, (err) => { 
            err ? console.error(err) : console.log('Generated! logo.svg!')})

  }
  else(console.log('error'))
  });
