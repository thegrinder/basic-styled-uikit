import React from 'react';
import { render } from '@testing-library/react';
import { ModeProvider } from '../../../Mode';
import TypographyProvider from '../../TypographyProvider';
import StyledHeading from '../StyledHeading';

const children = 'children';

const renderComponent = (props = {}) =>
  render(
    <ModeProvider>
      <TypographyProvider>
        <StyledHeading
          sizing="h1"
          color="primary"
          marginBottom
          emphasis="high"
          ignoreBackground={false}
          {...props}
        >
          {children}
        </StyledHeading>
      </TypographyProvider>
    </ModeProvider>
  );

describe('<StyledHeading />', () => {
  it('should render correctly with children', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild).toHaveTextContent(children);
    expect(firstChild).toMatchSnapshot();
  });
});
