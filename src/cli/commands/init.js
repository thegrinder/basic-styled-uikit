const { join } = require('path');
const { readDir, flattenArray } = require('../utils');

const init = () => {
  const componentsPath = join(__dirname, '..', '..', 'components');
  return readDir(componentsPath)
    .then(folders => (
      Promise.all(folders.map((folder) => {
        const componentPath = join(componentsPath, folder);
        return readDir(componentPath);
      }))
    ))
    .then(result => (
      console.log(
        flattenArray(result)
          .filter(file => file.includes('Theme')),
      )
    ));
};

module.exports = init;
