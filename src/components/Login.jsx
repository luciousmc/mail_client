import { Button } from "@material-ui/core";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { auth, googleProvider } from "../../firebase";
import { login } from "../slices/userSlice";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const { displayName, email, photoURL } = result.user;

      dispatch(
        login({
          displayName,
          email,
          photoURL,
        })
      );
    });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt="Gmail Logo"
        />

        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
