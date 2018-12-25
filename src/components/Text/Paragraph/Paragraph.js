import styled from 'styled-components';
import { string } from 'prop-types';
import { textSizingStyle, textColorStyle } from '../textHelpers';

const propTypes = {
  colour: string,
  sizing: string,
};

const defaultProps = {
  colour: 'normal',
  sizing: 'medium',
};

const Paragraph = styled.p`
  display: block;
  margin: 0;
  padding: 0;
  ${textSizingStyle}
  ${textColorStyle}
`;

Paragraph.propTypes = propTypes;
Paragraph.defaultProps = defaultProps;

export default Paragraph;
