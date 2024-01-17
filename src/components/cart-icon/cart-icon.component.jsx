import styled from 'styled-components';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as ShoppingBagSvg } from '../../assets/shopping-bag.svg';

const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ShoppingBagIcon = styled(ShoppingBagSvg)`
  width: 24px;
  height: 24px;
`;

const ItemCount = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
  }
`;

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingBagIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
