import React from "react";
import { CheckoutForm } from "./CheckoutForm";
import { AddedItems } from "./AddedItems";
import "./Checkout.css";
import { Header } from "../Header/Header";
export const Checkout = () => {
  return (
    <>
      <Header />
      <div className="checkout-main-div">
        <CheckoutForm />
        <AddedItems />
      </div>
    </>
  );
};
