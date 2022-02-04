import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type socialMethod = 'Github' | 'Google';

interface Props {
  socialLogin: (method: socialMethod) => Promise<boolean>;
}

const LoginContent = ({ socialLogin }: Props) => {
  const navigate = useNavigate();

  const handleSocialLogin = (e: React.MouseEvent<HTMLElement>) => {
    const method = e.currentTarget.textContent as socialMethod;
    socialLogin(method).then((result) => {
      if (result) navigate('/main');
    });
  };

  return (
    <LoginWrapper>
      <LoginTitle>Login</LoginTitle>
      <LoginMethod onClick={handleSocialLogin}>Google</LoginMethod>
      <LoginMethod onClick={handleSocialLogin}>Github</LoginMethod>
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

const LoginMethod = styled.button`
  display: flex;
  width: 100%;
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
