import React,{ Component } from "react";
import "./SimpleForm.css";
import  _  from "lodash";
import { setFormData,updateData } from "../actions";
import {connect} from "react-redux";
class SimpleForm extends Component{
    
    state={ 
        field:{
            username:'',
            email:'',
            password:'',
            gender:'',
            options:[]
        },
        error:{
        }
    }
    componentDidMount()
    {
        if(this.props.editData)
        {
            this.setState({field:this.props.editData})
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        const {target}=event;
        const error={}
        const data={}
        const options=[]
        for(let i=0;i<target.length;i++)
            {  if(target[i].name==="username"&&target[i].value.trim().length===0)
              {
                    error.username="Field cannot be leave empty"
              }
              else if(target[i].name==="email"&&!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(target[i].value)))
              {
                  error.email="Invalid email"
              }
              else if(target[i].name==="password"&&target[i].value.trim().length<6)
              {
                  error.password="password should be of atleast 6 digits"
              }
              else if(target[i].name==="language1"&&target.language1.checked)
              {
                    options.push(target.language1.value);
              }
              else if(target[i].name==="language2"&&target.language2.checked)
              {
                    options.push(target.language2.value);
              }
              else
              {
                  data[target[i].name]=target[i].value;
              }
        }
        if(!target.language1.checked)
        {
            delete data.language1;
        }
        if(!target.language2.checked)
        {
            delete data.language2;
        }
        if(target.gender.value.trim().length===0)
        {
            error.gender="Required"
        }
        else
        {
            data.gender=target.gender.value;
        }
        if(!(target.language1.checked||target.language2.checked))
        {
            error.language="Required"
        }
        if(options.length!=0)
        {
            data.options=options
        }
        if(_.isEmpty(error)) 
        {
            if(this.props.editData)
            {
              this.props.updateData(data,this.props.id);
              this.props.history.push('/dashboard');
            }
            else{
              this.props.setFormData(data);
             this.props.history.push('/dashboard');
            }
        }
        else{
            this.setState({error})
        }
                   
    }
    handleUpdate=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        const field=this.state.field.name;  
        this.setState(prevState=>({field:{
            ...prevState.field,
            [name]:value}}))
    }
    isAvailable(val){
        console.log("called",val);
        this.state.field.options.find(val)   
        return true;
    }
    render()
    {
     console.log(this.state);
        return (<div className="container">
                    <h2>Form</h2>
                        <form onSubmit={this.handleSubmit}>
                        <div className="form-group col-xs-5">
                                <label>Name:</label>
                                <input type="text" className="form-control" name="username" placeholder="Enter Name" value={this.state.field.username} onChange={this.handleUpdate} />
                                <div className="error-block">{this.state.error.username}</div>
                            </div>
                            <div>{this.props.editData?null:<div className="form-group col-xs-5">
                                <label>Email:</label>
                                <input type="email"
                                 className="form-control"
                                 name="email"
                                 placeholder="Enter email" 
                                 value={this.state.field.email}
                                 onChange={this.handleUpdate}
                                  />
                                <div className="error-block">{this.state.error.email}</div>
                            </div>}
                            </div>
                           <div>{this.props.editData?null:<div className="form-group col-xs-5">
                                <label>Password:</label>
                                <input type="password"
                                 className="form-control"
                                 name="password"
                                 placeholder="Enter password" 
                                 value={this.state.field.password} 
                                 onChange={this.handleUpdate}/>
                                <div className="error-block">{this.state.error.password}</div>
                            </div>}
                            </div>
                            <div className="form-group col-xs-5">
                                <label>language:&nbsp;</label>
                                <input name="language1" type="checkbox" value="java"   
                                 onChange={this.handleUpdate} 
                                 checked={this.state.field.options.find(i=>(i==="java"))}/>java&nbsp;
                                <input name="language2" type="checkbox" value="React"
                                onChange={this.handleUpdate} 
                                checked={this.state.field.options.find(i=>(i==="React"))}/>React
                                <div className="error-block">{this.state.error.language}</div>
                            </div>
                            <div className="form-group col-xs-5">
                                <label>Gender:&nbsp;</label>
                                <input name="gender" 
                                type="radio" 
                                value="male" 
                                onChange={this.handleUpdate} 
                                checked={this.state.field.gender==="male"}
                                />male&nbsp;
                                <input name="gender" 
                                type="radio" 
                                value="female" 
                                onChange={this.handleUpdate} 
                                checked={this.state.field.gender==="female"}/>Female
                                <div className="error-block">{this.state.error.gender}</div>
                            </div>
                            <button type="submit" className="btn btn-dark col-xs-12">Submit</button>
                        </form>
              </div>)
    }
}
function mapStateToProps(state)
{
    const {data}=state;
    return {data};
}
export default connect(mapStateToProps,{setFormData,updateData})(SimpleForm);