import React from 'react';
import { render } from '../../../test-utils';
import ButtonProvider from '../ButtonProvider';
import Button from '../Button';

const defaultBgColor = '#868e96';
const primaryBgColor = '#1e88e5';
const smallFontSize = '.875rem';
const mediumFontSize = '1rem';
const fontWeight = '600';
const theme = {
  btnTypes: {
    default: {
      normal: {
        backgroundColor: defaultBgColor,
      },
    },
    primary: {
      normal: {
        backgroundColor: primaryBgColor,
      },
    },
  },
  sizings: {
    s: {
      fontSize: smallFontSize,
    },
    m: {
      fontSize: mediumFontSize,
    },
  },
  common: {
    fontWeight,
  },
};

const testId = 'button';
const children = <span>children</span>;

const renderComponent = (props = {}) =>
  render(
    <ButtonProvider theme={theme}>
      <Button data-testid={testId} {...props}>
        {children}
      </Button>
    </ButtonProvider>
  );

describe('<Button />', () => {
  it('should render correctly with default props and children', () => {
    const { queryByTestId } = renderComponent();
    const button = queryByTestId(testId);
    expect(button).toBeTruthy();
    expect(button).toHaveStyleRule('background-color', defaultBgColor);
    expect(button).toHaveStyleRule('font-size', mediumFontSize);
    expect(button).toHaveStyleRule('font-weight', fontWeight);
  });

  it('should render with correct styles based on custom props', () => {
    const { queryByTestId } = renderComponent({
      btnType: 'primary',
      sizing: 's',
    });
    const button = queryByTestId(testId);
    expect(button).toBeTruthy();
    expect(button).toHaveStyleRule('background-color', primaryBgColor);
    expect(button).toHaveStyleRule('font-size', smallFontSize);
    expect(button).toHaveStyleRule('font-weight', fontWeight);
  });

  it('should render correctly with a spinner', () => {
    const spinner = <span data-testid="spinner" />;
    const { queryByText, queryByTestId } = renderComponent({
      submitting: true,
      renderSpinner: spinner,
    });
    expect(queryByTestId('spinner')).toBeTruthy();
    expect(queryByText('children')).toBeTruthy();
  });

  it('should render <a> tag by default', () => {
    const {
      container: { firstChild },
    } = renderComponent({ as: 'a' });
    expect(firstChild.tagName).toEqual('A');
  });

  it('should render render <button> tag', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild.tagName).toEqual('BUTTON');
  });
});
