const userData = [];
export default function (state = userData, action) {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        default:
            return state;
    }
}