import { useState } from "react"
import {object, z} from "zod";

const loginSchema = z.object({
    email : z.string().email('Invalid email address'),
    password : z.string().min(6, 'Password must be atleast 6 characters')
})

const Login = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("")
    const [error, setError] = useState({})

    const [formData, setFormData] = useState({
        email : "",
        password : ""
    })

    const changeHandler = (e) =>{
        const name = e.target.name
        const value = e.target.value

        setFormData({...formData, [name] : value})
    }

    const submitHandler = (e) =>{
        e.preventDefault();

        const result = loginSchema.safeParse(formData);
        if(!result.success){
            const errorField = result.error.formErrors.fieldErrors;
            setError(errorField);
            return;
        }

        console.log(formData)
        
    }
    console.log(error)
    
    return (
        <div className="flex items-center justify-center w-full h-[80vh] bg-[#f0f0f0f0]">
            <form onSubmit={submitHandler} className="flex flex-col gap-10 bg-white p-10 rounded-lg w-[40%]">
                <div className="flex flex-col">
                <input value={formData.email} name="email" onChange={changeHandler} className="border border-gray-500 px-2 py-2" type="email" placeholder="Email"/>
                <span className="text-xs text-red-600">{error.email}</span>
                </div>
                
                <div className="flex flex-col">
                <input value={formData.password} name="password" onChange={changeHandler} className="border border-gray-500 px-2 py-2" type="password" placeholder="Password"/>
                <span className="text-xs text-red-600">{error.password}</span>
                </div>
                <button className="bg-purple-700 px-2 p-2 rounded-md text-white">Login</button>
            </form>
        </div>
    )
}

export default Login