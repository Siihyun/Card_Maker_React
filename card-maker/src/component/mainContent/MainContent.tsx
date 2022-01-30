import React, { useState } from 'react';
import styled from '@emotion/styled';
import CardPreview from '@/component/cardPreview/CardPreview';
import CardMaker from '@/component/cardMaker/CardMaker';

export interface Card {
  name: string;
  company: string;
  color: 'light' | 'dark' | 'Colorful';
  mail: string;
  message: string;
}

const MainContent = () => {
  const [cards, setCards] = useState<Card[]>([]);

  return (
    <MainWrapper>
      <CardMaker cards={cards} setCards={setCards} />
      <Seperator />
      <CardPreview cards={cards} setCards={setCards} />
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
