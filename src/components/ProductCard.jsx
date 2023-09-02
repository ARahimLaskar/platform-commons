import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { Divider } from "@chakra-ui/react";
import { GoX } from "react-icons/go";
// import axios from "axios";

export const ProductCard = ({
  id,
  img,
  title,
  description,
  category,
  price,
  rating,
  item,
}) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };

  const handleAddToCart = () => {
    fetch(`https://products-data-a9d5.onrender.com/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => console.log(item))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div
        className={styles.product_card}
        // style={blurEffect}
      >
        <img src={img} alt={title} onClick={handleClick} />
        <Divider />
        <h2 onClick={handleClick}>{title}</h2>
        {/* <p>Description of Product 1.</p> */}
        <div className={styles.PriceRatingButton}>
          <div onClick={handleClick} className={styles.PriceRating}>
            <span>Price: $ {price}</span>
            <span>Rating: {rating}</span>
          </div>

          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
      {clicked ? (
        <div id={styles.popup}>
          <img src={img} />
          <div>
            <GoX id={styles.cross} onClick={() => setClicked(false)} />
            <h2>{title}</h2>
            <p>{description}</p>
            <h2>{category}</h2>
            <div id={styles.spanDiv}>
              <span>Price: $ {price}</span>
              <span>Rating: {rating}</span>
            </div>

            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
