import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

import Particle from '../components/Particle';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// Link for direct download (change the file ID as needed)
const resumeLink = `https://drive.google.com/file/d/1FwQDvsp497SBG_2i92AxxKi1_uk_1INF/view?usp=drive_link`;

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={resumeLink} // Update this link to the direct download link
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download Resume
        </Button>
      </Row>

      <Row className="resume">
        <Document file={resumeLink} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </Row>
    </Container>
  );
}

export default Resume;
