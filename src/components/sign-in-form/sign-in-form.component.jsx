import { useState } from 'react';
import styled from 'styled-components';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.util';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin-bottom: 20px;
  }
`;

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;

  h2 {
    margin: 10px 0;
  }

  @media only screen and (min-width: 800px) {
    ${ButtonContainer} {
      flex-direction: row;
      justify-content: space-between;
    }
    ${ButtonContainer} button {
      margin-bottom: 0;
    }
  }
`;

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInUserWithEmailAndPassword(email, password);
    } catch (error) {
      if (error.code === 'auth/invalid-credential')
        return alert('Invalid email or password');
      console.error('Sign in failed', error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch (error) {
      console.error('Sign in with google failed', error.messsage);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>I alread have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='email'
          inputOptions={{
            type: 'text',
            required: true,
            onChange: handleChange,
            name: 'email',
            value: email,
          }}
        />
        <FormInput
          label='password'
          inputOptions={{
            type: 'password',
            required: true,
            onChange: handleChange,
            name: 'password',
            value: password,
          }}
        />

        <ButtonContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Sign In With Google
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
