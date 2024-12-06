import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeItem, clear } = useCart();
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleBuy = () => {
    // Simula una compra exitosa, luego vacía el carrito
    setPurchaseSuccess(true);
    clear();
  };

  return (
    <div className="cart-container">
      <h1>Carrito</h1>

      {cart.length === 0 ? (
        // Cuando el carrito está vacío
        <p className='vacio'>Carrito vacío</p>
      ) : purchaseSuccess ? (
        // Cuando la compra ha sido exitosa
        <div className="success-message">
          <p>¡Compra realizada con éxito!</p>
        </div>
      ) : (
        // Cuando hay productos en el carrito
        <div className="cart-items">
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <h3>{item.title}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price}</p>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h2 className='total'>Total: ${totalPrice}</h2>
        </div>
      )}

      {cart.length > 0 && !purchaseSuccess && (
        <div className="cart-buttons">
          <button onClick={clear}>Vaciar carrito</button>
          <button onClick={handleBuy}>Comprar</button>
        </div>
      )}
    </div>
  );
};

export default Cart;