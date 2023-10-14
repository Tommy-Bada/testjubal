import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

/**
 * **************************************************************************
 * **************************************************************************
 * Author:
 *
 * email:
 *
 * filename: siginform.test.tsx
 *
 * @description:
 *
 * ***************************************************************************
 * ***************************************************************************
 * ? Local & Shared Imports
 */
import SignInForm from '@/shared/components/forms/SignInForm';

describe('SignInForm', () => {
  test('renders SignInForm component and call onSubmit with form-data', async () => {
    const onSubmit = jest.fn();
    const { getByText } = render(
      <SignInForm onSubmit={onSubmit} loading={false} />
    );

    // Check if Login form fields are rendered
    expect(screen.getByTestId('sign-in-username')).toBeInTheDocument();
    expect(screen.getByTestId('sign-in-password')).toBeInTheDocument();

    // Check if Login Button is rendered
    expect(getByText('Login')).toBeInTheDocument();

    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Login' });

    await act(async () => {
      fireEvent.change(usernameInput, { target: { value: 'testing' } });
      fireEvent.change(passwordInput, { target: { value: 'Password@!23' } });
      fireEvent.click(submitButton);
    });

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
