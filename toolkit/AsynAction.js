const {createStore ,bindActionCreators,combineReducers,applyMiddleware} =require('redux');


const  initialState={
    loading:false,
    users:[],
    error:""  
}

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED"
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED"
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED"

const fetchUserRequest=()=>{
   return {
    type:FETCH_USERS_REQUESTED
   }

} 


const fetchUserSuccess=(user)=>{
    return {
     type:FETCH_USERS_SUCCEEDED,
     payload:user
    }
 
 } 
 
 
const fetchUserFail=(Error)=>{
    return {
     type:FETCH_USERS_FAILED,
     payload:Error
    }
 
 } 
 
const reducer=(state=initialState,action)=>{

     switch(action.type){
     case FETCH_USERS_REQUESTED:
        return {
            ...state,
            loading:true
        }
     case FETCH_USERS_SUCCEEDED:
        return {
            loading:false,
            user:action.payload,
            error:""
        }
   case FETCH_USERS_FAILED:
    return {
        loading:false,
        users:[],
        error:action.payload
    }

     }

}

const store=createStore(reducer);
