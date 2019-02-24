const {
  readFile: fsReadFile,
  writeFile: fsWriteFile,
  mkdir: fsMkdir,
} = require('fs');

const readFile = path => new Promise((resolve, reject) => (
  fsReadFile(path, 'utf-8', (err, data) => (err
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

const mkdir = path => new Promise((resolve, reject) => (
  fsMkdir(path, err => (err
    ? reject(err)
    : resolve()
  ))
));

module.exports = {
  readFile,
  writeFile,
  mkdir,
};
