import styled from '@emotion/styled';

const Footer = () => {
  return <FooterText>Code your dream</FooterText>;
};

const FooterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  color: ${({ theme }) => theme.colors.makerWhite};
  background-color: ${({ theme }) => theme.colors.makerGreen};
`;

export default Footer;
