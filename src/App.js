import React, { lazy, Suspense, useReducer, useState } from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
import Loader from './components/Loader';
// import Items from './components/Items';
import { ACTIONS } from './misc/constants';
import { reducer } from './misc/methods';
import { Header, ItemsWrapper } from './styles/element-styling';

const Items = lazy(() => import('./components/Items'));
// const Items = lazy(() => import('./components/Items'));

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

  return (
    <section >
      <Header>Shopping Cart</Header>
      <Form setItemName={setItemName} setPrice={setPrice} setQuantity={setQuantity} items={items} dispatch={dispatch} submit={handleSubmit} setIsDuplicate={setIsDuplicate} isDuplicate={isDuplicate} quantity={quantity} state={{ price: price, name: itemName }} />
      <ItemsWrapper>
        <Suspense fallback={<Loader />}>
          <Items items={items} removeItem={handleRemove} editField={editField} />
        </Suspense>
      </ItemsWrapper>
      <Footer items={items} clearCart={clearCart} />
    </section>
  );
}

export default App;
