/** @format */

import { useContext } from "react";
import { Cartcontext } from "../context/Context";
import '../index.css'
import BreadCumb from "../Components/BreadCumb";
const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <>
    <section className='breadcumb-sec'>
    <div className='container'>
    <BreadCumb/> 
    </div>
    </section> 
    <div className="cart ">
       {state.map((item, index) => {
        return (
          
          <div className="card p-4" key={index}> 
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <p>{item.quantity * item.price}</p>
            <div className="quantity">
              <button
                onClick={() => dispatch({ type: "INCREASE", payload: item })}>
                +
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => {
                  if (item.quantity > 1) {
                    dispatch({ type: "DECREASE", payload: item });
                  } else {
                    dispatch({ type: "REMOVE", payload: item });
                  }
                }}>
                -
              </button>
            </div>
            <button onClick={() => dispatch({ type: "REMOVE", payload: item })}>
              x
            </button>
          </div>
        );
      })}
      {state.length > 0 && (
        <div className="total">
          <h2>Total:{total}</h2>
        </div>
      )}
    </div>
  </>  
  );
};

export default Cart;
