import { Alert, Col, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import e from "cors";

const Newsletter = ({ onValidated, status, message }) => {
  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>اشتراک در خبر نامه</h3>
            {status === "sending" && <Alert>در حال ارسال</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ایمیل"
                />
                <button type="submit">کلیک</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Newsletter;
