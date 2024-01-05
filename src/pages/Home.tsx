import "../App.css";
import Rive from "rive-react";
// import AnimatedPage from "../AnimatedPage";

function Home() {
  return (
    <div className="BG">
      <div className="Page">
        <div className="Image" />
        <Rive src="/cursor_tracking2.riv" className="Rive" />
        <h1>adigoj</h1>
        {/* <div className="SubHeadings">
        </div> */}
        <div className="About">
          <a href="/about" className="Button3">
            About
          </a>
        </div>
        <div className="Buttons">
          <a href="/projects" className="Button1">
            Projects
          </a>
        </div>
        <div className="Buttons">
          <a href="/contact" className="Button2">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
