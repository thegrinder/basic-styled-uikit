import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ModeProvider } from '../../../Mode';
import { TypographyProvider } from '../../../Typography';
import theme from '../../../../theme/theme';
import Radio from '../Radio';

const testId = 'radio';

const renderComponent = (props = {}) =>
  render(
    <ModeProvider>
      <ThemeProvider theme={theme}>
        <TypographyProvider>
          <Radio data-testid={testId} {...props} />
        </TypographyProvider>
      </ThemeProvider>
    </ModeProvider>
  );

describe('<Radio />', () => {
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

  it('should render <input> tag with type radio', () => {
    const { queryByTestId } = renderComponent();
    expect(queryByTestId(testId).tagName).toEqual('INPUT');
    expect(queryByTestId(testId).type).toEqual('radio');
  });
});
