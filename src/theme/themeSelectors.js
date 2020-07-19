const createSelector = category => theme => theme.uiKit[category];

export const getTypography = createSelector('typography');
export const getColors = createSelector('colors');
export const getButton = createSelector('button');
export const getForm = createSelector('form');
export const getHeading = createSelector('heading');
export const getText = createSelector('text');
export const getColorBox = createSelector('colorBox');
export const getLink = createSelector('link');
