import { useState } from 'react';
import styled from 'styled-components';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.util';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
`;

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use')
        alert('Cannot create user,email already in use');
      else console.error('user creation failed', error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have and account?</h2>
      <span>Sign up wih your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          inputOptions={{
            type: 'text',
            required: true,
            onChange: handleChange,
            name: 'displayName',
            value: displayName,
          }}
          label='Display Name'
        />

        <FormInput
          inputOptions={{
            type: 'email',
            required: true,
            onChange: handleChange,
            name: 'email',
            value: email,
          }}
          label='Email'
        />

        <FormInput
          inputOptions={{
            type: 'password',
            required: true,
            onChange: handleChange,
            name: 'password',
            value: password,
          }}
          label='Password'
        />

        <FormInput
          inputOptions={{
            type: 'password',
            required: true,
            onChange: handleChange,
            name: 'confirmPassword',
            value: confirmPassword,
          }}
          label='Confirm Password'
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
