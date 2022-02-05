import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import CardPreview from '@/component/cardPreview/CardPreview';
import CardMaker from '@/component/cardMaker/CardMaker';
import { firebaseDB } from '@/service/firebase';
import { ref, onValue } from '@firebase/database';

export interface Card {
  id?: string;
  name: string;
  company: string;
  color: 'light' | 'dark' | 'Colorful';
  email: string;
  title: string;
  message: string;
  url?: string;
}

export interface Cards {
  [id: string]: Card;
}

const MainContent = () => {
  const [cards, setCards] = useState<Cards>({});
  const dbRef = ref(firebaseDB);

  useEffect(() => {
    onValue(dbRef, (snapshot) => {
      const cards: Cards | null = snapshot.val();
      if (cards === null) {
        setCards({});
        return;
      }
      setCards(cards);
    });
  }, [dbRef]);

  return (
    <MainWrapper>
      <CardMaker cards={cards} />
      <CardPreview cards={cards} />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.makerWhite};
  min-height: 0;
  @media (max-width: ${({ theme }) => theme.sizes.mediaQuery}) {
    flex-direction: column;
  }
`;

export default MainContent;
