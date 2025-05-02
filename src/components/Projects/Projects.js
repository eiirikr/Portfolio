import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import votesystem from "../../Assets/Projects/votesystem.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Developed my personal portfolio website using  React.js, styled with React-Bootstrap and CSS, featuring some of my github projects as well as my resume and technical skills that deployed and hosted in Vercel."
              ghLink="https://github.com/eiirikr/Portfolio"
              demoLink="https://tech-javier-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce"
              description="Developed a full-stack e-commerce application using the MERN stack(MongoDB, Express.js, React.js, Node.js), featuring userauthentication, product browsing, cart management, and a securecheckout process that deployed and hosted in AWS."
              ghLink="https://github.com/eiirikr/E-commerce"
              demoLink="http://zuitt-bootcamp-prod-482-8068-javier.s3-website.us-east-1.amazonaws.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={votesystem}
              isBlog={false}
              title="Votesystem"
              description="Developed a responsive online voting system using HTML5, CSS3,Bootstrap, AJAX, jQuery, PHP, and MySQL. The system is designed forseamless functionality across all devices and browsers, ensuringaccessibility for all users. Additionally, it includes a registered domainname for professional hosting and easy access."
              ghLink="https://github.com/eiirikr/votingsystem"
              demoLink="https://ici-votingsystem.online/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
