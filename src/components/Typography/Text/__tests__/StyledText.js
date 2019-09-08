import React from 'react';
import { render } from '@testing-library/react';
import { ModeProvider } from '../../../Mode';
import TypographyProvider from '../../TypographyProvider';
import StyledText from '../StyledText';

const children = 'children';

const renderComponent = (props = {}) =>
  render(
    <ModeProvider>
      <TypographyProvider>
        <StyledText
          color="primary"
          sizing="s"
          marginBottom={false}
          emphasis="high"
          ignoreBackground={false}
          {...props}
        >
          {children}
        </StyledText>
      </TypographyProvider>
    </ModeProvider>
  );

describe('<StyledText />', () => {
  it('should render correctly with children', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild).toHaveTextContent(children);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <span> tag', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild.tagName).toEqual('SPAN');
  });
});
