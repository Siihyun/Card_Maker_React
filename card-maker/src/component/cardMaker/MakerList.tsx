import React from 'react';
import styled from '@emotion/styled';
import { Cards } from '@/component/mainContent/MainContent';
import MakerItem from '@/component/cardMaker/MakerItem';

interface Props {
  cards: Cards;
  setCards: React.Dispatch<React.SetStateAction<Cards>>;
}

const MakerList = ({ cards, setCards }: Props) => {
  return (
    <ListWrapper>
      {Object.keys(cards).map((key) => (
        <MakerItem key={key} card={cards[key]} />
      ))}
    </ListWrapper>
  );
};

const ListWrapper = styled.ul`
  width: 100%;
`;

export default MakerList;
