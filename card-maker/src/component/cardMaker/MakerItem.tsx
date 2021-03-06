import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Cards } from '../mainContent/MainContent';
import { firebaseDB } from '@/service/firebase';
import { ref, set } from 'firebase/database';
import uploadImage from '@/service/cloudinary';
import { keyframes } from '@emotion/react';

interface Props {
  id: string;
  cards: Cards;
}

const MakerItem = ({ id, cards }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
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

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      setIsLoading(true);
      const file = e.currentTarget.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append(
        'upload_preset',
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET!
      );
      formData.append('api_key', process.env.REACT_APP_CLOUDINARY_API_KEY!);
      const { url } = await uploadImage(formData);
      set(ref(firebaseDB), {
        ...cards,
        [id]: { ...card, url },
      });
      setIsLoading(false);
    }
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
      {!isLoading && (
        <UploadLabel url={card.url} htmlFor={id}>
          {card.url ? card.name : 'No File'}
        </UploadLabel>
      )}
      {isLoading && (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )}
      <UploadButton onChange={handleUpload} type='file' id={id} />
      <DeleteButton onClick={handleDelete}>delete</DeleteButton>
    </ListItemWrapper>
  );
};

type UploadButtonInterface = {
  url?: string;
};

const ListItemWrapper = styled.li`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  border: 1px solid ${({ theme }) => theme.colors.makerGrey};
  margin-bottom: 2rem;
`;

const Input = styled.input`
  flex: 1 1 30%;
  padding: 0.5rem;
  height: 2rem;
`;

const Textarea = styled.textarea`
  flex-basis: 100%;
  height: 3rem;
  padding: 0.5rem;
  resize: vertical;
`;

const Select = styled.select`
  flex: 1 1 30%;
`;

const DeleteButton = styled.button`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.makerGreen};
  color: ${({ theme }) => theme.colors.makerWhite};
  font-weight: bold;
  height: 1.5rem;
`;

const UploadLabel = styled.label<UploadButtonInterface>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ url, theme }) =>
    url ? theme.colors.makerPink : theme.colors.makerLightGrey};
  font-weight: bold;
  height: 1.5rem;
  cursor: pointer;
  font-size: 13px;
  font-family: Arial;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Loading = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.makerLightGrey};
  border-top: 3px solid ${({ theme }) => theme.colors.makerPink};
  animation: ${spin} 2s linear infinite;
`;

const UploadButton = styled.input`
  display: none;
`;

export default MakerItem;
