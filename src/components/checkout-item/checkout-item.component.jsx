import './checkout-item.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

const CheckoutItem = ({checkoutItem}) => {
    const { name, imageUrl, price, quantity} = checkoutItem
    const { removeItemFromCart, addItemToCart, clearItemFromCart } = useContext(CartContext)

    const addItem = () => addItemToCart(checkoutItem)
    const removeItem = () => removeItemFromCart(checkoutItem)
    const clearItem = () => clearItemFromCart(checkoutItem)

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItem}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItem}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            
            <div className='remove-button' onClick={clearItem}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem