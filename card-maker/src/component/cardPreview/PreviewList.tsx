import React from 'react';
import { Cards } from '@/component/mainContent/MainContent';
import PreviewItem from '@/component/cardPreview/PreviewItem';
import styled from '@emotion/styled';

interface Props {
  cards: Cards;
}

const PreviewList = ({ cards }: Props) => {
  return (
    <ListWrapper>
      {Object.keys(cards).map((key) => (
        <PreviewItem key={key} card={cards[key]} />
      ))}
    </ListWrapper>
  );
};

const ListWrapper = styled.ul`
  width: 100%;
`;

export default PreviewList;
