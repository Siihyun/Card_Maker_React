import React from 'react';
import styled from '@emotion/styled';
import { Cards } from '@/component/mainContent/MainContent';
import MakerItem from '@/component/cardMaker/MakerItem';

interface Props {
  cards: Cards;
}

const MakerList = ({ cards }: Props) => {
  return (
    <ListWrapper>
      {Object.keys(cards).map((key) => (
        <MakerItem key={key} id={key} cards={cards} />
      ))}
    </ListWrapper>
  );
};

const ListWrapper = styled.ul`
  width: 100%;
`;

export default MakerList;
