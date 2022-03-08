import { useDispatch } from "react-redux";
import { addDataToCart } from "../../redux/action/dataAction";
import "./Home.css";

export const DataContainer = ({ data }) => {
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addDataToCart(item));
    alert(
      "item added to cart, you can check or remove these items from cart page"
    );
  };
  return (
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
            <div id="descDiv">
              <h4>{el.wine}</h4>
              <p>{el.winery}</p>
              <p>{el.rating.average}</p>
              <button id="fav_btn" onClick={($) => addToCart(el)}>
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
