const fs = require('fs')
const inquirer = require('inquirer')
const Square = require('./lib/shape.js')
const Triangle = require('./lib/shape')
const Circle = require('./lib/shape')

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
    const mysvglogo = new Circle(
      response.shapecolor,
      response.textcolor,
      response.textcontent
    )
const svg = mysvglogo.render()
          fs.writeFile('logo.svg', svg, (err) => { 
              err ? console.error(err) : console.log('Generated! logo.svg!')})
   }
else if(response.shapelist === 'triangle'){
const svglogotriangle = new Triangle (
  response.shapecolor,
  response.textcolor,
  response.textcontent
)
const svg = svglogotriangle.render()
        fs.writeFile('logo.svg', svg, (err) => { 
          err ? console.error(err) : console.log('Generated! logo.svg!')})
}
  else if(response.shapelist === 'square'){
    const svglogosquare = new Square (
      response.shapecolor,
      response.textcolor,
      response.textcontent
    )
    const svg = svglogosquare.render()
          fs.writeFile('logo.svg', svg, (err) => { 
            err ? console.error(err) : console.log('Generated! logo.svg!')})

  }
  else(console.log('error'))
  });
