import { Fragment, useContext } from 'react';
import { Outlet, Link } from "react-router-dom";

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './nav.styles'

const Nav =()=>{
  const { currentUser } = useContext(UserContext)
  const { cartState } = useContext(CartContext)

    return (
     <Fragment>
       <NavigationContainer>
         <LogoContainer to='/'>
         <CrwnLogo className='logo'/>
         </LogoContainer>
         <NavLinks>
            <NavLink to='/shop' >
            SHOP
            </NavLink>
            {currentUser ? (
                <NavLink as='span' onClick={signOutUser}>
                  SIGN OUT
                </NavLink>
            ) :(
                <NavLink to='/auth' >
                  SIGN IN
                </NavLink>
            )} 
            <CartIcon />
         </NavLinks>
         { cartState && <CartDropdown /> }
       </NavigationContainer>
       <Outlet />
     </Fragment>
    )
  }

export default Nav;
