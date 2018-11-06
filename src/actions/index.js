import {SET_AUTHENTICATION, SET_DATA,UPDATE_DATA} from "../Constants";

export const setAuthentication=(payload)=>{
    return {
        type:SET_AUTHENTICATION,
        payload 
        }
}
export const setFormData=(data)=>{
    return{
        type:SET_DATA,
        data
    }
}
export const updateData=(dat,i)=>{
    return{
        type:UPDATE_DATA,
        dat,i
    }
}

