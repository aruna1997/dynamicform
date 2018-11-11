import React,{ Component } from "react";
import { connect } from "react-redux";
import SimpleForm from "../Form/SimpleForm";
class EditingPage extends Component
{
    render()
    {
        const id=this.props.location.state.id;
        const data=this.props.data[id]
        console.log('data',this.props.data[id]);
        return <SimpleForm editData={data} id={id} {...this.props}/>
    }
}
function mapStateToProps(state)
{
 const {data}=state;
 return {data};
}
export default connect(mapStateToProps,null)(EditingPage);