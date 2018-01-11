
export default function (state = null, action) {
    switch (action.type) {
        case "ADD":
            return [action.payload];
        default:
            return state;
    }
}