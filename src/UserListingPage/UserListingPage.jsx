import React,{ Component } from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard.jsx";
import { Redirect,Route,Link } from "react-router-dom";
import EditingPage from "../EditingPage/EditingPage.jsx";
class UserListingPage extends Component{
    render()
    {
      if(this.props.data.length!==0)
      {
        if(this.props.location.pathname==='/dashboard')
        return <div>{this.props.data.map((i,index)=>{
            return <UserCard data={i} id={index} key={index}/>
        })}
         <Link to='/' className="btn btn-primary">Register a New User</Link>
        </div>
        else if(this.props.location.pathname==='/dashboard/Editdetails')
        return  <Route path='/dashboard/Editdetails' component={EditingPage}/>
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