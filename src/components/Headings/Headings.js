import styled from 'styled-components';
import { string } from 'prop-types';
import { headingSizingStyle, headingColorStyle } from './headingHelpers';

const propTypes = {
  sizing: string,
  colour: string,
};

const h1defaultProps = {
  sizing: 'h1',
  colour: 'gray800',
};

const h2defaultProps = {
  sizing: 'h2',
  colour: 'gray800',
};

const h3defaultProps = {
  sizing: 'h3',
  colour: 'gray800',
};

const h4defaultProps = {
  sizing: 'h4',
  colour: 'gray800',
};

const h5defaultProps = {
  sizing: 'h5',
  colour: 'gray800',
};

const h6defaultProps = {
  sizing: 'h6',
  colour: 'gray800',
};

export const H1 = styled.h1`
  display: block;
  margin: 0;
  padding: 0;
  ${headingSizingStyle}
  ${headingColorStyle}
`;

H1.propTypes = propTypes;
H1.defaultProps = h1defaultProps;

export const H2 = H1.withComponent('h2');

H2.propTypes = propTypes;
H2.defaultProps = h2defaultProps;

export const H3 = H1.withComponent('h3');

H3.propTypes = propTypes;
H3.defaultProps = h3defaultProps;

export const H4 = H1.withComponent('h4');

H4.propTypes = propTypes;
H4.defaultProps = h4defaultProps;

export const H5 = H1.withComponent('h5');

H5.propTypes = propTypes;
H5.defaultProps = h5defaultProps;

export const H6 = H1.withComponent('h6');

H6.propTypes = propTypes;
H6.defaultProps = h6defaultProps;
