import { useEffect, useState } from "react";

const UseGetSingleProduct = (productId) =>{
    const[singleProduct, setSingleProduct] = useState(null);

    useEffect(()=>{
        fetchSingleProduct();
    },[]);

    const fetchSingleProduct = async() =>{
        const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const resData = await data.json();
        setSingleProduct(resData);
    }

    return singleProduct;
};

export default UseGetSingleProduct;