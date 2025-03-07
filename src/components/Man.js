import { useState } from "react";
import Accordian from "./Accordian";

const Man = () =>{
    const [open, setOpen] = useState(null);

    return(
        <div className="max-w-6xl mx-auto mt-10">
            <h1 className="font-bold text-xl ">Filter Option</h1>
            {
                ["Brand", "Mens", "Women", "Kids"].map((title, index) => (
                    <Accordian key = {index} title={title} 
                        open = {index === open ? true:false}
                        setOpen = {() => setOpen(index)}/>
                ))
            }
            
        </div>
    )
}

export default Man;