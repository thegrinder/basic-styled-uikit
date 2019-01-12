import styled from 'styled-components';
import { string, bool } from 'prop-types';
import { getBaseLineHeight } from '../../theme/typography';
import { calcLineHeight } from '../../helpers/utils';
import {
  getTextSizing,
  textSizingStyle,
  textColorStyle,
  textCommonStyle,
} from './textHelpers';

const propTypes = {
  color: string.isRequired,
  sizing: string.isRequired,
  marginBottom: bool.isRequired,
};

const StyledText = styled.span`
  display: block;
  margin: 0;
  padding: 0;
  ${textCommonStyle}
  ${textSizingStyle}
  ${textColorStyle}
  line-height: ${props => calcLineHeight(
    getTextSizing(props).fontSize,
    getBaseLineHeight(props),
  )};
  margin-bottom: ${props => (props.marginBottom ? `${getBaseLineHeight(props)}rem` : '0')};
`;

StyledText.propTypes = propTypes;

export default StyledText;
