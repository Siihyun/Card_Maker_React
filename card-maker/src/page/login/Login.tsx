import styled from '@emotion/styled';
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import LoginContent from '../../component/loginContent/LoginContent';
import googleLogin from '../../service/googleLogin';
import githubLogin from '../../service/githubLogin';

const Login = () => {
  return (
    <LoginWrapper>
      <Header />
      <LoginContent googleLogin={googleLogin} githubLogin={githubLogin} />
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
