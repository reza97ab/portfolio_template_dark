import { Col, Container, Row } from "react-bootstrap";
import MailChimpForm from "./MailChimpForm";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailChimpForm />
          <Col sm={6}>
            <img src={require("../assets/img/logo.png")} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-center">
            <div className="social-icon">
              <a href="#">
                <img src={require("../assets/img/nav-icon1.png")} alt="" />
                <img src={require("../assets/img/nav-icon2.png")} alt="" />
                <img src={require("../assets/img/nav-icon3.png")} alt="" />
              </a>
            </div>
            <p>کلیه حقوق برای من محفوظ است</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
