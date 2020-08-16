import React from "react";
import PropTypes from "prop-types";

export default function Login(props) {
  return (
    <nav className="login">
      <h2>Login</h2>
      <p>Sign in to manage your store's inventory</p>
      <button className="github" onClick={() => props.authenticate("Github")}>
        Login with Github
      </button>
      <button
        className="twitter"
        onClick={() => props.authenticate("Facebook")}
      >
        Login with Twitter
      </button>
      <button
        className="facebook"
        onClick={() => props.authenticate("Facebook")}
      >
        Login with Facebook
      </button>
    </nav>
  );
}

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};
