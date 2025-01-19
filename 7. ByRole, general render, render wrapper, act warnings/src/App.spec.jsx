import { screen, fireEvent, within } from '@testing-library/react';

import App from './App';
import { passwordValidationErrors } from './constants/validation';
import { renderWithProviders } from './utils/renderWithProviders';

import * as waitMock from './helpers/wait';

const waitSpy = jest.spyOn(waitMock, 'wait');

describe('App', () => {
  it('should render App with form elements and a title', () => {
    renderWithProviders(<App />);
    // screen.logTestingPlaygroundURL();

    const main = screen.getByRole('main');
    const form = screen.getByRole('form');
    
    const userNameInput = within(form).getByLabelText('User name');
    const passwordInput = within(form).getByLabelText('Password');
    const submitButton = within(form).getByRole('button', { name: 'Create user' });
    const title = screen.getByRole('heading', { name: 'Create user' });
    
    expect(main).toBeInTheDocument();
    expect(userNameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  it('should render error message when form was submit with a weak password', async () => {
    renderWithProviders(<App />);

    const userNameInput = screen.getByLabelText('User name');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Create user' });

    const successMessage = screen.queryByText(/created with password/);
    const errorMessage = screen.queryByText(passwordValidationErrors.length);

    expect(successMessage).not.toBeInTheDocument();
    expect(errorMessage).not.toBeInTheDocument();
    
    // fireEvent сам оборачивает в act, т.к. screen.findBy
    fireEvent.change(userNameInput, { target: { value: 'John' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });
    fireEvent.click(submitButton);

    const errorMessageAfterSubmit = await screen.findByText(passwordValidationErrors.length); // можно и через waitFor
    expect(errorMessageAfterSubmit).toBeInTheDocument();
  });

  it('should render success message after successful submit', async () => {
    renderWithProviders(<App />);

    const userNameInput = screen.getByLabelText('User name');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Create user' });

    const successMessage = screen.queryByText(/created with password/);
    const errorMessage = screen.queryByText(passwordValidationErrors.length);

    expect(successMessage).not.toBeInTheDocument();
    expect(errorMessage).not.toBeInTheDocument();
  
    waitSpy.mockImplementationOnce(() => Promise.resolve());

    fireEvent.change(userNameInput, { target: { value: 'John' } });
    fireEvent.change(passwordInput, { target: { value: 'Qwerty123!' } });
    fireEvent.click(submitButton);

    const successMessageAfterSubmit = await screen.findByText(/created with password/);
    expect(successMessageAfterSubmit).toBeInTheDocument();
  });
});
