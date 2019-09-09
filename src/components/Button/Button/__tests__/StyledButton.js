import React from 'react';
import { render } from '@testing-library/react';
import { TypographyProvider } from '../../../Typography';
import { ModeProvider } from '../../../Mode';
import ButtonProvider from '../ButtonProvider';
import StyledButton from '../StyledButton';

const children = <span>children</span>;

const renderComponent = (props = {}) =>
  render(
    <ModeProvider>
      <TypographyProvider>
        <ButtonProvider>
          <StyledButton btntype="danger" sizing="s" {...props}>
            {children}
          </StyledButton>
        </ButtonProvider>
      </TypographyProvider>
    </ModeProvider>
  );

describe('<StyledButton />', () => {
  it('should render correctly with default props and children', () => {
    const { queryByText } = renderComponent();
    expect(queryByText('children')).toBeTruthy();
  });

  it('should render correctly with custom props', () => {
    const { queryByText } = renderComponent({
      sizing: 'm',
    });
    expect(queryByText('children')).toBeTruthy();
  });

  it('should render <button> tag by default', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild.tagName).toEqual('BUTTON');
  });
});
