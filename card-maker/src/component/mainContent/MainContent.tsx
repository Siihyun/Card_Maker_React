import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import CardPreview from '@/component/cardPreview/CardPreview';
import CardMaker from '@/component/cardMaker/CardMaker';
import { firebaseDB } from '@/service/firebase';
import { ref, onValue } from '@firebase/database';

import { jsx, css } from '@emotion/react';

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

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
      <Seperator />
      <CardPreview cards={cards} />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.makerWhite};
  @media (max-width: ${({ theme }) => theme.sizes.mediaQuery}) {
    flex-direction: column;
  }
`;

const Seperator = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.colors.makerLightGrey};
  @media (max-width: ${({ theme }) => theme.sizes.mediaQuery}) {
    display: none;
  }
`;

export default MainContent;
