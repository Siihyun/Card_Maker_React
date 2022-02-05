import React from 'react';
import { Card } from '@/component/mainContent/MainContent';
import styled from '@emotion/styled';

interface Props {
  card: Card;
}

const PreviewItem = ({ card }: Props) => {
  return (
    <ListItemWrapper color={card.color}>
      <Img
        src={card.url ? card.url : 'images/default_avatar.png'}
        alt='profile'
      />
      <InfoWrapper>
        <Title>{card.name}</Title>
        <div>{card.company}</div>
        <Seperator />
        <div>{card.title}</div>
        <div>{card.email}</div>
        <div>{card.message}</div>
      </InfoWrapper>
    </ListItemWrapper>
  );
};

interface ListInterface {
  color: string;
}

const ListItemWrapper = styled.li<ListInterface>`
  display: flex;
  align-items: center;
  list-style: none;
  width: 100%;
  max-width: 30rem;
  border-radius: 1rem;
  box-shadow: 4px 4px 0px -1px ${({ theme }) => theme.colors.makerLightGrey};
  background: ${({ theme, color }) =>
    (color === 'Light' && theme.colors.makerWhite) ||
    (color === 'Dark' && theme.colors.makerBlack) ||
    theme.colors.makerColorful};
  color: ${({ theme, color }) =>
    color === 'Light' ? theme.colors.makerBlack : theme.colors.makerWhite};
  padding: 1rem;
  border: none;
  margin-bottom: 2rem;
`;

const Img = styled.img`
  display: block;
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  background-color: white;
`;

const InfoWrapper = styled.div`
  margin-left: 2rem;
  width: 100%;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 1.25rem;
`;

const Seperator = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid ${({ theme }) => theme.colors.makerWheat};
`;
export default PreviewItem;
