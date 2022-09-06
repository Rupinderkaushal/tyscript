import { Reducer } from "react";

export const initialState= {
    name:"username",
    age:20
};

 export type actionTypes={
    type:"UPDATE_NAME",
    payload:string
} |
{
    type:"UPDATE_AGE",
    payload:number
}


export const reducer =(state:typeof initialState,action:actionTypes)=>{
    if(action.type === "UPDATE_NAME"){
        return {
            ...state,
            name :action.payload
        }
    }
    if(action.type === "UPDATE_AGE"){
        return{
            ...state,
            age:action.payload
        }
    }
    
    return state;
};