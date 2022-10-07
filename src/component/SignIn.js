import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function SignIn() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <>
      <Button variant="primary" onClick={handleShow}>
        Sign In
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3> Welcome back, Olivia</h3>
          <h6>Welcome back! Please enter your details</h6>
          <Button variant="secondary">
            Login with Google
          </Button>
            <hr></hr>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Email"
                autoFocus
              />
              <br></br>
              <Form.Control
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <div className="loginMid">
              <label className="autoLogin" for="hint">
                {" "}
                <input type="checkbox" id="hint" /> 로그인 유지하기
              </label>
              <div>아이디/비밀번호 찾기</div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sign In 
          </Button>
          <div>Don't have an account? Sign up for free</div>
        </Modal.Footer>
      </Modal>
    </>
    );
  }
  
  export default SignIn;
  