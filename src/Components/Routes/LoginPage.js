import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <span className="text-center mb-4">
        <NavLink to={'/'} className=" m-4">Login</NavLink>
        <NavLink to={'/signUp'} className=" m-4">Sign Up</NavLink>


        </span>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mt-3">Login</Button>
        </Form>
      </div>
    </Container>
  );
};

export default LoginPage;
