import React, { createContext, useEffect, useReducer, useState } from 'react';
import { ACTIONS } from './constants';
import { reducer } from './methods';


export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
    var cartItems = [];
    if (localStorage.getItem("cartItems")) {
        cartItems = JSON.parse(localStorage.getItem("cartItems"));
    }
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [items, dispatch] = useReducer(reducer, cartItems);
    const [isDuplicate, setIsDuplicate] = useState(false);
    const [priceIsZero, setPriceIsZero] = useState(false);

    const handleSubmit = () => {
        const duplicate = items.every((item) => {
            return item.name.toLowerCase().trim() !== itemName.toLowerCase().trim();
        });
        if (duplicate) {
            dispatch({ type: ACTIONS.ADD_ITEM, payload: { itemName, price, quantity, items } });
            setPrice(0);
            setItemName("");
            setQuantity(1);
        }
        else {
            setIsDuplicate(true)
        }
    }

    const handleRemove = (id) => {
        dispatch({ type: ACTIONS.REMOVE_ITEM, payload: { items, id } })

    }

    const clearCart = () => {
        dispatch({ type: ACTIONS.CLEAR_CART, payload: {} })

    }

    const editField = (value, id, productName) => {
        dispatch({ type: ACTIONS.EDIT_FIELD, payload: { id, value, productName } })

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
        <CartContext.Provider value={{ priceIsZero, setPriceIsZero, itemName, items, setItemName, price, setPrice, quantity, setQuantity, isDuplicate, setIsDuplicate, removeItem: handleRemove, handleSubmit, clearCart, editField }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
