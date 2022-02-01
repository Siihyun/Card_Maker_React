import React from 'react';
import styled from '@emotion/styled';
import { Card } from '../mainContent/MainContent';

interface Props {
  card: Card;
}

const MakerItem = ({ card }: Props) => {
  return (
    <ListItemWrapper>
      <FlexWrapper>
        <Input />
        <Input />
        <Select>
          <option>Light</option>
          <option>Dark</option>
          <option>Colorful</option>
        </Select>
      </FlexWrapper>
      <FlexWrapper>
        <Input />
        <Input />
      </FlexWrapper>
      <FlexWrapper>
        <Input />
      </FlexWrapper>
      <FlexWrapper>
        <UploadButton>me</UploadButton>
        <DeleteButton>Delete</DeleteButton>
      </FlexWrapper>
    </ListItemWrapper>
  );
};

const ListItemWrapper = styled.li`
  list-style: none;
  border: 1px solid ${({ theme }) => theme.colors.makerGrey};
`;

const FlexWrapper = styled.div`
  display: flex;
`;

const Input = styled.input`
  flex: 1;
  height: 2rem;
`;

const Select = styled.select`
  flex: 1;
`;

const UploadButton = styled.button`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.makerLightPink};
  font-weight: bold;
  height: 1.5rem;
`;

const DeleteButton = styled.button`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.makerGreen};
  color: ${({ theme }) => theme.colors.makerWhite};
  font-weight: bold;
  height: 1.5rem;
`;
export default MakerItem;
