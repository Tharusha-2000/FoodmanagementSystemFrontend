import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  height: 400px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 12px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 30px 6px rgba(0, 0, 0, 0.4);
    filter: brightness(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin-top: 8px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 8px 12px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-align: center;
  margin-top: 12px;

  &:hover {
    background-color: ${({ theme }) => theme.primary + "CC"};
  }
`;

const ProjectCard = ({ project}) => {
  return (
    <Card >
      <Image src={project.image} alt={project.title} />
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
      <Price>{project.price}</Price>
      <Button>Add to cart</Button>
    </Card>
  );
};

export default ProjectCard;
