export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const modifyUser = (user) => {
    
    return fetch('http://localhost:3001/employee/'+user.id,
    
        {
            method: 'PUT',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(
        data =>
            ({
                type: "MODIFY",
                payload: data.json()
            }),

        error => console.log(error)
        );
};
export const showDetails = (value) => {
    return {
        type: 'SHOW_DETAILS',
        payload: { showContent: value }
    }
};
export const deleteUser = (user) => {
    
    return fetch('http://localhost:3001/employee/'+user.id,
    
        {
            method: 'DELETE',
        }).then(
        data =>
            ({
                type: 'DELETE',
                payload: user
            }),

        error => console.log(error)
        );
};
export const addUser = (user) => {
    return fetch('http://localhost:3001/employee/',
        {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(
        data =>
            ({
                type: "ADD",
                payload: data.json()
            }),

        error => console.log(error)
        );
};




