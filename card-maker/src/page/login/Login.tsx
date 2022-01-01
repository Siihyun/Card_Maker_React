import styled from '@emotion/styled';
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import LoginContent from '../../component/loginContent/LoginContent';

const Login = () => {
  return (
    <LoginWrapper>
      <Header />
      <LoginContent />
      <Footer />
    </LoginWrapper>
  );
};

const LoginWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.makerWhite};
`;

export default Login;
