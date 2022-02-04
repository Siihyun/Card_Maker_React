import styled from '@emotion/styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>Code your dream</FooterText>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  color: ${({ theme }) => theme.colors.makerWhite};
  background-color: ${({ theme }) => theme.colors.makerGreen};
`;

const FooterText = styled.p``;

export default Footer;
