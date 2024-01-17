import { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const CheckoutItemProperty = styled.span`
  width: 23%;
`;

const QuantityValue = styled.span`
  margin: 0 10px;
`;

const Arrow = styled.div`
  cursor: pointer;
`;

const Quantity = styled(CheckoutItemProperty)`
  display: flex;
`;

const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

const CheckoutItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);

  const addItemToCartHandler = () => addItemToCart(cartItem);

  const removeItemFromCartHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <CheckoutItemProperty>{name}</CheckoutItemProperty>
      <Quantity>
        <Arrow onClick={removeItemFromCartHandler}>&#10094;</Arrow>
        <QuantityValue>{quantity}</QuantityValue>
        <Arrow onClick={addItemToCartHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <CheckoutItemProperty>${price}</CheckoutItemProperty>
      <RemoveButton onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
