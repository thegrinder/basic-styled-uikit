import styled from 'styled-components';
import { string } from 'prop-types';
import { textSizingStyle, textColorStyle } from '../textHelpers';

const Paragraph = styled.p`
  display: block;
  margin: 0;
  padding: 0;
  ${textSizingStyle}
  ${textColorStyle}
`;

Paragraph.propTypes = {
  colour: string,
  sizing: string,
};

Paragraph.defaultProps = {
  colour: 'normal',
  sizing: 'medium',
};

export default Paragraph;
