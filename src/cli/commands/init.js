const { join } = require('path');
const { readFile } = require('../utils');

const themeFilePaths = [
  join('components', 'Button', 'buttonTheme.js'),
  join('components', 'ColorBox', 'colorBoxTheme.js'),
  join('components', 'Form', 'formTheme.js'),
  join('components', 'Heading', 'headingTheme.js'),
  join('components', 'Link', 'linkTheme.js'),
  join('components', 'Text', 'textTheme.js'),
  join('theme', 'colors', 'colorsTheme.js'),
  join('theme', 'typography', 'typographyTheme.js'),
];

const init = () => {
  const srcPath = join(__dirname, '..', '..');
  return Promise.all(themeFilePaths.map(themeFilePath => readFile(join(srcPath, themeFilePath))))
    .then(result => console.log(result));
};

module.exports = init;
