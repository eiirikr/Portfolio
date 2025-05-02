import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Jeric Javier </span>— a passionate
            web developer with a Bachelor of Science in Information Technology
            from Isabela Colleges, Inc., where I was honored with the Best
            Project award for delivering innovative and high-impact work.
            <br />I specialize in building dynamic, responsive web applications
            using the MERN stack (MongoDB, Express.js, React, Node.js), and I'm
            constantly exploring new tools and technologies to stay ahead in the
            fast-paced world of web development. My strengths lie in turning
            complex problems into clean, efficient code and building
            user-focused solutions that make a real difference.
            <br />
            I’m actively seeking opportunities where I can grow, make meaningful
            contributions, and be part of something impactful.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Persistence turns prayers into reality."
          </p>
          <footer className="blockquote-footer">Jeric Javier</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
