import { useParams } from "react-router-dom"
import { useContext } from 'react'
import Context from '../components/Context'

export default function ProductDetails() {
    const userData = useContext(Context)
    const params = useParams()
    let productData = null

    switch (params.id) {
        case "143":
            productData = {
                name: 'Hoodie',
                price: 50.00,
                image: require('../assets/images/good-day-to-code.jpg')
            }
            break
        
        case "486":
            productData = {
                name: 'Coffee Mug',
                price: 25.00,
                image: require('../assets/images/eat-sleep-code-repeat.jpg')
            }
            break
        
        default:
            break
    }

    return (
        <>
            <h1>Product Details</h1>
            <p>The product ID is {params.id}</p>
            <p>Cart Items: {userData.cartItems}</p>
            {
                productData != null ?
                <>
                    <img src={productData.image} alt={productData.name} width="400" />
                    <h2>{productData.name} - ${productData.price}</h2>
                </>
                : ''
            }
        </>
    )
}