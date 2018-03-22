export  function fetch(test) {  
    return {
        type: "FETCH",
        payload: {
            name: test,
            age: 35
        }
    }
}
 