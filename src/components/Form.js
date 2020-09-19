import React, { useContext } from 'react'
import { CartContext } from '../misc/CartContext';
import { Button, DuplicateError, FormWrapper, Input, InputWrapper, Label } from '../styles/form-styling';

const Form = () => {
    const { setItemName, handleSubmit, setPrice, setQuantity, setIsDuplicate, isDuplicate, quantity, price, name } = useContext(CartContext);
    const quantityValue = [1, 2, 3, 4, 5];

    const submit = (e) => {
        e.preventDefault();
        handleSubmit();
    }
    return (
        <>
            <FormWrapper onSubmit={submit}>
                <InputWrapper>
                    <Label htmlFor="itemName">Name</Label><Input id="itemName" color="grey" value={name} onChange={(e) => {
                        setItemName(e.target.value);
                        setIsDuplicate(false);
                    }} required placeholder="Item name..." />
                    {isDuplicate ? <DuplicateError>item already exists</DuplicateError> : ""}
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="itemPrice">Price (R)</Label><Input color="grey" id="itemPrice" type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input color="grey" as="select" name="quantity" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                        {quantityValue.map((val, index) => {
                            return <option key={index} value={val} >{val}</option>
                        })}
                    </Input>
                </InputWrapper>
                <InputWrapper>
                    <Button color="white" bgColor="green" type="submit" disabled={isDuplicate}>ADD ITEM</Button>
                </InputWrapper>

            </FormWrapper>
        </>
    )
}

export default Form
