import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiBootstrap,
  SiMysql,
  SiPhp,
  SiLaravel,
  SiOpenai // Assuming you're using a generic AI icon for ChatGPT
} from "react-icons/si";


const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai /> {/* This represents ChatGPT */}
      </Col>
    </Row>
  );
}

export default Techstack;

