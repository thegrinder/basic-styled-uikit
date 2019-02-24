const { join } = require('path');
const { readFile, writeFile, mkdir } = require('../utils');

const distFolder = 'theme';
const themeFiles = [
  {
    src: join('components', 'Button', 'buttonTheme.js'),
    dist: join(distFolder, 'button.js'),
  },
  {
    src: join('components', 'ColorBox', 'colorBoxTheme.js'),
    dist: join(distFolder, 'colorBox.js'),
  },
  {
    src: join('components', 'Form', 'formTheme.js'),
    dist: join(distFolder, 'form.js'),
  },
  {
    src: join('components', 'Heading', 'headingTheme.js'),
    dist: join(distFolder, 'heading.js'),
  },
  {
    src: join('components', 'Link', 'linkTheme.js'),
    dist: join(distFolder, 'link.js'),
  },
  {
    src: join('components', 'Text', 'textTheme.js'),
    dist: join(distFolder, 'text.js'),
  },
  {
    src: join('theme', 'colors', 'colorsTheme.js'),
    dist: join(distFolder, 'colors.js'),
  },
  {
    src: join('theme', 'typography', 'typographyTheme.js'),
    dist: join(distFolder, 'typography.js'),
  },
];

const init = () => {
  const srcPath = join(__dirname, '..', '..');
  const cwd = process.cwd();
  return mkdir(join(cwd, distFolder))
    .then(() => Promise.all(themeFiles.map(({ src }) => readFile(join(srcPath, src)))))
    .then(cssArr => cssArr.map(css => css.replace('../../theme/colors/colorsTheme', './colors')))
    .then(cssArr => Promise.all(
      cssArr.map((css, i) => writeFile(join(cwd, themeFiles[i].dist), css)),
    ))
    .catch((err) => {
      throw new Error(err);
    });
};

module.exports = init;
