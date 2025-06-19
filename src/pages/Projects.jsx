import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import kickstart from "../assets/projects/kickstart.png";
import monmatics from "../assets/projects/monmatics.JPG";
import mtsol from "../assets/projects/mtsol.PNG";
import sas from "../assets/projects/sas.PNG";
import better from "../assets/projects/better.PNG";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Blog Website"
              description="Welcome to Neon-Blog, a dynamic and interactive platform built with Laravel, where creativity meets community. At BlogSphere, users can easily register and join a thriving community of writers and readers. Once registered, users can share their own articles and blogs, showcasing their thoughts, expertise, and stories with the world. Whether you're here to write, read, or engage, BlogSphere offers a seamless experience powered by Laravel's robust framework, ensuring that every post, comment, and profile update happens smoothly and securely."
              ghLink="https://github.com/khrehan882/Blog-Sir-TanShah.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={better}
              isBlog={false}
              title="Bettor Odds"
              description="Better Odds is a clean and user-friendly betting site designed to present information clearly and efficiently. Developed using HTML, CSS, and Bootstrap, the project features a fully responsive layout that adapts seamlessly across devices. The website includes essential sections such as Features, Pricing, Changelog, and a structured Index page, each crafted with clarity and ease of navigation in mind. The focus was on delivering a modern, visually balanced interface using Bootstrap components while maintaining lightweight performance. The project serves as a straightforward and functional frontend solution for showcasing betting-related content with professionalism."
              ghLink="https://github.com/khrehan882/Better_Ods.git"
              demoLink="https://betterodds.vercel.app/"
              demoText="Demo"
              demoIcon={<FaExternalLinkAlt />}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Restaurent Management System"
              description="Introducing Klassy, a sophisticated Restaurant Management System crafted with Laravel, designed to streamline operations and enhance the dining experience. Klassy offers a comprehensive solution for managing every aspect of a restaurant, from the kitchen to the dining table. At the heart of Klassy is a powerful admin panel, where restaurant owners and managers can efficiently handle orders, manage table reservations, curate food menus, and oversee chef assignments. On the customer side. On the customer side, Guests can explore detailed information about the restaurant’s menu, learn more about the chefs behind their favorite dishes, and easily place orders online"
              ghLink="https://github.com/khrehan882/Restaurent-Management-System.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Admin Pannel for Commerce Website"
              description="Welcome to the CommerceControl Admin Panel, the command center of your e-commerce empire meticulously crafted with Laravel. CommerceControl offers a comprehensive and intuitive interface, designed to give you full control over every aspect of your online store, ensuring a smooth and efficient operation. The heart of CommerceControl is the dynamic Dashboard, providing you with a real-time overview of your store’s performance. Monitor sales trends, track orders, and gain insights into customer behavior—all from a single, user-friendly interface. Keep track of customer orders with the comprehensive Orders management system. View order details, update statuses."
              ghLink="https://github.com/khrehan882/E-Commerce-Admin-Pannel.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mtsol}
              isBlog={false}
              title="DeepSOl Technologies"
              description="MustTech Solutions is a technology-driven company specializing in digital transformation and web solutions. As a Frontend Developer, I led the development of their official website, musttechsolutions.com, utilizing a modern React.js framework with a fully component-based architecture. The site features dynamic pages such as Services, Portfolio, About Us, and Contact, each designed with responsiveness and performance in mind. Emphasizing a clean and intuitive UI/UX, I implemented modern design principles and ensured cross-device compatibility for an optimal user experience. Navigation was enhanced through seamless routing using React Router, while functional components and code-splitting techniques were employed to reduce load times and boost overall efficiency."
              ghLink="https://github.com/khrehan882/Deepsol-Technologies.git"
              demoLink="https://deepsol-technologies.vercel.app/"
              demoText="Demo"
              demoIcon={<FaExternalLinkAlt />}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Hostel Management System"
              description="Introducing HostelHub, a streamlined Hostel Management System built with Core PHP and MySQL, designed to enhance the efficiency of hostel operations while providing a seamless experience for all users. HostelHub caters to three key roles: Students, Hostel Managers, and Administrators, each with specific functionalities to ensure smooth management and effective communication. The Administrator has comprehensive control over the hostel system. With the ability to appoint and manage Hostel Managers, the Admin ensures that each hostel is run efficiently. Students benefit from a user-friendly interface that allows them to access their room information, receive updates from Hostel Managers, and stay informed about any changes or announcements. "
              ghLink="https://github.com/khrehan882/Hostel-Management-System-FYP-.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sas}
              isBlog={false}
              title="SAS_Logistics"
              description="SAS Logistics is a modern logistics-focused landing page designed to showcase the company’s services with clarity and visual appeal. As the sole Frontend Developer on this project, I developed the application using React.js, combining static content with dynamic components to ensure a smooth and engaging browsing experience. The site features a clean, responsive layout optimized for both desktop and mobile users, ensuring accessibility across all devices. With a focus on modularity and scalability, I structured the interface using reusable components to allow for easy future enhancements. The design integrates interactive elements to guide users through the logistics solutions offered, reinforcing credibility and professionalism."
              ghLink="https://github.com/khrehan882/SAS-Logistics.git"
              demoLink="https://sas-logistics-iota.vercel.app/"
              demoText="Demo"
              demoIcon={<FaExternalLinkAlt />}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monmatics}
              isBlog={false}
              title="Monmatics (CRM)"
              description="Monmatics is a comprehensive CRM (Customer Relationship Management) platform designed to streamline business operations across various departments. Developed using a modern tech stack, including HTML, CSS, Bootstrap, PHP Laravel, JavaScript, and jQuery. Monmatics offers advanced features like task management, calendar integration, and real-time data synchronization to enhance team productivity and customer engagement. The platform provides customizable dashboards, enabling businesses to track key performance metrics and manage customer interactions effortlessly. With seamless integration capabilities, Monmatics ensures smooth collaboration across different tools and systems, driving operational efficiency."
              ghLink="https://github.com/khrehan882/Monmatics_CRM.git"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects