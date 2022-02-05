import { useCallback } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const LogoutButton = () => {
  const navigate = useNavigate();
  const handleOnclick = useCallback(() => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('success');
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
    navigate('/login');
  }, [navigate]);

  return <Button onClick={handleOnclick}>Logout</Button>;
};

const Button = styled.button`
  width: 4rem;
  height: 2rem;
  color: ${({ theme }) => theme.colors.makerWhite};
  font-weight: bold;
  position: absolute;
  top: 1rem;
  right: 0.5rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.makerBlack};
`;

export default LogoutButton;
