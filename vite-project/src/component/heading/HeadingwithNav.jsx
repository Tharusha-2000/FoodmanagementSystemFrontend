import React, { useState } from 'react';
import styled from 'styled-components';
import image1 from '../../assets/image1.png';
import Footer from '../Footer';
import Nav from '../Nav';
import { HashLink } from 'react-router-hash-link';

// HeadingwithNav Component
const HeadingContainer = styled.div`
 background: rgba(237, 255, 218, 1.0);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5px 110px 75px 110px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 1280px;
  height: 732px;
  flex-shrink: 0;
`;

const HeadingImage = styled.img`
  width: 100%;  /* Makes the image fill its container */
  height: auto;  /* Maintains the aspect ratio */
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  object-fit: cover; /* Ensures the image covers the container without distorting */
  max-height: 80%;  /* Prevents the image from becoming too tall */
  @media (max-width: 768px) {
    height: auto; /* Ensures image height is responsive on smaller screens */
  }
`;

const OverlayText = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
  color: white;
  font-size: 5rem;  /* Adjusted for large screens */
  font-weight: bold;
  text-align: left;
  padding: 10px 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1200px) {
    font-size: 4rem;  /* Slightly smaller font size on medium screens */
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;  /* Smaller font size on small screens */
    top: 5%;  /* Adjust positioning for smaller screens */
    left: 3%;  /* Adjust positioning for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 2rem;  /* Even smaller font size on very small screens */
    top: 3%;  /* Adjust positioning further */
    left: 2%;  /* Adjust positioning further */
  }
`;

const Button = styled.button`
  width: 260px;
  height: auto;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  background-color: #368d1e;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2c6e17;
  }

  @media (max-width: 1200px) {
    font-size: 1.1rem;  /* Slightly smaller button font size on medium screens */
  }

  @media (max-width: 768px) {
    width: 200px;  /* Reduce width of button on small screens */
    font-size: 1rem;  /* Reduce font size */
  }

  @media (max-width: 480px) {
    width: 180px;  /* Further reduce width for very small screens */
    font-size: 0.9rem;  /* Further reduce font size */
  }
`;


const HeadingwithNav = () => {
  
  return (
    <HeadingContainer>
        <Nav/>
      <ImageWrapper>
        <HeadingImage src={image1} alt="Healthy Choices" />
        <OverlayText>
          Fuel Your Body <br />
          With Healthy <br />
          Choices <br />
          <HashLink to="#about">
            <Button>Explore the menu</Button>
          </HashLink>
        </OverlayText>
      </ImageWrapper>
    </HeadingContainer>
  );
};

export default HeadingwithNav;



