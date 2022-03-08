import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { validateAccount } from "../../redux/action/userActions";
import "./Checkout.css";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px"
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2)
    }
  }
}));

export const CheckoutForm = () => {
  const { userMessage, error, errorMessage, loading } = useSelector(
    (state) => ({
      userMessage: state.userState.userMessage,
      error: state.userState.error,
      errorMessage: state.userState.errorMessage,
      loading: state.userState.loading
    })
  );

  const dispatch = useDispatch();
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      validateAccount({
        email,
        name,
        mobile,
        age,
        address
      })
    );
    userMessage && alert("order successful!");
  };

  return (
    <>
      <form className={classes.root} onSubmit={handleSubmit}>
        <h2>Ente your contact details</h2>
        {error && <p id="warning">{errorMessage}</p>}
        {userMessage && <p>{userMessage}</p>}
        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="name"
          variant="filled"
          type="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="mobile"
          variant="filled"
          type="mobile"
          required
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <TextField
          label="age"
          variant="filled"
          type="age"
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <TextField
          label="address"
          variant="filled"
          type="address"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <div>
          <Button type="submit" variant="contained" color="primary">
            Place Order
          </Button>
        </div>
      </form>
    </>
  );
};
