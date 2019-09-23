import React from 'react';
import { render } from '../../../../test-utils';
import FormProvider from '../../FormProvider';
import InlineInput from '../InlineInput';

const color = '#161616';
const invalidColor = '#f4511e';
const fontSize = '1rem';

const theme = {
  inline: {
    states: {
      valid: {
        normal: {
          color,
        },
      },
      invalid: {
        color: invalidColor,
      },
    },
  },
  common: {
    inline: {
      fontSize,
    },
  },
};

const testId = 'inline-input';

const renderComponent = (props = {}) =>
  render(
    <FormProvider theme={theme}>
      <InlineInput data-testid={testId} {...props} />
    </FormProvider>
  );

describe('<InlineInput />', () => {
  it('should render with default styles', () => {
    const { getByTestId } = renderComponent();
    const inlineInput = getByTestId(testId);
    expect(inlineInput).toHaveStyleRule('color', color);
    expect(inlineInput).toHaveStyleRule('font-size', fontSize);
  });

  it('should render with invalid state styles', () => {
    const { getByTestId } = renderComponent({
      invalid: true,
    });
    const inlineInput = getByTestId(testId);
    expect(inlineInput).toHaveStyleRule('color', invalidColor);
    expect(inlineInput).toHaveStyleRule('font-size', fontSize);
  });

  it('should render correctly with custom props', () => {
    const spinner = <span data-testid="spinner" />;
    const { queryByTestId } = renderComponent({
      submitting: true,
      renderSpinner: spinner,
    });
    expect(queryByTestId('spinner')).toBeTruthy();
    expect(queryByTestId(testId)).toBeTruthy();
  });
});
