import {ShoppingIcon, CartIconContainer, ItemCount} from './cart-icon.styles'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

const CartIcon = () => {

    const { cartState, setCartState, cartCount } = useContext(CartContext)

    const toggleCartState = () => setCartState(!cartState)
    return (
        <CartIconContainer onClick={toggleCartState}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon