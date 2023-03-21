import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform your sign up logic here
    nav("/");
    console.log(
      `Username: ${username}, Email: ${email}, Password: ${password}`
    );
  };

  const location = useLocation();

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <span className="text-center mb-4">
          <NavLink
            to={"/"}
            className="m-4"
            style={{
              textDecoration: "none",
              borderBottom: `3px solid ${
                location.pathname === "/" ? "#F81894" : "transparent"
              }`,
              paddingBottom: "5px",
              color:'black'
            }}
            exact={true}
          >
            Login
          </NavLink>
          <NavLink
            to={"/signUp"}
            className="m-4"
            style={{
              textDecoration: "none",
              borderBottom: `3px solid ${
                location.pathname === "/signUp" ? "#F81894" : "transparent"
              }`,
              paddingBottom: "5px",
              color:'black'
            }}
            exact={true}
          >
            Sign Up
          </NavLink>
        </span>{" "}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Control
              style={{ marginTop: "15px", borderRadius: "30px" }}
              type="text"
              placeholder="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Control
              type="email"
              style={{ marginTop: "15px", borderRadius: "30px" }}
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Control
              style={{ marginTop: "15px", borderRadius: "30px" }}
              type="password"
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>
          <Button
            style={{
              backgroundColor: "	#F81894",
              borderRadius: "30px",
              borderColor: "lightpink",
            }}
            type="submit"
            className="w-100 mt-3"
          >
            Sign Up
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default SignupPage;
