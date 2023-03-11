const intialState=10;
console.log(intialState)
export const changeTheNumber=(state=intialState,action)=>{
    if(action.type==='increment'){
        return state+1;
    }
    else if(action.type==='decrement'){
        return state-1;
    }
    else{
        return state;
    }
}