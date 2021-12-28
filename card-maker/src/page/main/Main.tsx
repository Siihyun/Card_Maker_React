import React from 'react';
import styled from '@emotion/styled';

const Main = () => {
  return <SomeText>MainPage</SomeText>;
};

const SomeText = styled.div`
  color: ${({ theme }) => theme.colors.makerPink};
  border: 3px solid ${(props) => props.theme.colors.makerBlack};
`;

export default Main;
