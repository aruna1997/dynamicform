import React,{ Component } from "react";
import { connect } from "react-redux";
import { Switch,Route } from "react-router-dom";
import { setAuthentication } from "./actions";
import SimpleForm from "./Form/SimpleForm.jsx";
import UserListingPage from "./UserListingPage/UserListingPage";
class App extends Component
{
   constructor(props)
   {
       super(props);
       this.state={
           error:false
       }
   }
    handleSubmit=(e)=>{
        e.preventDefault();
        const {email,password}=e.target;
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)))
        {
            this.setState({error:true})
        }
        else
        {
            const data={
                email:email.value,
                password:password.value
            }
            this.props.setAuthentication(data);
        }
    }
    render()
    {
        return <Switch>
                <Route path='/dashboard' component={UserListingPage}/>
                <Route exact path='/' component={SimpleForm}/>
                <Route render={()=>{return <div>No page Found</div>}} />
               </Switch>
        //<Form error={this.state.error} onSubmit={this.handleSubmit} onFocus={this.handleFocus}/>
    }
}
function mapStateToProps(state){
    return {state};
}

export default connect(mapStateToProps,{setAuthentication})(App);