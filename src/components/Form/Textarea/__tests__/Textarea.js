import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ModeProvider } from '../../../Mode';
import { TypographyProvider } from '../../../Typography';
import theme from '../../../../theme/theme';
import Textarea from '../Textarea';

const testId = 'textarea';

const renderComponent = props =>
  render(
    <ModeProvider>
      <ThemeProvider theme={theme}>
        <TypographyProvider>
          <Textarea data-testid={testId} {...props} />
        </TypographyProvider>
      </ThemeProvider>
    </ModeProvider>
  );

describe('<Textarea />', () => {
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

  it('should render <textarea> tag', () => {
    const { queryByTestId } = renderComponent();
    expect(queryByTestId(testId).tagName).toEqual('TEXTAREA');
  });
});
