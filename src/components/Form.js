import React, { useContext } from 'react'
import { CartContext } from '../misc/CartContext';
import { stateUpdate } from '../misc/methods';
import { Button, DuplicateError, FormWrapper, Input, InputWrapper, Label } from '../styles/form-styling';

const Form = () => {
    const { setItemName, handleSubmit, setPrice, setQuantity, setIsDuplicate, isDuplicate, quantity, price, itemName, setPriceIsZero, priceIsZero } = useContext(CartContext);
    const productQuantity = [1, 2, 3, 4, 5];

    const submit = (event) => {
        event.preventDefault();
        if (price === 0) {
            setPriceIsZero(true);
        }
        else {
            handleSubmit();
        }
    }
    const priceChange = (event) => {
        const priceValue = event.target.value;
        setPrice(priceValue);
        if (parseFloat(priceValue) > 0) {
            setPriceIsZero(false);
        }
        else {
            setPriceIsZero(true);
        }
    }
    const quantityChange = (event) => {
        stateUpdate(event, setQuantity)
    }
    const nameChange = (event) => {
        stateUpdate(event, setItemName)
        setIsDuplicate(false);
    }

    return (
        <>
            <FormWrapper onSubmit={submit}>
                <InputWrapper>
                    <Label htmlFor="itemName">Name</Label><Input id="itemName" color="grey" value={itemName} onChange={nameChange} required placeholder="Item name..." />
                    {isDuplicate ? <DuplicateError>Item already exists</DuplicateError> : ""}
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="itemPrice">Price (R)</Label><Input color="grey" id="itemPrice" type="number" step="0.01" value={price} onChange={priceChange} required />
                    {priceIsZero ? <DuplicateError>Price cannot be zero</DuplicateError> : ""}
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input color="grey" as="select" name="quantity" id="quantity" value={quantity} onChange={quantityChange}>
                        {productQuantity.map((val, index) => {
                            return <option key={index} value={val} >{val}</option>
                        })}
                    </Input>
                </InputWrapper>
                <InputWrapper>
                    <Button color="white" bgColor="green" type="submit" disabled={isDuplicate || priceIsZero}>ADD ITEM</Button>
                </InputWrapper>

            </FormWrapper>
        </>
    )
}

export default Form
