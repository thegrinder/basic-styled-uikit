import React from 'react';
import { render } from '../../../../test-utils';
import FormProvider from '../../FormProvider';
import Textarea from '../Textarea';

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

const testId = 'textarea';

const renderComponent = props =>
  render(
    <FormProvider theme={theme}>
      <Textarea data-testid={testId} {...props} />
    </FormProvider>
  );

describe('<Textarea />', () => {
  it('should render with default styles', () => {
    const { getByTestId } = renderComponent();
    const textarea = getByTestId(testId);
    expect(textarea).toHaveStyleRule('color', color);
    expect(textarea).toHaveStyleRule('font-size', fontSize);
  });

  it('should render with invalid state styles', () => {
    const { getByTestId } = renderComponent({
      invalid: true,
    });
    const textarea = getByTestId(testId);
    expect(textarea).toHaveStyleRule('color', invalidColor);
    expect(textarea).toHaveStyleRule('font-size', fontSize);
  });

  it('should render <textarea> tag', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId(testId).tagName).toEqual('TEXTAREA');
  });
});
