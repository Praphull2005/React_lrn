import { useContext } from "react";
import UserContext from "../utils/UserContext";


const CompoC = () =>{
    const user = useContext(UserContext) //useContext hook
    return(
        <div className="border border-black">
            <h1>CompoC</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default CompoC;