const createSelector = category => (theme) => {
  if (!theme) {
    throw new Error('You need to provide a theme object');
  }
  if (!theme.uiKit) {
    throw new Error('Your theme has to be under uiKit key');
  }
  if (!theme.uiKit[category]) {
    throw new Error(`Your theme is missing ${category} key`);
  }
  return theme.uiKit[category];
};

export const getTypography = createSelector('typography');
export const getColors = createSelector('colors');
export const getButton = createSelector('button');
export const getForm = createSelector('form');
export const getHeading = createSelector('heading');
export const getText = createSelector('text');
export const getColorBox = createSelector('colorBox');
export const getLink = createSelector('link');
