import { Component } from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

// const About = () =>{
//     return(
//         <div>
//             <Profile name="Praphull" address="Seoni" gmail="praphull2005@gmail.com"/>
//             <ProfileClass name="Rajat" address="Jhasi" gmail="rajataayu@gmail.com"/>
//         </div>
//     )
// }
// export default About;

class About extends Component{
    constructor(){
        super();
    }


    render(){
        return(
            <div>
                <ProfileClass name="Praphull" address="Seoni" gmail="praphull2005@gmail.com"/>
            </div>
        )
    }
}

export default About;