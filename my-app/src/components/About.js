import User from "./Users";
import UserClass from "./UserClass";
import { Component } from "react"; 

class About extends Component{
    constructor(props){
        super(props);
        console.log('parent consturctor')
    }
    componentDidMount(){
        console.log('parent component mount')
    }

    render(){
        console.log('parent render');
        return(
            <div><h1>About class component</h1>
            <User/>
            <UserClass name={"first"} location={"rewari"}/>
            <UserClass name={"second"} location={"rewari"}/></div>
        );
    }
}


export default About;