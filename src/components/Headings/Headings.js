import styled from 'styled-components';
import { string } from 'prop-types';
import { headingSizingStyle, headingColorStyle } from './headingHelpers';

export const H1 = styled.h1`
  display: block;
  margin: 0;
  padding: 0;
  ${headingSizingStyle}
  ${headingColorStyle}
`;

H1.propTypes = {
  sizing: string,
  colour: string,
};

H1.defaultProps = {
  sizing: 'h1',
  colour: 'dark',
};


export const H2 = H1.withComponent('h2');

H2.propTypes = {
  sizing: string,
  colour: string,
};

H2.defaultProps = {
  sizing: 'h2',
  colour: 'dark',
};


export const H3 = H1.withComponent('h3');

H3.propTypes = {
  sizing: string,
  colour: string,
};

H3.defaultProps = {
  sizing: 'h3',
  colour: 'dark',
};


export const H4 = H1.withComponent('h4');

H4.propTypes = {
  sizing: string,
  colour: string,
};

H4.defaultProps = {
  sizing: 'h4',
  colour: 'dark',
};


export const H5 = H1.withComponent('h5');

H5.propTypes = {
  sizing: string,
  colour: string,
};

H5.defaultProps = {
  sizing: 'h5',
  colour: 'dark',
};


export const H6 = H1.withComponent('h6');

H6.propTypes = {
  sizing: string,
  colour: string,
};

H6.defaultProps = {
  sizing: 'h6',
  colour: 'dark',
};
