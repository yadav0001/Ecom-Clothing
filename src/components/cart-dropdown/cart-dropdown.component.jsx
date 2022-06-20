import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import { CartDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {

    const navigate = useNavigate()
    const { cartItems } = useContext(CartContext)
    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)
                    : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartItems>
            <Button onClick={() => navigate('/checkout')}>CHECKOUT</Button>            
        </CartDropdownContainer>
    )
}

export default CartDropdown