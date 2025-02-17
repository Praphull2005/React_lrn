import CompoB from "./CompoB";

const CompoA = () =>{
    // const user = {
    //     name : 'Praphull',
    //     email : 'praphull@gmail.com'
    // }
    return(
        <div>
            <h1>CompoA</h1>
            <CompoB /*user={user}*//>
        </div>
    )
}

export default CompoA;