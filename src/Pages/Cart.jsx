import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";

export const Cart = () => {
  const [cartState, setCartState] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    fetch(`https://products-data-a9d5.onrender.com/cart`)
      .then((res) => res.json())
      .then((item) => setCartState(item))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={styles.cardSection}>
      {cartState.map((e, i) => {
        return (
          <div className={styles.card} key={i}>
            <img src={e.image} />
            <div>
              <h2>{e.title}</h2>
              <p>{e.price}</p>
              <div className={styles.quantityDiv}>
                <button onClick={() => setCount(count + 1)}>+</button>
                <p>{count}</p>
                <button
                  disabled={count == 1}
                  onClick={() => setCount(count - 1)}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <button className={styles.checkOutBtn}>Proceed to CheckOut</button>
    </div>
  );
};
