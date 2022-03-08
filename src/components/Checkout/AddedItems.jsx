import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDataFromSave } from "../../redux/action/dataAction";

export const AddedItems = ($) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(($) => {
    dispatch(getDataFromSave(setData));
  }, []);
  return data ? (
    <>
      <div>
        <h1 style={{ marginLeft: "66px" }}>Your added items for today!</h1>
        <div id="product_container">
          {data.map((el) => {
            return (
              <div id="checkout-maindiv" key={el._id}>
                <img
                  id="prodimg"
                  style={{ height: "200px", top: "0px", width: "50%" }}
                  src={el.image}
                  alt={el.wine}
                />
                <div>
                  <h4>{el.wine}</h4>
                  <p>{el.winery}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  ) : (
    "No items to deliever, please add from cart page"
  );
};
