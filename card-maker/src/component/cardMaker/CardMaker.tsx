import React from 'react';
import styled from '@emotion/styled';
import { Cards } from '@/component/mainContent/MainContent';
import MakerList from '@/component/cardMaker/MakerList';
import RegisterItem from '@/component/cardMaker/RegisterItem';

interface Props {
  cards: Cards;
}

const CardMaker = ({ cards }: Props) => {
  return (
    <CardMakerWrapper>
      <Title>CardMaker</Title>
      <MakerList cards={cards} />
      <RegisterItem cards={cards} />
    </CardMakerWrapper>
  );
};

const CardMakerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 50%;
  padding: 2rem 1rem;
  border-right: 1px solid ${({ theme }) => theme.colors.makerLightGrey};
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.makerGreen};
  margin-bottom: 1.5rem;
`;

export default CardMaker;
