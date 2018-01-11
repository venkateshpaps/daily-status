export const userLogging= (user) => {
    console.log("hello", user);
    return {
        type: "USER_LOGIN",
        payload: user
    };
};




