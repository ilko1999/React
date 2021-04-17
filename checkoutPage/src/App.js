import React from 'react';
import Products from './components/Products/Products';
import { ProductProvider } from './context/ProductProvider';
import Forms from './components/Forms/Forms';
import './App.css';

function App() {
  return (
    <ProductProvider>
      <div className="wrapper">
        <h1>Checkout Page</h1>
        <Products />
        <Forms />
      </div>
    </ProductProvider>
  );
}

export default App;
