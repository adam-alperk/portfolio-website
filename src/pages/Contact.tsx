import Card from "../assets/Card.tsx";
import "../App.css";
import "./Pages.css";
// import AnimatedPage from "../AnimatedPage.tsx";

function Contact() {
  return (
    <div className="BG">
      <div className="SecondPages" id="Contact">
        <div className="Image" />
        <h1 className="SecondHeadings">Contact</h1>
        <div className="Links">
          <a href="/">Home</a>
          <a href="projects">Projects</a>
        </div>
        <div className="Cards" id="ContactCards">
          <Card
            backgroundImage="Card_Ins.png"
            name="Instagram"
            link="https://www.instagram.com/adigoj/"
          />
          <Card
            backgroundImage="Card_Ema.png"
            name="Email"
            link="adam.alperk@gmail.com"
          />
          <Card
            backgroundImage="Card_Lin.png"
            name="LinkedIn"
            link="https://www.linkedin.com/in/adigoj/"
          />
        </div>
        <a href="about" id="About">
          About
        </a>
      </div>
    </div>
  );
}

export default Contact;
