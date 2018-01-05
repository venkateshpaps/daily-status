/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */
const data = [
    {
        id: 116595,
        first: "Venkatesh",
        last: "Saiprasath",
        age: 24,
        description: "Venky is a graduate.",
        thumbnail: "http://i.imgur.com/7yUvePI.jpg"
    },
    {
        id: 116593,
        first: "Adarsh",
        last: "Venkatesh",
        age: 22,
        description: "Adarsh is a dragon.",
        thumbnail: "http://i.imgur.com/52xRlm8.png"
    },
    {
        id: 116594,
        first: "Nirmal",
        last: "Pandi",
        age: 22,
        description: "Nirmal is a TT player.",
        thumbnail: "http://i.imgur.com/4EMtxHB.png"
    }
];

export default function (state = data, action) {
    switch (action.type) {
        case 'modify':
            return state.map((n) => {
                if (n.id == action.payload.id) {
                    return action.payload;
                }
                return n;
            });

        case "delete":
            return state.filter(item => { return item.id != action.payload.id })
            console.log(del);
        default:
            return state;
    }
}