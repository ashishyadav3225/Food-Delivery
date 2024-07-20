import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:{
        name:"dummy",
        location:"dummy1"
      },
   count: 0,
      count2: 2,
    };
    console.log(this.props.name + 'child consturctor')
  }

  async componentDidMount(){
   // const data =  await fetch ("xyz");
    //const  json = await data.json();

    // this.setState({
    //   userInfo:JSON,
    // })

   // console.log(this.props.name + "child component mount ")
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    // const {name,location}= this.state.UserInfo;
    
    console.log(this.props.name + "child render ")

    return (
      <div className="user-Card">
        <h1>name:{name}</h1>
        <h2>location:{location}</h2>
        <h1>count:{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count increases
        </button>
        <h2>count2:{count2}</h2>
      </div>
    );
  }
}

export default UserClass;
