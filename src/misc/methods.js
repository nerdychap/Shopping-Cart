import { ACTIONS, FIELDS } from "./constants";

export const newItems = (name, price, quantity) => {
    return { id: Date.now(), name: name, price: parseFloat(price), quantity: quantity }
}

export const reducer = (state, action) => {
    const { type, payload: { itemName, price, quantity, id, value, productName, items } } = action;
    switch (type) {
        case ACTIONS.ADD_ITEM:
            return [...state, newItems(itemName, price, quantity)];
        case ACTIONS.REMOVE_ITEM:
            return state.filter((item) => item.id !== id)
        case ACTIONS.CLEAR_CART:
            return [];
        case ACTIONS.EDIT_FIELD:
            return state.map((item) => {
                switch (productName) {
                    case FIELDS.NAME:
                        if (item.id === id) {
                            return { ...item, name: value }
                        }
                        return { ...item }
                    case FIELDS.PRICE:
                        if (item.id === id) {
                            return { ...item, price: value }
                        }
                        return { ...item }
                    case FIELDS.QUANTITY:
                        if (item.id === id) {
                            return { ...item, quantity: value }
                        }
                        return { ...item }
                    default:
                        return 1;
                }


            })
        case ACTIONS.LOCAL_STORAGE:
            return items
        default:
            return state;
    }
}