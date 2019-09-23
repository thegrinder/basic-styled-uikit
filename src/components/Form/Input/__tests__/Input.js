import React from 'react';
import { render } from '../../../../test-utils';
import FormProvider from '../../FormProvider';
import Input from '../Input';

const color = '#161616';
const invalidColor = '#f4511e';
const fontSize = '1rem';

const theme = {
  regular: {
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
    regular: {
      fontSize,
    },
  },
};

const testId = 'input';

const renderComponent = (props = {}) =>
  render(
    <FormProvider theme={theme}>
      <Input data-testid={testId} {...props} />
    </FormProvider>
  );

describe('<Input />', () => {
  it('should render with default styles', () => {
    const { getByTestId } = renderComponent();
    const input = getByTestId(testId);
    expect(input).toHaveStyleRule('color', color);
    expect(input).toHaveStyleRule('font-size', fontSize);
  });

  it('should render with invalid state styles', () => {
    const { getByTestId } = renderComponent({
      invalid: true,
    });
    const input = getByTestId(testId);
    expect(input).toHaveStyleRule('color', invalidColor);
    expect(input).toHaveStyleRule('font-size', fontSize);
  });

  it('should render <input> tag', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId(testId).tagName).toEqual('INPUT');
  });
});
