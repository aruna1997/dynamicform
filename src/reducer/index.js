import * as constants from "../Constants";

const data=(state={data:[]},action)=>{

    switch(action.type)
    {
        case constants.SET_AUTHENTICATION:
          const {email,password}=action.payload;
          if(email===password)
          {
            return {...state,isAuthenticated:true}    
          }
          break;
         case constants.SET_DATA:
          let {data}=action;
          let allData = state.data;
          allData.push(data);
          return {...state,allData};
          case constants.UPDATE_DATA:
          let {dat,i}=action;
          console.log('action',dat)
          const ar=state.data[i];
          const {username,gender}=dat;
          let d={...ar,username,gender}
          console.log('final',d);
          state.data[i]=d;
          return {...state};
        default:
        return state;  
    }
}

export default data;