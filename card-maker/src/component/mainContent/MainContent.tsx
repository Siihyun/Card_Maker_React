import React from 'react';
import styled from '@emotion/styled';

const MainContent = () => {
  return <MainWrapper>a</MainWrapper>;
};

const MainWrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.makerWhite};
`;

export default MainContent;
