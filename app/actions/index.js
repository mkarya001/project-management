export  function fetch(test) {  
    return {
        type: "FETCH",
        payload: {
            name: test,
            age: 35
        }
    }
}

export  function changeName(test) {  
    console.log(test)
    return {
        type: "CHANGE",
        payload: {
            name: test.username,
            password: test.password
        }
    }
}