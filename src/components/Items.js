import React from 'react'
import Item from './Item'

const Items = ({ items, removeItem, editField }) => {
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
