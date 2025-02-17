import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Navbar = () => {
    const [btnName, setBtnName] = useState("Light");
    const cartItems = useSelector((store) => store.cart.cartItems);

    //case 1-> Empty array dependancy --> only once useEffect called when navbar render
    //case 2-> No array dependancy -->jab jab Navbar render hoga useEffect call hoga
    //case 3-> Pass something in array dependancy -->jab jab jo pass kar rahe vo change hoga tab tab useEffect call
    useEffect(() => {

    }, [btnName])


    const user = useContext(UserContext);

    return (
        <div className="flex justify-between px-20 py-5 shadow-md">
            <h1 className="font-bold text-3xl">AJIO</h1>
            <ul className="flex justify-between w-[60%]">
                <li><Link to="/man">MEN</Link></li>
                <li><Link to="/women">WOMEN</Link></li>
                <li><Link to="/kid">KID</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/grocery">GROCERY</Link></li>
                <li>{user.name}</li>
                <li><Link to="/cart">CART - {cartItems.length}</Link></li>
                <button
                    className="bg-purple-700 px-6 py-1 rounded-md text-amber-300"
                    onClick={() => {
                        btnName === "Light" ? setBtnName("Dark") : setBtnName("Light");
                    }}>{btnName}</button>
            </ul>
        </div>
    )
}

//Default export
export default Navbar;