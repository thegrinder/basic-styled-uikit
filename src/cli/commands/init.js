#!/usr/bin/env node

const init = () => new Promise((resolve) => {
  console.log('INIT FIRED');
  resolve();
});

module.exports = init;
