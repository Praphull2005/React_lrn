import { HOF, Products } from "./Products"
// import { ProductList } from "../utils/constant"
import { useContext, useEffect, useState } from "react"
import Skeleton from "./Skeleton"
import { Link } from "react-router"
import UserContext from "../utils/UserContext"

export const Product_card = () => {
    const [listOfProduct, setListOfProduct] = useState([]) //useState hook
    const [filterProduct, setFilterProduct] = useState({})
    const [searchText, setSearchText] = useState("")

    const user = useContext(UserContext);

    useEffect(() => {
        fetchData();
        const timer = setInterval(() => {
            console.log("Timer is runing in Functional Component");
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://fakestoreapi.com/products");
        const resData = await data.json();
        // console.log(resData);
        setListOfProduct(resData);
        setFilterProduct(resData)
    }

    const HOFComponent = HOF(Products);

    //Conditional Rendering
    // if(listOfProduct.length === 0){
    //     return <Skeleton/>
    // }

    return listOfProduct.length === 0 ? <Skeleton /> : (
        <div>
            <div className="mt-10 flex space-x-10">
                <input className="border border-gray-700 p-2 " type="text"
                    onChange={(e) => { setSearchText(e.target.value) }}
                    value={searchText} />
                <button onClick={() => {
                    const filteredData = listOfProduct.filter((product) => {
                        return product.title.toLowerCase().includes(searchText.toLowerCase());
                    })
                    setFilterProduct(filteredData);
                }} className="bg-purple-700 px-6 py-1 rounded-md text-amber-300 p-2">
                    Search</button>

                <button onClick={() => {
                    filteredProduct = listOfProduct.filter(product => product.rating.rate >= 4);
                    setListOfProduct(filteredProduct)
                }} className="bg-purple-700 px-6 py-1 rounded-md text-amber-300 p-2">
                    Top Rated Products
                </button>
                <input className="border border-black px-2 py-1" type="text" value={user.name} onChange={(e) => user.setUserName(e.target.value)} />
            </div>


            <div className="mt-20 max-w-7xl mx-auto grid grid-cols-5 gap-2">
                {
                    filterProduct.map((product) => {
                        return <Link key={product.id} to={`/product/${product.id}`}>
                            {
                                product.rating.rate >= 4 ? <HOFComponent product={product} /> : <Products product={product} />
                            }

                        </Link>
                    })
                }
            </div>
        </div>
    )
}
