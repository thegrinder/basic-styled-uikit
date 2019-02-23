const commands = require('./commands');

const run = cliArgs => new Promise((resolve, reject) => {
  const command = commands[cliArgs[0]];
  if (!command) {
    return reject(new Error(`${cliArgs[0]} command does not exit`));
  }
  const commandPromise = command();
  return commandPromise
    .then(resolve)
    .catch(reject);
});

module.exports = run;
