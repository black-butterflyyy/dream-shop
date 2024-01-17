import { useContext } from 'react';
import styled from 'styled-components';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.util';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/dream-shop-logo.svg';

const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: 150px;
  padding: 25px;
`;

const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>Shop</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutHandler}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to='/auth'>Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
