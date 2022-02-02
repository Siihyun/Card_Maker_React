import React from 'react';
import styled from '@emotion/styled';
import { Cards } from '../mainContent/MainContent';
import { firebaseDB } from '@/service/firebase';
import { ref, set } from 'firebase/database';

interface Props {
  id: string;
  cards: Cards;
}

const MakerItem = ({ id, cards }: Props) => {
  const card = cards[id];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    set(ref(firebaseDB), {
      ...cards,
      [id]: { ...card, [e.target.name]: e.target.value },
    });
  };

  const handleDelete = () => {
    const newObj = { ...cards };
    delete newObj[id];
    set(ref(firebaseDB), newObj);
  };

  return (
    <ListItemWrapper>
      <FlexWrapper>
        <Input
          placeholder='Name'
          name='name'
          value={card.name}
          onChange={handleChange}
        />
        <Input
          placeholder='Company'
          name='company'
          value={card.company}
          onChange={handleChange}
        />
        <Select name='color' value={card.color} onChange={handleChange}>
          <option>Light</option>
          <option>Dark</option>
          <option>Colorful</option>
        </Select>
      </FlexWrapper>
      <FlexWrapper>
        <Input
          placeholder='Title'
          name='title'
          value={card.title}
          onChange={handleChange}
        />
        <Input
          placeholder='Email'
          name='email'
          value={card.email}
          onChange={handleChange}
        />
      </FlexWrapper>
      <FlexWrapper>
        <Textarea
          placeholder='Message'
          name='message'
          value={card.message}
          onChange={handleChange}
        />
      </FlexWrapper>
      <FlexWrapper>
        <UploadButton url={card.url}>
          {card.url ? card.name : 'No File'}
        </UploadButton>
        <DeleteButton onClick={handleDelete}>delete</DeleteButton>
      </FlexWrapper>
    </ListItemWrapper>
  );
};

type UploadButtonInterface = {
  url?: string;
};

const ListItemWrapper = styled.li`
  list-style: none;
  border: 1px solid ${({ theme }) => theme.colors.makerGrey};
  margin-bottom: 2rem;
`;

const FlexWrapper = styled.div`
  display: flex;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  height: 2rem;
`;

const Textarea = styled.textarea`
  flex: 1;
  height: 3rem;
  padding: 0.5rem;
  resize: vertical;
`;

const Select = styled.select`
  flex: 1;
`;

const UploadButton = styled.button<UploadButtonInterface>`
  flex: 1;
  background-color: ${({ url, theme }) =>
    url ? theme.colors.makerPink : theme.colors.makerLightGrey};
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
