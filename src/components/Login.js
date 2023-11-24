import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import "../style/signup.css";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const history=useNavigate();
  const handleSubmit = (e) => {
    if (validate()) {
      alert("Login successfully");
      history("/appbars/home")
    } else {
      e.preventDefault();
    }
  };
  function validate() {
    let valid = true;
    if (email === "") {
      setEmailError("Please enter an email address.");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setEmailError("Invalid Email Address");
      valid = false;
    } else {
      setEmailError("");
    }
    if (password === "") {
      setPassError("Please enter a password.");
      valid = false;
    } else {
      setPassError("");
    }
    return valid;
  };
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col md="1" xl="2"></Col>
          <Col xl="4" lg="5" md="2">
            <Image
              className="mt-2 d-none d-lg-block"
              src={require("../style/login.png")}
              alt="login"
              fluid
            />
          </Col>
          <Col xl="3" lg="4" md="6">
            <Card className="mt-5">
              <CardBody className="mx-4">
                <div className="text-center">
                  <Image
                    className="my-4 w-50"
                    src={require("../style/download.png")}
                    alt="instagram"
                    fluid
                  ></Image>
                </div>

                <form onSubmit={handleSubmit} className="form">
                  <input
                    type="text"
                    placeholder="Phone Number, username, or email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                  <div className="text-danger">{emailError}</div>
                  <input type="text" placeholder="Password"  value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                  <div className="text-danger">{passError}</div>
                  <Button
                    type="submit"
                    variant="primary"
                    className="mt-2"
                    style={{ width: "100%" }}
                  >
                    Login
                  </Button>
                </form>
                <div className="d-flex align-items-center text-muted mt-3">
                  <p
                    className="text-muted"
                    style={{
                      width: "10rem",
                      borderBottom: "2px solid #dcdcdc",
                      display: "inline-block",
                    }}
                  ></p>
                  <span className="mx-3 pb-3 ">OR</span>
                  <span
                    style={{
                      width: "10rem",
                      borderBottom: "2px solid #dcdcdc",
                      display: "inline-block",
                      marginLeft: "8px",
                      marginBottom: "auto",
                      paddingTop: "12px",
                    }}
                  ></span>
                </div>
                <div className="text-center">
                  <a style={{textDecoration:"none"}} href="https://www.instagram.com/fxcal/disclosure/?next=%2F">
                    <i className="bi bi-facebook"></i> Log in with Facebook
                  </a>
                  <p className="mt-3">Forgot password?</p>
                </div>
              </CardBody>
            </Card>
            <Card className="mt-3">
              <CardBody>
                <p className="mb-3 text-center">
                Don't have an account?
                  <Link to="/" style={{ textDecoration: "none" }}>
                    {" "}
                    Sign up
                  </Link>{" "}
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
