 
const defaultState = {
    name: "testing my reducer"
};


export default function reducer(state = defaultState, action){
    switch(action.type){ 
        case "FETCH" :
        return {...state, name : action.payload.name}
        break
    }

    return state;
     
}