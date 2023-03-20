import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import key from "./img/key.png";
import useApi from "../../helpers/api";

function ChangePassword() {
  const [show, setShow] = useState(false);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const api = useApi();

  const changePassword = () => {
    api
      .req({
        method: "PUT",
        url: "/user",
        data: {
          password: password1,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleConfirm = () => {
    if (password1 !== password2) {
      alert("new password and confirm password do not match");
    } else if (password1.length < 8) {
      alert("minimum 8 character");
    } else {
      changePassword();
      alert("success change password");
      handleClose();
    }
  };

  return (
    <>
      <Col sm={5}>
        <h6 style={{ fontWeight: "bold" }}>Password</h6>
        <InputGroup className="mb-3" style={{ position: "relative" }}>
          <Form.Control
            type="password"
            style={{ padding: "15px", paddingLeft: "4rem" }}
            placeholder="********"
          />
          <img
            src={key}
            alt={key}
            style={{
              position: "absolute",
              top: "39%",
              left: "1.8rem",
              width: "16px",
              height: "16px",
            }}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            style={{ color: "#415FE7" }}
            onClick={handleShow}
          >
            Change
          </Button>
        </InputGroup>
      </Col>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "2.5rem" }}>
            Change Password
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="minimum 8 character"
                autoFocus
                style={{ marginBottom: "1rem" }}
                onChange={(e) => setPassword1(e.target.value)}
              />

              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="minimum 8 character"
                autoFocus
                onChange={(e) => setPassword2(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChangePassword;
