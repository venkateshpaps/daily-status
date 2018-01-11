export const addingUser = (user) => {
    console.log("hello", user);
    return {
        type: "ADD",
        payload: user
    };
};




