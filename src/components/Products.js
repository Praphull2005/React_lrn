export const Products = (Props) => {
    const {image, title, price, rating} = Props.product;
    return(
        <div className="flex flex-col items-center justify-center border border-gray-600 h-88 p-4 hover:bg-gray-200">
            <img className="w-32" src= {image}/>
            <h2>{title}</h2>
            <p>{rating.rate}</p>
            <p>{price}</p>
        </div>
    )
}

export const HOF = (Products) =>{
    return (Props) => {
        return(
            <div className="relative">
                <span className= "absolute -left-2 -top-2 bg-blue-700 text-amber-200 px-4 py-1 rounded-md">Best Seller</span>
                <Products {...Props}/>
            </div>
        )
    }
}