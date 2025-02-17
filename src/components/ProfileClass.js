import React from "react";
class ProfileClass extends React.Component {
    constructor() {
        super();
        this.state = {
        userDetails : null
        }
        console.log("ctr is called");
    }

    //API calls are done in this function
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/praphull2005");
        const resData = await data.json();
        console.log(resData);
        this.setState({
            userDetails : resData
        })
        console.log("component did mount");

        this.timer = setInterval(() => {
            console.log("Timer is running");
        }, 1000);
    }

    //when state variable is changed --> this function is called
    componentDidUpdate(){
        console.log("component did update");
    }

    //when we leave this page --> this function is called
    componentWillUnmount(){
        console.log("component will unmount")
        clearInterval(this.timer)
    }

    render() {
        console.log("render method is called");
        if(this.state.userDetails === null){
            return <h1>Loading...</h1>
        }
        return (
            <div style={{"border" : "2px solid black"}}>
                <h1>Class Based Component</h1>
                <h1>Name : {this.state.userDetails.name}</h1>
                <img src= {this.state.userDetails.avatar_url}/>
            </div>
        )
    }
};

export default ProfileClass;