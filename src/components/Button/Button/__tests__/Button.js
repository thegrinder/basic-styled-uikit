import React from 'react';
import { render } from '@testing-library/react';
import { TypographyProvider } from '../../../Typography';
import { ModeProvider } from '../../../Mode';
import ButtonProvider from '../ButtonProvider';
import Button from '../Button';

const children = <span>children</span>;

const renderComponent = (props = {}) =>
  render(
    <ModeProvider>
      <TypographyProvider>
        <ButtonProvider>
          <Button {...props}>{children}</Button>
        </ButtonProvider>
      </TypographyProvider>
    </ModeProvider>
  );

describe('<Button />', () => {
  it('should render correctly with default props and children', () => {
    const { queryByText } = renderComponent();
    expect(queryByText('children')).toBeTruthy();
  });

  it('should render correctly with custom props', () => {
    const spinner = <span data-testid="spinner" />;
    const { getByText, getByTestId } = renderComponent({
      btnType: 'danger',
      sizing: 's',
      submitting: true,
      renderSpinner: spinner,
    });
    expect(getByTestId('spinner')).toBeTruthy();
    expect(getByText('children')).toBeTruthy();
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
