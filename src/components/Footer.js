import React, { useContext } from 'react'
import { CartContext } from '../misc/CartContext';
import { Button } from '../styles/form-styling';
import { FooterStyle, Total } from './../styles/element-styling'

const Footer = () => {
    const { items, clearCart } = useContext(CartContext);
    const cartTotal = items.reduce((total, { price, quantity }) => {
        return total + price * quantity
    }, 0);

    const itemLength = items.length;

    return (
        <FooterStyle>
            <Total>Total (R): <span>{cartTotal.toFixed(2)}</span></Total>
            <Button bgColor="red" color="white" onClick={clearCart} disabled={itemLength === 0}>CLEAR CART</Button>
        </FooterStyle>
    )
}

export default Footer;
