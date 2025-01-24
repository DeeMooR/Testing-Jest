import { screen} from '@testing-library/react';

import { ToggleTheme } from './ToggleTheme';
import { renderWithProviders } from '../../utils/renderWithProviders';

describe('Form', () => {
  it('should render button with light theme', () => {
    renderWithProviders(<ToggleTheme />);

    const btnEl = screen.getByTestId('toggle-theme');

    expect(btnEl).toBeInTheDocument();
    expect(btnEl).toHaveClass('toggle');
    expect(btnEl).toHaveTextContent(/dark/i);
  });

  it('should render button with dark theme', () => {
    renderWithProviders(<ToggleTheme />, { theme: 'dark' });

    const btnEl = screen.getByTestId('toggle-theme');

    expect(btnEl).toBeInTheDocument();
    expect(btnEl).toHaveClass('toggle');
    expect(btnEl).toHaveClass('dark');
    expect(btnEl).toHaveTextContent(/light/i);
  });
})