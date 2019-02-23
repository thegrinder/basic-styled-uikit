const { readFile: fsReadFile, writeFile: fsWriteFile, readdir: fsReadDir } = require('fs');

const readFile = path => new Promise((resolve, reject) => (
  fsReadFile(path, (err, data) => (err
    ? reject(err)
    : resolve(data)
  ))
));

const writeFile = (path, content) => new Promise((resolve, reject) => (
  fsWriteFile(path, content, err => (err
    ? reject(err)
    : resolve()
  ))
));

const readDir = path => new Promise((resolve, reject) => (
  fsReadDir(path, (err, files) => (err
    ? reject(err)
    : resolve(files)
  ))
));

const flattenArray = arr => arr.reduce((a, b) => a.concat(b), []);

module.exports = {
  readDir,
  readFile,
  writeFile,
  flattenArray,
};
