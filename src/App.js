import React, { useReducer, useState } from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
import Items from './components/Items';
import { ACTIONS } from './misc/constants';
import { reducer } from './misc/methods';
import { Header, ItemsWrapper } from './styles/element-styling';

function App() {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [items, dispatch] = useReducer(reducer, []);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = () => {
    const duplicate = items.every((item) => {
      return item.name.toLowerCase().trim() !== itemName.toLowerCase().trim();
    });
    if (duplicate) {
      dispatch({ type: ACTIONS.ADD_ITEM, payload: { itemName: itemName, price: price, quantity: quantity, items: items } });
      setPrice(0);
      setItemName("");
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

  return (
    <section >
      <Header>Shopping Cart</Header>
      <Form setItemName={setItemName} setPrice={setPrice} setQuantity={setQuantity} items={items} dispatch={dispatch} submit={handleSubmit} setIsDuplicate={setIsDuplicate} isDuplicate={isDuplicate} state={{ price: price, name: itemName }} />
      <ItemsWrapper>
        <Items items={items} removeItem={handleRemove} editField={editField} />
      </ItemsWrapper>
      <Footer items={items} clearCart={clearCart} />
    </section>
  );
}

export default App;
