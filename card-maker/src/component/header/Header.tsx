import styled from '@emotion/styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderImg src='/images/logo.png' />
      <HeaderText>Business Card Maker</HeaderText>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.makerGreen};
`;

const HeaderText = styled.h1`
  color: ${({ theme }) => theme.colors.makerWhite};
  font-size: 2rem;
  font-weight: bold;
`;

const HeaderImg = styled.img`
  width: 5rem;
  height: auto;
`;

export default Header;
