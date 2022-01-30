import React from 'react';
import styled from '@emotion/styled';
import { Card } from '@/component/mainContent/MainContent';

interface Props {
  cards: Card[];
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}

const CardPreview = ({ cards, setCards }: Props) => {
  return (
    <CardPreviewWrapper>
      <Title>Card Preview</Title>
    </CardPreviewWrapper>
  );
};

const CardPreviewWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.makerGreen};
`;

export default CardPreview;
