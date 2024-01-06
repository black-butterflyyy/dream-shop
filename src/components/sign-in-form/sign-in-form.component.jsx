import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.util';
import './sign-in-form.styles.scss';

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
    <div className='sign-in-container '>
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

        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' onClick={signInWithGoogle} buttonType='google'>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
