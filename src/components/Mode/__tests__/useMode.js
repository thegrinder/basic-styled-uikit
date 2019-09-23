import React from 'react';
import { fireEvent, render } from '../../../test-utils';
import ModeProvider from '../ModeProvider';
import useMode from '../useMode';

const label = 'toggle';
const Component = () => {
  const { mode, toggleMode } = useMode();
  return (
    <>
      <span>{mode}</span>
      <button type="button" onClick={toggleMode}>
        {label}
      </button>
    </>
  );
};

const renderComponent = (props = {}) =>
  render(
    <ModeProvider {...props}>
      <Component />
    </ModeProvider>
  );

describe('Mode', () => {
  it('should have light mode set by default', () => {
    const { queryByText } = renderComponent();
    expect(queryByText('light')).toBeTruthy();
  });

  it('should accept initial mode prop', () => {
    const { queryByText } = renderComponent({ initialMode: 'dark' });
    expect(queryByText('dark')).toBeTruthy();
  });

  it('should toggle theme', () => {
    const { queryByText, getByText } = renderComponent();
    const button = getByText(label);
    expect(queryByText('light')).toBeTruthy();

    fireEvent.click(button);
    expect(queryByText('dark')).toBeTruthy();

    fireEvent.click(button);
    expect(queryByText('light')).toBeTruthy();
  });
});
