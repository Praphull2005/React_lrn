import { useSelector } from "react-redux"

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.cartItems)
    return (
        <div className="max-w-6xl mx-auto font-bold mt-10 text-xl">
            <h1>Cart - {cartItems.length}</h1>
            {
                cartItems.map((item) => (
                    <div className="max-w-5xl mx-auto mt-10">
                        <div className="">
                            <img className="w-40" src={item.image} />
                            <h2 className="font-bold text-2xl">{item.title}</h2>
                            <h4 className="font-bold text-gray-700">{item.description}</h4>
                            <p className="font-bold text-gray-700">{item.rating.rate}</p>
                            <p className="font-bold text-gray-700">{item.price}</p>
                            
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cart