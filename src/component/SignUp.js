import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ProgressBar from 'react-bootstrap/ProgressBar';

function SignUp() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [pw, setPw] = useState("");
  const onSubmit = (event)=>{
    event.preventDefault();
    console.log("onSubmit!!");
  }
  const onChangePw = (event)=>{ //input
    setPw(event.target.value);
  }
    return (
      <>
      <Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <p>Email</p>
              <Form.Control
                type="email"
                placeholder="email"
                autoFocus
              />
              <p>PW</p>
              <Form.Control
                type="password"
                value={pw}
                onChange={onChangePw}
              />
              <ProgressBar now={60} label={`${60}%`} ></ProgressBar>
              <p>PW Check</p>
              <Form.Control
                type="password"
                
              />
              <p>Nick Name</p>
              <Form.Control
                type="text"
              />
              <p>Profile Img</p>
              <Form.Control
                type="Image"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <form onSubmit={onSubmit}>
            <Button type="submit" variant="secondary" onClick={handleClose}>
              Sign Up 
            </Button>
          </form>
        </Modal.Footer>
      </Modal>
    </>
    );
  }
  
  export default SignUp;
  