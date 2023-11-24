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
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setuser] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [userError, setUserError] = useState("");
  const history = useNavigate();
  const handleSubmit = (e) => {
    if (validate()) {
      alert("Signup successfully");
      history("/login");
    } else {
      e.preventDefault();
    }
  };
  function validate() {
    let valid = true;
    if (name === "") {
      setNameError("Please enter a name.");
      valid = false;
    } else {
      setNameError("");
    }

    if (email === "") {
      setEmailError("Please enter an email address.");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setEmailError("Invalid Email Address");
      valid = false;
    } else {
      setEmailError("");
    }

    if (pass === "") {
      setPassError("Password cannot be empty.");
      valid = false;
    } else if (pass.length < 8) {
      setPassError("Password must contain at least 8 characters.");
      valid = false;
    } else {
      setPassError("");
    }

    if (user === "") {
      setUserError("Username cannot be empty");
      valid = false;
    } else {
      setUserError("");
    }
    return valid;
  }
  return (
    <>
      <Container>
        <Row>
          <Col xl="4" lg="3" md="3"></Col>
          <Col xl="4" lg="6" md="6">
            <Card className="my-3">
              <CardBody className="mx-4">
                <div className="text-center">
                  <Image
                    className="mt-4 w-50"
                    src={require("../style/download.png")}
                    alt="instagram"
                    fluid
                  ></Image>

                  <p className="text-muted my-3 fw-medium">
                    Sign up to see photos and videos from your friends.
                  </p>
                  <Button variant="primary" className="w-100 mb-3">
                    <i className="bi bi-facebook"></i> Log in with Facebook
                  </Button>
                </div>
                <div className="d-flex align-items-center text-muted">
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
                <form onSubmit={handleSubmit} className="form">
                  <input
                    type="text"
                    placeholder="Mobile Number or Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="text-danger">{emailError}</div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                   <div className="text-danger">{nameError}</div>
                  <input
                    type="text"
                    placeholder="Username"
                    value={user}
                    onChange={(e) => setuser(e.target.value)}
                  />
                   <div className="text-danger">{userError}</div>
                  <input
                    type="text"
                    placeholder="Password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                   <div className="text-danger">{passError}</div>
                  <p className="text-muted text-center mt-3">
                    People who use our service may have uploaded your contact
                    information to Instagram.
                    <a href="https://www.facebook.com/help/instagram/261704639352628">
                      {" "}
                      Learn More
                    </a>
                  </p>
                  <p className="text-muted text-center mt-3">
                    By signing up, you agree to our{" "}
                    <a href="https://help.instagram.com/581066165581870/?locale=en_US">
                      Terms
                    </a>{" "}
                    ,
                    <a href="https://www.facebook.com/privacy/policy">
                      {" "}
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="https://privacycenter.instagram.com/policies/cookies/">
                      Cookies Policy
                    </a>
                    .
                  </p>
                  <Button type="submit" variant="primary" style={{ width: "100%" }}>
                    Sign up
                  </Button>
                </form>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <p className="mb-3 text-center">
                  Have an account?
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    {" "}
                    Login
                  </Link>{" "}
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4"></Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
