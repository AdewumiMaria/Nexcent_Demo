import React from "react";

const Login = ({ isLogin }) => {
  return <h1>{isLogin ? "Welcome back" : "please login"}</h1>;
};
export default Login;
