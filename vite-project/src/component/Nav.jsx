import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { Notifications, MenuRounded, CloseRounded } from "@mui/icons-material";
import { HashLink } from 'react-router-hash-link';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.background};
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  margin-right: auto; /* Pushes the logo to the end */

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: ${({ theme }) => theme.background};
    width: 100%;
    padding: 20px;
    gap: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const StyledLink = styled(HashLink)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 550;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;

  &:hover,
  &.active {
    color: white;
    background: #69AF1E;
    border-radius: 26.542px;
    padding: 8px 16px;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background: ${({ theme }) => theme.card_light};
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 20;
`;

const DropdownItem = styled(HashLink)`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  padding: 8px 12px;
  display: block;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto; /* This will push the buttons to the right corner */

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContactButton = styled(LinkR)`
  color: black;
  display: flex;
  align-items: center;
  border-radius: 26.542px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  border: 1px solid black;

  &:hover {
    color: white;
    background: #69AF1E;
  }
`;

const NotificationIcon = styled(Notifications)`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  cursor: pointer;
`;

const MobileMenuIcon = styled.div`
  display: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 32px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  margin-left: 48px; /* Adjusts the space between logo and navigation */
`;

const BrandName = styled.h1`
  font-family: "Climate Crisis";
  font-size: 48px;
  font-weight: 400;
  line-height: 1;
  background: linear-gradient(90deg, #8BD838 0%, #1E7256 70%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;

  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <NavbarContainer>
      <NavItems isOpen={isNavOpen}>
        <StyledLink smooth to="#about" onClick={() => setIsNavOpen(false)}>About</StyledLink>
        <StyledLink smooth to="#skills" onClick={() => setIsNavOpen(false)}>Skills</StyledLink>
        <StyledLink smooth to="#experience" onClick={() => setIsNavOpen(false)}>Experience</StyledLink>
        <StyledLink smooth to="#projects" onClick={() => setIsNavOpen(false)}>Projects</StyledLink>
        
        {/* Education with Dropdown */}
        <StyledLink 
          smooth
          to="#education"
          onClick={() => {
            toggleDropdown();
            setIsNavOpen(false);
          }}
          className={isDropdownOpen ? 'active' : ''}
        >
          Education
          <ArrowDropDownIcon style={{ marginLeft: '4px' }} />
          <DropdownMenu isOpen={isDropdownOpen}>
            <DropdownItem to="#bachelor">Bachelor's Degree</DropdownItem>
            <DropdownItem to="#highschool">High School</DropdownItem>
            <DropdownItem to="#courses">Online Courses</DropdownItem>
          </DropdownMenu>
        </StyledLink>
      </NavItems>

      <NavLogo to="/">
        <BrandName>FRESHBOWL</BrandName>
      </NavLogo>

      <ButtonContainer>
        <ContactButton to="/contact">
          Contact
        </ContactButton>
        <NotificationIcon />
      </ButtonContainer>

      <MobileMenuIcon onClick={toggleNav}>
        {isNavOpen ? <CloseRounded /> : <MenuRounded />}
      </MobileMenuIcon>
    </NavbarContainer>
  );
};

export default Navbar;




