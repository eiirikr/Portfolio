import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import votesystem from "../../Assets/Projects/votesystem.png";
import socialbook from "../../Assets/Projects/socialbook.png";
import linkedln from "../../Assets/Projects/linkedln.png";
import strawhat from "../../Assets/Projects/strawhat.png";
import storeIt from "../../Assets/Projects/storeIt.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few of the projects I’ve built recently.
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
              description="Developed a full-stack e-commerce application using the MERN stack(MongoDB, Express.js, React.js, Node.js), featuring user authentication, product browsing, cart management, and a secure checkout process that deployed and hosted in AWS."
              ghLink="https://github.com/eiirikr/E-commerce"
              demoLink="http://zuitt-bootcamp-prod-482-8068-javier.s3-website.us-east-1.amazonaws.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={votesystem}
              isBlog={false}
              title="Online Voting System"
              description="Developed a responsive online voting system using HTML5, CSS3, Bootstrap, AJAX, jQuery, PHP, and MySQL. The system is designed forseamless functionality across all devices and browsers, ensuring accessibility for all users. Additionally, it includes a registered domain name for professional hosting and easy access, hosted in Netlify."
              ghLink="https://github.com/eiirikr/votingsystem"
              demoLink="https://ici-votingsystem.online/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialbook}
              isBlog={false}
              title="Socialbook"
              description="A fully responsive web application replicating key Facebook features, including user profiles, posts, likes, and comments. Built with HTML and CSS, it mimics Facebook’s interface, showcasing my front-end skills and expertise in web structure and responsive design."
              ghLink="https://github.com/eiirikr/Socialbook"
              demoLink="https://social-javier-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linkedln}
              isBlog={false}
              title="LinkedIn"
              description="A fully responsive LinkedIn-inspired web application built with HTML and CSS. It features user profiles, post feeds, likes, and comments—closely replicating LinkedIn's layout and functionality. This project highlights my front-end development skills and ability to create professional UI/UX designs."
              ghLink="https://github.com/eiirikr/LinkedIn"
              demoLink="https://linkedln-javier-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={strawhat}
              isBlog={false}
              title="Straw Hat's Website"
              description="A fan-made portfolio website dedicated to the Straw Hat Pirates from One Piece. This project showcases each crew member's profile, role, and story, all presented in a clean, responsive design. Built with HTML, CSS, and Bootstrap, it reflects both my love for anime and my skills in front-end web development."
              ghLink="https://github.com/eiirikr/static-app-1"
              demoLink="https://strawhat-javier-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={storeIt}
              isBlog={false}
              title="StoreIt"
              description="A storage management and file sharing platform that lets users effortlessly upload, organize, and share files. Built with the latest Next.js 15 and the Appwrite Node SDK, utilizing advanced features for seamless file management."
              ghLink="https://github.com/eiirikr/JerDrive"
              demoLink="https://store-it-xi-five.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioTemplate2}
              isBlog={false}
              title="Portfolio Template2"
              description="A sleek and fully responsive portfolio template crafted with HTML, CSS, and Bootstrap. Tailored for graphic designers and creative professionals, it provides a polished layout for showcasing work, skills, and contact details. This project reflects my strong design sense and commitment to mobile-first, user-friendly development."
              ghLink="https://github.com/eiirikr/static-portfolio2"
              demoLink="https://portfolio2-javier-projects.vercel.app/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
