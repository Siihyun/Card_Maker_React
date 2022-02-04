import styled from '@emotion/styled';
import Footer from '@/component/footer/Footer';
import Header from '@/component/header/Header';
import LoginContent from '@/component/loginContent/LoginContent';
import socialLogin from '@/service/authProvider';

const Login = () => {
  return (
    <AppWrapper>
      <LoginWrapper>
        <Header />
        <LoginContent socialLogin={socialLogin} />
        <Footer />
      </LoginWrapper>
    </AppWrapper>
  );
};

const AppWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.makerWhite};
`;

export default Login;
