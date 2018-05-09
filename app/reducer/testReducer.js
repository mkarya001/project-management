 
const defaultState = {
   
};


export default function reducer(state = defaultState, action){
    switch(action.type){ 
        case "CHANGE" :
        return {...state, ...action.payload}
        break
    }

    return state;
     
}