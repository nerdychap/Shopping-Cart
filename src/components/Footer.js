import React from 'react'
import { Button } from '../styles/form-styling';
import { FooterStyle, Total } from './../styles/element-styling'

const Footer = ({ items, clearCart }) => {

    const cartTotal = items.reduce((total, { price, quantity }) => {
        return total + price * quantity
    }, 0);

    const itemLength = items.length;

    return (
        <FooterStyle>
            <Total>Total (R): <span>{cartTotal.toPrecision(4)}</span></Total>
            <Button bgColor="red" color="white" onClick={() => clearCart()} disabled={itemLength === 0}>CLEAR CART</Button>
        </FooterStyle>
    )
}

export default Footer;
