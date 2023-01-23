import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["فرانت اند", "بک اند", "موبایل "];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <span className="tagline">
                    به سایت نمونه کار من خوش آمدید
                  </span>
                  <h1>
                    {` برنامه نویس `} <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
                    به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.
                    لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی
                    و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک
                    طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و
                    گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح
                    استفاده می‌کنند.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    اطلاعات بیشتر <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              src={require("../assets/img/header-img.png")}
              alt="header-img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
