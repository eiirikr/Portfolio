import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import votesystem from "../../Assets/Projects/votesystem.png";
import socialbook from "../../Assets/Projects/socialbook.png";
import linkedln from "../../Assets/Projects/linkedln.png";
import strawhat from "../../Assets/Projects/strawhat.png";
import storeIt from "../../Assets/Projects/storeIt.png";
import trendingToday from "../../Assets/Projects/trendingToday.png";
import memeGenerator from "../../Assets/Projects/memeGenerator.png";
import nakamaTest from "../../Assets/Projects/nakamaTest.png";
import tenzies from "../../Assets/Projects/tenzies.png";

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trendingToday}
              isBlog={false}
              title="TrendingToday"
              description="Built with React.js for the user interface, Appwrite for backend services, and styled with TailwindCSS, this Movie App lets users browse trending movies, search titles, and explore content using the TMDB API. It features a responsive layout and a sleek, modern design."
              ghLink="https://github.com/eiirikr/TrendingToday"
              demoLink="https://trending-today-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memeGenerator}
              isBlog={false}
              title="Meme Generator"
              description="Developed an interactive web application that allows users to create and customize memes by uploading images or selecting from templates. Implemented dynamic text rendering with options for top and bottom captions. Designed a responsive and user-friendly interface, enabling meme downloads and sharing across devices."
              ghLink="https://github.com/eiirikr/meme-generator"
              demoLink="https://meme-generator-eight-eta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nakamaTest}
              isBlog={false}
              title="Nakama Test"
              description="The Nakama Test is an interactive quiz designed for all One Piece fans. Answer a set of randomized questions and discover your fan level — are you a casual viewer, a loyal fan, or a true Nakama?"
              ghLink="https://github.com/eiirikr/nakama-test"
              demoLink="https://nakama-test.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tenzies}
              isBlog={false}
              title="Tenzies"
              description="Tenzies Game is a fun and interactive web-based dice game where players roll ten dice and try to get all of them to show the same number. Built using React.js, it features a clean user interface, dynamic state updates, and smooth animations for an engaging gaming experience. The project showcases my skills in JavaScript, component-based design, and game logic implementation."
              ghLink="https://github.com/eiirikr/tenzies"
              demoLink="https://tenzies-ten-pi.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
