import React,{ Component } from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard.jsx";
import { Redirect } from "react-router-dom";
class UserListingPage extends Component{
    render()
    {
      if(this.props.data.length!=0)
      {
        return <div>{this.props.data.map((i,index)=>{
            return <UserCard data={i} id={index} key={index}/>
        })}</div>
      }
      else
      {
       return  <Redirect to="/"/>
      }
    }
}
function mapStateToProps(state)
{
    const {data}=state;
    return {data}
}
export default connect(mapStateToProps,null)(UserListingPage)