import React from 'react';
import { render } from '../../../../test-utils';
import FormProvider from '../../FormProvider';
import Select from '../Select';

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

const testId = 'select';
const option = <option>option</option>;

const renderComponent = (props = {}) =>
  render(
    <FormProvider theme={theme}>
      <Select data-testid={testId} {...props}>
        {option}
      </Select>
    </FormProvider>
  );

describe('<Select />', () => {
  it('should render with default styles and its children', () => {
    const { getByTestId, queryByText } = renderComponent();
    const select = getByTestId(testId);
    expect(queryByText('option')).toBeTruthy();
    expect(select).toHaveStyleRule('color', color);
    expect(select).toHaveStyleRule('font-size', fontSize);
  });

  it('should render with invalid state styles', () => {
    const { getByTestId } = renderComponent({
      invalid: true,
    });
    const select = getByTestId(testId);
    expect(select).toHaveStyleRule('color', invalidColor);
    expect(select).toHaveStyleRule('font-size', fontSize);
  });

  it('should render <select> tag', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId(testId).tagName).toEqual('SELECT');
  });
});
