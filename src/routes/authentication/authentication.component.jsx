import styled from 'styled-components';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const AuthenticationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 30px auto;
  padding: 0 1rem;

  @media only screen and (min-width: 800px) {
    flex-direction: row;
    width: 900px;
    padding: 0;
  }
`;

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
