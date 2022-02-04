import React from 'react';
import styled from '@emotion/styled';
import Header from '@/component/header/Header';
import Footer from '@/component/footer/Footer';
import MainContent from '@/component/mainContent/MainContent';
import LogoutButton from '@/component/logoutButton/LogoutButton';

const Main = () => {
  return (
    <AppWrapper>
      <MainWrapper>
        <Header />
        <LogoutButton />
        <MainContent />
        <Footer />
      </MainWrapper>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-height: 100%;
  position: relative;
`;

export default Main;
