import React, { createContext, useEffect, useReducer, useState } from 'react';
import { ACTIONS } from './constants';
import { reducer } from './methods';


export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
    if (localStorage.getItem("cartItems")) {
        var cartItems = JSON.parse(localStorage.getItem("cartItems"));
    }
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [items, dispatch] = useReducer(reducer, cartItems);
    const [isDuplicate, setIsDuplicate] = useState(false);

    const handleSubmit = () => {
        const duplicate = items.every((item) => {
            return item.name.toLowerCase().trim() !== itemName.toLowerCase().trim();
        });
        if (duplicate) {
            dispatch({ type: ACTIONS.ADD_ITEM, payload: { itemName: itemName, price: price, quantity: quantity, items: items } });
            setPrice(0);
            setItemName("");
            setQuantity(1);
        }
        else {
            setIsDuplicate(true)
        }
    }

    const handleRemove = (id) => {
        dispatch({ type: ACTIONS.REMOVE_ITEM, payload: { items: items, id: id } })

    }

    const clearCart = () => {
        dispatch({ type: ACTIONS.CLEAR_CART, payload: {} })

    }

    const editField = (value, id, productName) => {
        dispatch({ type: ACTIONS.EDIT_FIELD, payload: { id: id, value: value, productName: productName } })

    }
    useEffect(() => {

        localStorage.setItem("cartItems", JSON.stringify(items))
    }, [items])
    useEffect(() => {
        if (localStorage.getItem("cartItems")) {
            const cartItems = JSON.parse(localStorage.getItem("cartItems"));
            dispatch({ type: ACTIONS.LOCAL_STORAGE, payload: { items: cartItems } })
        }

    }, [])

    return (
        <CartContext.Provider value={{ itemName: itemName, items: items, setItemName: setItemName, price: price, setPrice: setPrice, quantity: quantity, setQuantity: setQuantity, isDuplicate: isDuplicate, setIsDuplicate: setIsDuplicate, removeItem: handleRemove, handleSubmit: handleSubmit, clearCart: clearCart, editField: editField }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
