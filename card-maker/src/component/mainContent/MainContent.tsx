import React from 'react';
import styled from '@emotion/styled';
import CardPreview from '../cardPreview/CardPreview';
import CardMaker from '../cardMaker/CardMaker';

const MainContent = () => {
  return (
    <MainWrapper>
      <CardMaker />
      <Seperator />
      <CardPreview />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.makerWhite};
`;

const Seperator = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.colors.makerLightGrey};
`;

export default MainContent;
