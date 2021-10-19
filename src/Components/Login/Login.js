import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const history = useHistory();
  //=======================================
  const {
    user,
    signWithGoogle,
    handleUserRegister,
    handleUserLogin,
    handleGithubLogin,
  } = useAuth();
  console.log(user);

  //===================================================
  const redirect_uri = location.state?.from || "./home";

  const handleGitHubLogin = () => {
    handleGithubLogin().then((result) => {
      history.push(redirect_uri);
    });
  };
  //============================
  const handleGoogleLogin = () => {
    signWithGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  //===========================================

  const hanldeEmail = (e) => {
    setEmail(e.target.value);
  };
  const hanldePassword = (e) => {
    setPassword(e.target.value);
  };

  //========================================

  const handleRegister = () => {
    handleUserRegister(email, password);
  };
  const handleLogin = () => {
    handleUserLogin(email, password);
  };
  return (
    <div className="container">
      <Form className="w-50 mx-auto border border-primary rounded-3 m-5 p-4">
        <div>
          {user.email ? <h1>Please Login</h1> : <h2> Please Resgister</h2>}
        </div>

        <div className=" text-start">
          {user.email ? (
            ""
          ) : (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" required placeholder="Enter Name" />
            </Form.Group>
          )}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={hanldeEmail}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>np
            <Form.Control
              onChange={hanldePassword}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
        </div>
        {user.email ? (
          <Button
            onClick={handleLogin}
            variant="outline-primary"
            className=" ms-1"
          >
            Login
          </Button>
        ) : (
          <Button
            onClick={handleRegister}
            variant="outline-primary"
            className=" me-1 btn-sm"
          >
            Register
          </Button>
        )}

        <br />
        <div className="mt-3">
          <i onClick={handleGoogleLogin} class="fab fa-google p-2 fs-4"></i>
          <i onClick={handleGitHubLogin} class="fab fa-github p-2 fs-4"></i>
        </div>
      </Form>
    </div>
  );
};

export default Login;
