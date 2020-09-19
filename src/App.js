import React, { lazy, Suspense } from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
import Loader from './components/Loader';
import CartContextProvider from './misc/CartContext';
import { Header, ItemsWrapper } from './styles/element-styling';

const Items = lazy(() => import('./components/Items'));

function App() {
  return (
    <section >
      <CartContextProvider>
        <Header>Shopping Cart</Header>
        <Form />
        <ItemsWrapper>
          <Suspense fallback={<Loader />}>
            <Items />
          </Suspense>
        </ItemsWrapper>
        <Footer />
      </CartContextProvider>
    </section>
  );
}

export default App;
