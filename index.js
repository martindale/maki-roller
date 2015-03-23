var roller = require('inquirer');
var config = require('./package.json');

roller.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your application?'
  },
  {
    type: 'input',
    name: 'resources',
    message: 'What resources does your application expose?  (comma separated)'
  },
  {
    type: 'checkbox',
    name: 'features',
    message: 'What services should these resources be exposed over? (all enabled by default)',
    choices: [
      { name: 'http', checked: true },
      { name: 'https', checked: true },
      { name: 'spdy', checked: true }
    ]
  },
  {
    type: 'checkbox',
    name: 'features',
    message: 'What features should your application have?',
    choices: [
      new roller.Separator('Common'),
      { name: 'Sessions (via cookies)' },
      { name: 'Analytics & Tracking' },
      new roller.Separator('Specialized'),
      { name: 'OAuth: GitHub' }
    ]
  }
], function(answers) {
  console.log('answers:', answers );
});
