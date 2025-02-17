import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import {useParams} from "react-router-dom";
import UseGetSingleProduct from "../hooks/useGetSingleProduct";
import { addItems } from "../store/CartSlice";
import { useDispatch } from "react-redux";

const ProductDetails = () => {

    const {productId} = useParams()
    const singleProduct = UseGetSingleProduct(productId);
    const dispatch = useDispatch();

    if(singleProduct == null){
        return <Skeleton/>
    }

    const handleCartItem = () =>{
        dispatch(addItems(singleProduct))
    }

    return (
        <div className="max-w-5xl mx-auto mt-10">
        <div className="">
            <img className="w-40" src={singleProduct.image} />
            <h2 className="font-bold text-2xl">{singleProduct.title}</h2>
            <h4 className="font-bold text-gray-700">{singleProduct.description}</h4>
            <p className="font-bold text-gray-700">{singleProduct.rating.rate}</p>
            <p className="font-bold text-gray-700">{singleProduct.price}</p>
            <button onClick={handleCartItem} className="bg-purple-700 text-white px-4 py-1">Add to Cart</button>
        </div>
        </div>
    )
}

export default ProductDetails;