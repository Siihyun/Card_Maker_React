import styled from '@emotion/styled';

interface Props {
  googleLogin: () => void;
  githubLogin: () => void;
}

const LoginContent = ({ googleLogin, githubLogin }: Props) => {
  return (
    <LoginWrapper>
      <LoginTitle>Login</LoginTitle>
      <LoginMethod onClick={googleLogin}>Google</LoginMethod>
      <LoginMethod onClick={githubLogin}>Github</LoginMethod>
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
`;

export default LoginContent;
