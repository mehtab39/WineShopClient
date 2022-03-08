import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addDataToSave,
  getDataFromCart,
  removeDataFromCart
} from "../../redux/action/dataAction";
import { Header } from "../Header/Header";

export const Cart = ($) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(($) => {
    dispatch(getDataFromCart(setData));
  }, []);
  const removeFromCart = (el) => {
    dispatch(removeDataFromCart(el));
    dispatch(getDataFromCart(setData));
    alert("item removed");
  };
  const addToSave = (el) => {
    dispatch(addDataToSave(el));
    dispatch(removeDataFromCart(el));
    dispatch(getDataFromCart(setData));
    alert("item ready to deliever");
  };

  return (
    <>
      <Header />
      {data ? (
        <>
          <div>
            <h1 style={{ "text-align": "center" }}>Your cart</h1>

            <div id="product_container">
              {data.map((el) => {
                return (
                  <div id="maindiv" key={el.id}>
                    <img
                      id="prodimg"
                      style={{ height: "300px", top: "0px", width: "75%" }}
                      src={el.image}
                      alt={el.wine}
                    />
                    <div>
                      <h4>{el.wine}</h4>
                      <p>{el.winery}</p>
                      <p>{el.rating.average}</p>
                      <button
                        id="fav_btn"
                        className="save_btn"
                        onClick={($) => addToSave(el)}
                      >
                        Save
                      </button>{" "}
                      &nbsp;
                      <button
                        id="fav_btn"
                        className="remove_btn"
                        onClick={($) => removeFromCart(el)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        "No item in the cart"
      )}
    </>
  );
};
