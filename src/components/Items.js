import React, { useContext } from 'react'
import { CartContext } from '../misc/CartContext';
import Item from './Item'

const Items = () => {
    const { removeItem, editField, items } = useContext(CartContext);
    const itemsList = items.map((item) => {
        return <Item key={item.id} item={item} removeItem={removeItem} editField={editField} />
    })
    return (
        <>
            {itemsList}
        </>
    )
}

export default Items
