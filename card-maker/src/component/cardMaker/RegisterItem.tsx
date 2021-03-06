import React, { useState } from 'react';
import styled from '@emotion/styled';
import { firebaseDB } from '@/service/firebase';
import { ref, set } from 'firebase/database';
import { Card, Cards } from '@/component/mainContent/MainContent';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  cards: Cards;
}

const RegisterItem = ({ cards }: Props) => {
  const defaultState: Card = {
    name: '',
    company: '',
    color: 'light',
    email: '',
    title: '',
    message: '',
  };
  const [card, setCard] = useState<Card>(defaultState);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    const id = uuidv4();
    set(ref(firebaseDB), {
      ...cards,
      [id]: { id, ...card },
    });
    setCard(defaultState);
  };

  return (
    <ListItemWrapper>
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

      <Textarea
        placeholder='Message'
        name='message'
        value={card.message}
        onChange={handleChange}
      />
      <UploadButton>No File</UploadButton>
      <AddButton onClick={handleAdd}>add</AddButton>
    </ListItemWrapper>
  );
};

export const ListItemWrapper = styled.li`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  list-style: none;
  border: 1px solid ${({ theme }) => theme.colors.makerGrey};
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  flex: 1 1 30%;
  padding: 0.5rem;
  height: 2rem;
`;

export const Textarea = styled.textarea`
  flex-basis: 100%;
  height: 3rem;
  padding: 0.5rem;
  resize: vertical;
`;

export const Select = styled.select`
  flex: 1 1 30%;
`;

export const UploadButton = styled.button`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.makerLightGrey};
  font-weight: bold;
  height: 1.5rem;
`;

export const AddButton = styled.button`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.makerGreen};
  color: ${({ theme }) => theme.colors.makerWhite};
  font-weight: bold;
  height: 1.5rem;
`;

export default RegisterItem;
