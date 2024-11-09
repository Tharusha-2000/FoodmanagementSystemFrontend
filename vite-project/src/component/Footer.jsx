import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1200px; /* Optional: You can set a maximum width if needed */
  margin: 0 auto;
  background: rgba(237, 255, 218, 0.80);
  padding: 75px 110px 75px 110px;


  @media (max-width: 991px) {
    padding: 50px 30px; /* Adjust padding for smaller screens */
  }

  @media (max-width: 600px) {
    padding: 30px 15px; /* Further adjust padding for very small screens */
  }
`;

const FooterWrapper = styled.div`
  border-radius: 49px;
  background: linear-gradient(90deg, #15493a 0%, #1e5f4d 50%, #15493a 100%); 
 
  display: flex;
  flex-direction: column;
  padding: 20px 5%;
  position: relative;
  min-height: 250px;

  @media (max-width: 991px) {
    padding: 15px 5%;
    min-height: 200px;
  }
`;

const BrandInfoContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  flex-wrap: wrap;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const BrandInfo = styled.div`
  display: flex;
  flex-direction: column;
  font: 400 21px Poppins, sans-serif;
  gap: 6px;
  flex: 1;
  min-width: 200px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const BrandName = styled.h1`
  font-family: "Climate Crisis";
  font-size: 48.197px;
  font-weight: 400;
  line-height: normal;
  background: linear-gradient(90deg, #8BD838 0%, #1E7256 70%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2px;

  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const BrandAddress = styled.p`
  color: #ededed;
  line-height: 24px;
  margin: 2px 0;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.4rem;
  margin-top: 0.3rem;

  a {
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 50px;
    padding: 0.4rem 0.8rem;
    text-decoration: none;
    font-size: 0.9rem;

    &:hover {
      color: #A3FF99;
    }
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 5.9rem; /* Adjusted margin-top to bring it closer */
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 991px) {
    justify-content: flex-start;
    margin-top: 2rem; 
  }
`;

const LinksGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > div {
    display: flex;
    align-items: center; /* Aligns icon and link horizontally */
    gap: 0.5rem; /* Adds space between icon and link */
  }

`;

const StyledLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary || '#A3FF99'};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100%;
  padding-top: 20px;
  border-top: 2px solid #ffffff;
  margin-top: 35px; 
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: 35px;
  margin-bottom: 5px;
`;

const CopyrightTextC = styled.p`
  color: #ededed;
  margin: 0;
  font-size: clamp(14px, 1.3vw, 18px);
  font-family: 'Poppins', sans-serif;
  text-align: center;

  @media (max-width: 991px) {
    text-align: center;
  }
`;

const Icon = styled.img`
  aspect-ratio: 0.85;
  object-fit: contain;
  object-position: center;
  width: 11px;
  border-radius: 1px;
`;

const linksGroup1 = [
  { label: 'Help', url: '#', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4ef0ff4721d0674afce4b602c531f6b0cc7c324eb612da52c995207e4f1afcbf?placeholderIfAbsent=true&apiKey=aec5571253754ab58d785b823b349a00' },
  { label: 'Shop', url: '#', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4ef0ff4721d0674afce4b602c531f6b0cc7c324eb612da52c995207e4f1afcbf?placeholderIfAbsent=true&apiKey=aec5571253754ab58d785b823b349a00' },
  { label: 'Support', url: '#', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4ef0ff4721d0674afce4b602c531f6b0cc7c324eb612da52c995207e4f1afcbf?placeholderIfAbsent=true&apiKey=aec5571253754ab58d785b823b349a00' },
  { label: 'Policies', url: '#', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4ef0ff4721d0674afce4b602c531f6b0cc7c324eb612da52c995207e4f1afcbf?placeholderIfAbsent=true&apiKey=aec5571253754ab58d785b823b349a00' },
];

const linksGroup2 = [
  { label: 'Home', url: '#', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4ef0ff4721d0674afce4b602c531f6b0cc7c324eb612da52c995207e4f1afcbf?placeholderIfAbsent=true&apiKey=aec5571253754ab58d785b823b349a00' },
  { label: 'Menu', url: '#', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4ef0ff4721d0674afce4b602c531f6b0cc7c324eb612da52c995207e4f1afcbf?placeholderIfAbsent=true&apiKey=aec5571253754ab58d785b823b349a00' },
  { label: 'About', url: '#', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4ef0ff4721d0674afce4b602c531f6b0cc7c324eb612da52c995207e4f1afcbf?placeholderIfAbsent=true&apiKey=aec5571253754ab58d785b823b349a00' },
  { label: 'Recipes', url: '#', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4ef0ff4721d0674afce4b602c531f6b0cc7c324eb612da52c995207e4f1afcbf?placeholderIfAbsent=true&apiKey=aec5571253754ab58d785b823b349a00' },
];

function Footer() {
  return (
    <FooterContainer>
    <FooterWrapper>
      <BrandInfoContainer>
        <BrandInfo>
          <BrandName>FRESHBOWL</BrandName>
          <BrandAddress>
            FreshBowl<br />
            456 Orchard Street,<br />
            Greenwood
          </BrandAddress>
          <SocialIcons>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
            <a href="#">Instagram</a>
          </SocialIcons>
        </BrandInfo>

        <FooterLinksWrapper>
        <LinksGroup>
            {linksGroup1.map((link) => (
              <div key={link.label}>
                <Icon loading="lazy" src={link.icon} alt={`${link.label} icon`} />
                <StyledLink href={link.url}>{link.label}</StyledLink>
              </div>
            ))}
          </LinksGroup>
          <LinksGroup>
            {linksGroup2.map((link) => (
              <div key={link.label}>
                <Icon loading="lazy" src={link.icon} alt={`${link.label} icon`} />
                <StyledLink href={link.url}>{link.label}</StyledLink>
              </div>
            ))}
          </LinksGroup>
        </FooterLinksWrapper>
      </BrandInfoContainer>

      <FooterBottom>
        <Logo
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6b31d1417a4ea2d9a0447974047b003c3a1e7b9ca16c808bed3d9a2c86a85ee?placeholderIfAbsent=true&apiKey=aec5571253754ab58d785b823b349a00"
          alt="FreshBowl Logo"
        />
        <CopyrightTextC>
          safenax (pvt) Ltd &copy; 2024 | This site is a demo project for testing purposes only.
        </CopyrightTextC>
      </FooterBottom>
    </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;