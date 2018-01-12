export const selectItem = (items) => {
    console.log("You clicked on item: ", items.first);
    return {
        type: 'ITEM_SELECTED',
        payload: items
    }
};
export const modifyItem = (items) => {
    return fetch('http://localhost:3001/orderedItems/' + items.id,
        {
            method: 'PUT',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(items)
        }).then(
        data =>
            ({
                type: "MODIFY_ITEM",
                payload: data.json()
            }),
        error => console.log(error)
        );
};
export const deleteItem = (items) => {
    return fetch('http://localhost:3001/orderedItems/' + items.id,
        {
            method: 'DELETE',
        }).then(
        data =>
            ({
                type: 'DELETE_ITEM',
                payload: items
            }),

        error => console.log(error)
        );
};
export const addItems = (items) => {
    return fetch('http://localhost:3001/orderedItems/',
        {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(items)
        }).then(
        data =>
            ({
                type: "ADD_ITEM",
                payload: data.json()
            }),
        error => console.log(error)
        );
};




