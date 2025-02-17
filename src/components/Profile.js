const Profile = (props) =>{
    return(
        <div  style={{"border" : "2px solid black"}}>
            <h1>Name : {props.name}</h1>
            <h1>Address : {props.address}</h1>
            <h1>Gmail : {props.gmail}</h1>
        </div>
    )
}
export default Profile;