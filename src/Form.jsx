import React,{ Component } from "react";
import Paper from "@material-ui/core/Paper"; 
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import { setAuthentication } from "./actions";

const styles=theme=>({
   
   layout:{
       width:'auto',
       display:'block',
       marginLeft:'auto',
       marginRight:'auto',
       [theme.breakpoints.up(400+theme.spacing.unit*3)]:{
           width:400,   
       }
   },
   paper:{
       marginTop:theme.spacing.unit*7,
       padding:theme.spacing.unit*3
   },
   button:{
       marginTop:theme.spacing.unit*2  
   }

});


class Form extends Component
{
    render()
    {
        console.log('props1',this.props);
    const {classes}=this.props;
        return <React.Fragment>
                 <CssBaseline />
                    <main className={classes.layout}>
                     <Paper className={classes.paper}>
                      <Typography>{this.props.errorMsg}</Typography>
                      <form onSubmit={this.props.onSubmit}>
                        <FormControl required fullWidth error={this.props.error}>
                            <InputLabel>Email</InputLabel>
                            <Input 
                             name="email" 
                             autoComplete="email" 
                             autoFocus/>
                        </FormControl>
                        <FormControl required   margin="normal" fullWidth>
                            <InputLabel>Password</InputLabel>
                            <Input 
                             name="password" 
                             type="password"
                             />
                        </FormControl>
                        <Button 
                         variant="contained" 
                         type="submit" 
                         className={classes.button}>
                        Submit
                        </Button>
                      </form>
                     </Paper>
                    </main> 
        </React.Fragment>
    }
}

function mapStateToProps(state)
{
    const {isAuthenticated}=state;
    return {isAuthenticated};
}
Form.defaultProps={
    isAuthenticated:false
}

export default connect(mapStateToProps,{setAuthentication})(withStyles(styles)(Form));