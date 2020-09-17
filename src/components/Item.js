import React from 'react'
import { ItemStyle } from '../styles/element-styling';
import { Button } from '../styles/form-styling';

const Item = ({ item, removeItem, editField }) => {
    const { name, price, id, quantity } = item;
    return (
        <ItemStyle>
            <div>Name: <span contentEditable suppressContentEditableWarning onBlur={(e) => editField(e.target.innerText, id, "productName")} >{name}</span></div>
            <div>Price(R): <span contentEditable suppressContentEditableWarning onBlur={(e) => editField(e.target.innerText, id, "productPrice")}>{price}</span></div>
            <div>Quantity: <span contentEditable suppressContentEditableWarning onBlur={(e) => editField(parseInt(e.target.innerText), id, "productQuantity")}>{quantity}</span></div>
            <Button color="white" bgColor="orange" onClick={() => removeItem(id)}>REMOVE ITEM</Button>
        </ItemStyle>
    )
}

export default Item
