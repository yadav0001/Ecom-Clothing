import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import './product-card.styles.scss'
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'
const ProductCard = ({product}) => {

    const { addItemToCart } = useContext(CartContext)

    const addItemToCartHandler = () => addItemToCart(product)

    const { name, price, imageUrl } = product
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addItemToCartHandler} >Add to card</Button>
        </div>
    )
}

export default ProductCard