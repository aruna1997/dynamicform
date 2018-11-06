
  /* username:{
    name:"name",
    type:"text",
    value:"ok"
   },
   email:{
   name:"email",
   type:"email",
   },
   password:{
    name:"password",
    type:"password",
   },
   confirmpassword:{
    name:"confirmPassword",
    type:"password",
   },
   gender:{
    name:"gender",
    type:"radio",
    value:["male","female"]
   },
   language1:{
    name:"language1",
    type:"checkbox",
    value:["java","react"]
   },
   language2:{
    name:"language2",
    type:"checkbox",
    value:"react"
   }
   */
  
  /* renderValue(value,i)
    {
        console.log(value)
        if(value.length!=0)
        {
            value.map((val)=>{
            })
            
        }
    }
    checkname(i)
    {
        if(i.value)
        {
            return <div className="form-group col-xs-5">
            <label className="control-label">{i.name+": "}</label>
            {console.log(i.value)
            }
            <input type={i.type}
                name={i.name}
                value={i.password} 
               />
          </div>   
        }  
        else return <div className="form-group col-xs-5">
        <label className="control-label">{i.name +": "}</label>
        <input type={i.type}
            name={i.name}
            value={i.password} 
           />
      </div>   
    }
    render()
    {
        return(<div>
                 <form>
                    { this.state.fields.map((i,index)=>{
                        return <div>{this.checkname(i)}</div>
                    }) }
                 </form>   
               </div>)
    } */