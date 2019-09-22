import React from 'react';
import { render } from '../../../../test-utils';
import FormProvider from '../../FormProvider';
import Radio from '../Radio';

const color = '#ced4da';
const checkedColor = '#1e88e5';
const invalidColor = '#f4511e';
const fontSize = '1rem';

const theme = {
  misc: {
    states: {
      valid: {
        normal: {
          borderColor: color,
        },
        checked: {
          borderColor: checkedColor,
        },
      },
      invalid: {
        borderColor: invalidColor,
      },
    },
  },
  common: {
    misc: {
      fontSize,
    },
  },
};
const testId = 'radio';

const renderComponent = (props = {}) =>
  render(
    <FormProvider theme={theme}>
      <Radio data-testid={testId} {...props} />
    </FormProvider>
  );

describe('<Radio />', () => {
  it('should render with default props', () => {
    const { getByTestId } = renderComponent();
    const radio = getByTestId(testId);
    expect(radio).toHaveStyleRule('border-color', color);
    expect(radio).toHaveStyleRule('font-size', fontSize);
  });

  it('should render with invalid state styles', () => {
    const { getByTestId } = renderComponent({
      invalid: true,
    });
    const radio = getByTestId(testId);
    expect(radio).toHaveStyleRule('border-color', invalidColor);
    expect(radio).toHaveStyleRule('font-size', fontSize);
  });

  it('should render <input> tag with type radio', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId(testId).tagName).toEqual('INPUT');
    expect(getByTestId(testId).type).toEqual('radio');
  });
});
