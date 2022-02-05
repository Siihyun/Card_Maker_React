import React from 'react';
import styled from '@emotion/styled';
import { Cards } from '@/component/mainContent/MainContent';
import PreviewList from './PreviewList';

interface Props {
  cards: Cards;
}

const CardPreview = ({ cards }: Props) => {
  return (
    <CardPreviewWrapper>
      <Title>Card Preview</Title>
      <PreviewList cards={cards} />
    </CardPreviewWrapper>
  );
};

const CardPreviewWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 50%;
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.makerGreen};
  margin-bottom: 1rem;
`;

export default CardPreview;
