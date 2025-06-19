import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow">Muhammad Rehan </span>
              and I'm from <span className="yellow">Lahore, Pakistan.</span>
              <br />
              <br />
              I graduated with a Bachelor's degree in Software Engineering in 2024.
              <br />
              <br />
              As a
              <b className="yellow"> Laravel </b>developer,
              I enjoy tackling new challenges and continuously expanding my skillset.
              <br />
              <br />I am proficient in
              <b className="yellow"> PHP Laravel, </b>
              as well as have knowledge in programming languages such as C++, ReactJs & SQL,
              <br />
              <br />
              I have a passion for working
              with <b className="yellow">PHP Laravel, MySql,</b> and
              <i>
                <b className="yellow">
                  {" "}
                  modern CSS libraries and frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="yellow"> Bootstrap</b>
              </i>
              <br />
              <br />
              I am also interested in building new
              <i>
                <b className="yellow"> Web Technologies and Products. </b>
              </i>
              <br />

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">

              <li className="social-icons">
                <a
                  href="https://wa.me/923091068515"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <FaWhatsapp />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/khrehan882"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kh-rehan-108982280"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );

}

export default About