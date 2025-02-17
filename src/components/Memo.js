import { useMemo, useState } from "react";
import { findNthPrime } from "../utils/constant"

const Memo = () =>{
    const [num, setNum] = useState(0);
    const [isblack, setblack] = useState(false);

    const cachedValue = useMemo(() => findNthPrime(num), [num]);

    return(
        <div className={`${isblack && "bg-gray-900 text-white"} max-w-6xl mx-auto border border-gray-500 mt-10 p-2`}>
            <button onClick={()=> setblack(!isblack)} className="bg-blue-500 px-2 py-1 m-2 rounded-md">Toggle</button>
            <h1 className="font-bold text-xl mt-2">use memo</h1>
            <input className="border border-black mt-2" type="text" value={num} onChange={(e) => setNum(e.target.value)}/>
            <h1>Number - {cachedValue}</h1>
        </div>
    )
}

export default Memo