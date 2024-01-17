import { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../contexts/cart.context';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

const Price = styled.span`
  width: 10%;
`;

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button
        type='button'
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={() => addItemToCart(product)}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
