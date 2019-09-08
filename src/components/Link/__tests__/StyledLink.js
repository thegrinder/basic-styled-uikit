import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { ModeProvider } from '../../Mode';
import { TypographyProvider } from '../../Typography';
import theme from '../../../theme/theme';
import StyledLink from '../StyledLink';

const children = 'children';

const renderComponent = () =>
  render(
    <ModeProvider>
      <ThemeProvider theme={theme}>
        <TypographyProvider>
          <StyledLink sizing="m" linktype="muted">
            {children}
          </StyledLink>
        </TypographyProvider>
      </ThemeProvider>
    </ModeProvider>
  );

describe('<StyledLink />', () => {
  it('should render correctly with children', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild).toHaveTextContent(children);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <a> tag', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild.tagName).toEqual('A');
  });
});
