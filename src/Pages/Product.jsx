import React, { useContext, useEffect, useState } from "react";
// import data from "../assets/db.json";
import { ProductCard } from "../components/ProductCard";
import styles from "./Product.module.css";

export const Product = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://products-data-a9d5.onrender.com/products`)
      .then((res) => res.json())
      .then((item) => setItems(item))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.productsContainer}>
      {items.map((e, i) => {
        return (
          <ProductCard
            key={i}
            id={e.id}
            img={e.image}
            description={e.description}
            category={e.category}
            title={e.title}
            price={e.price}
            rating={e.rating.rate}
            item={e}
          />
        );
      })}
    </div>
  );
};
