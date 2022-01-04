import React from 'react';
import styled from '@emotion/styled';
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import MainContent from '../../component/mainContent/MainContent';
import LogoutButton from '../../component/logoutButton/LogoutButton';

const Main = () => {
  return (
    <MainWrapper>
      <Header />
      <LogoutButton />
      <MainContent />
      <Footer />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export default Main;
