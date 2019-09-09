import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { ModeProvider } from '../../../Mode';
import { TypographyProvider } from '../../../Typography';
import theme from '../../../../theme/theme';
import CheckBox from '../CheckBox';

const testId = 'checkbox';

const renderComponent = (props = {}) =>
  render(
    <ModeProvider>
      <ThemeProvider theme={theme}>
        <TypographyProvider>
          <CheckBox data-testid={testId} {...props} />
        </TypographyProvider>
      </ThemeProvider>
    </ModeProvider>
  );

describe('<CheckBox />', () => {
  it('should render correctly with default props', () => {
    const { queryByTestId } = renderComponent();
    expect(queryByTestId(testId)).toBeTruthy();
  });

  it('should render correctly with custom props', () => {
    const { queryByTestId } = renderComponent({
      invalid: true,
    });
    expect(queryByTestId(testId)).toBeTruthy();
  });

  it('should render <input> tag with type checkbox', () => {
    const { queryByTestId } = renderComponent();
    expect(queryByTestId(testId).tagName).toEqual('INPUT');
    expect(queryByTestId(testId).type).toEqual('checkbox');
  });
});
