﻿import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

const CategoryBodyContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

const CategoryContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
    }

    & ${CategoryBodyContainer} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

const CategoryItem = ({ category }) => {
  const navigate = useNavigate();

  const { title, imageUrl, route } = category;

  const onNavigateHandler = () => navigate(route);

  return (
    <CategoryContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItem;
