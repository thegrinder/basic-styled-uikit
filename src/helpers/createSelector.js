const createSelector = category => theme => {
  if (!theme) {
    throw new Error('You need to provide a theme object');
  }
  if (!theme[category]) {
    throw new Error(`Your theme is missing ${category} key`);
  }
  return theme[category];
};

export default createSelector;
