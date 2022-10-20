const {createStore ,bindActionCreators,combineReducers,applyMiddleware} =require('redux');
const {createLogger} =require('redux-logger')
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTORE = "CAKE_RESTORE";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTORE = "ICECREAM_RESTORE";

const logger=createLogger();
// logger keep tracking the history 

function cakeOrder(){
 return {
    type:CAKE_ORDERED,
    payload:1
 }

}

function cakeRestock(quantity=0){
  return {
    type:CAKE_RESTORE,
    payload :quantity
  } 
}

function icecreamOrder(){
    return {
       type:ICECREAM_ORDERED,
       payload:1
    }
   
   }
   
   function icecreamRestock(quantity){
     return {
       type:ICECREAM_RESTORE,
       payload :quantity
     } 
   }
   







const initialCakeState={
numOfCake:20
}


const initialIcecreamState={
      numOfIcecream:30
    }
    

const icecreamReducer=(state=initialIcecreamState,action)=>{
   switch(action.type){
   case ICECREAM_ORDERED :
        return {
           ...state,
            numOfIcecream:state.numOfIcecream-1
        } 
    case ICECREAM_RESTORE:
        return {
            ...state ,
            numOfIcecream:state.numOfIcecream+action.payload
        } 
    
     default: return {...state}
   }
}

const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
     case CAKE_ORDERED :
         return {
            ...state,
             numOfCake:state.numOfCake-1
         } 
     case CAKE_RESTORE:
         return {
             ...state ,
             numOfCake:state.numOfCake+action.payload
         } 
 
     
      default: return {...state}
    }
 }
 


const reducer=combineReducers({
    icecream:icecreamReducer,
    cake:cakeReducer})

const {getState,dispatch,subscribe}=createStore(reducer,applyMiddleware(logger));
// subscribe(()=>console.log("updated data is :",getState()));
const action =bindActionCreators({cakeOrder,cakeRestock,icecreamOrder,icecreamRestock},dispatch);

action.icecreamRestock(90);
action.cakeOrder();
action.cakeRestock()
action.icecreamOrder();
