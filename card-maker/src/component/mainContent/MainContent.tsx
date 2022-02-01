import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import CardPreview from '@/component/cardPreview/CardPreview';
import CardMaker from '@/component/cardMaker/CardMaker';
import { firebaseDB } from '@/service/firebase';
import { ref, onValue } from '@firebase/database';

export interface Card {
  name: string;
  company: string;
  color: 'light' | 'dark' | 'Colorful';
  mail: string;
  message: string;
}

export interface Cards {
  [id: string]: Card;
}

const MainContent = () => {
  const [cards, setCards] = useState<Cards>({});
  const dbRef = ref(firebaseDB);
  console.log(cards);

  useEffect(() => {
    onValue(dbRef, (snapshot) => {
      const data: Cards = snapshot.val();
      setCards(data);
    });
  }, [dbRef]);

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
