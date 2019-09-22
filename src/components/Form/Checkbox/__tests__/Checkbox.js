import React from 'react';
import { render } from '../../../../test-utils';
import FormProvider from '../../FormProvider';
import Checkbox from '../Checkbox';

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

const testId = 'checkbox';

const renderComponent = (props = {}) =>
  render(
    <FormProvider theme={theme}>
      <Checkbox data-testid={testId} {...props} />
    </FormProvider>
  );

describe('<Checkbox />', () => {
  it('should render with default styles', () => {
    const { getByTestId } = renderComponent();
    const checkbox = getByTestId(testId);
    expect(checkbox).toHaveStyleRule('border-color', color);
    expect(checkbox).toHaveStyleRule('font-size', fontSize);
  });

  it('should render with invalid state styles', () => {
    const { getByTestId } = renderComponent({
      invalid: true,
    });
    const checkbox = getByTestId(testId);
    expect(checkbox).toHaveStyleRule('border-color', invalidColor);
    expect(checkbox).toHaveStyleRule('font-size', fontSize);
  });

  it('should render <input> tag with type checkbox', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId(testId).tagName).toEqual('INPUT');
    expect(getByTestId(testId).type).toEqual('checkbox');
  });
});
