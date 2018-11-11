import React,{ Component } from "react";
import "./UserListing.css"
import { Link } from "react-router-dom";
class UserCard extends Component{
  render(){
     const {data}=this.props
     //console.log('data arrived',this.props);
     return <div className="card">
                <div className="card-body">
                    <h5 className="card-title">User details</h5>
                    <p className="card-text w-50">Name:&nbsp;{data.username}</p>
                    <p className="card-text w-50">Email:&nbsp;{data.email}</p>
                    <p className="card-text w-50">Gender:&nbsp;{data.gender}</p>
                    <span className="card-text w-50">Language known:&nbsp;</span>
                    <p className="card-text w-50"></p>
                    <ul className="card-text w-50">{
                      data.options.map((j,index)=>{
                          return <li key={index}>{j}</li>
                      })
                    }</ul>
                    <Link to={{ pathname: '/dashboard/Editdetails', state: { id:this.props.id} }} className="btn btn-primary">Edit</Link>
                </div>
               </div>
  }
}
export default UserCard;