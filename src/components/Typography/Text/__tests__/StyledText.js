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
    const { queryByText } = renderComponent();
    expect(queryByText(children)).toBeTruthy();
  });

  it('should render <span> tag', () => {
    const { queryByText } = renderComponent();
    expect(queryByText(children).tagName).toEqual('SPAN');
  });
});
