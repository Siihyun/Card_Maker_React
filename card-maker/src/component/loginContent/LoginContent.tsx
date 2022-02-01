import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

interface Props {
  googleLogin: () => Promise<boolean>;
  githubLogin: () => Promise<boolean>;
}

const LoginContent = ({ googleLogin, githubLogin }: Props) => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      if (result) navigate('/main');
    });
  };

  const handleGithubLogin = () => {
    githubLogin().then((result) => {
      if (result) navigate('/main');
    });
  };

  return (
    <LoginWrapper>
      <LoginTitle>Login</LoginTitle>
      <LoginMethod onClick={handleGoogleLogin}>Google</LoginMethod>
      <LoginMethod onClick={handleGithubLogin}>Github</LoginMethod>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  flex: 1;
  padding: 0.5rem;
`;

const LoginTitle = styled.h1`
  margin: 1rem 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

const LoginMethod = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  margin-top: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.makerGreen};
  border-radius: 1rem;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.makerLightPink};
  }
`;

export default LoginContent;
