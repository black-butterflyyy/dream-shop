import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.util';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/dream-shop-logo.svg';
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
