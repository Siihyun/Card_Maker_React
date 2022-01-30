import React from 'react';
import styled from '@emotion/styled';
import MakerItem from '@/component/cardMaker/MakerItem';
import { Card } from '@/component/mainContent/MainContent';

interface Props {
  cards: Card[];
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}

const CardMaker = ({ cards, setCards }: Props) => {
  return (
    <CardMakerWrapper>
      <Title>CardMaker</Title>
      <MakerItem></MakerItem>
    </CardMakerWrapper>
  );
};

const CardMakerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.makerGreen};
  margin-bottom: 1.5rem;
`;

export default CardMaker;
