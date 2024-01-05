import Card from "../assets/Card.tsx";
import "../App.css";
import "./Pages.css";
import AudioPlayer from "../assets/AudioPlayer.tsx";
// import AnimatedPage from "../AnimatedPage.tsx";

function Projects() {
  return (
    <div className="BG">
      <div className="SecondPages">
        <div className="Image" />
        <h1 className="SecondHeadings">Projects</h1>
        <div className="Links">
          <a href="/">Home</a>
          <a href="contact">Contact</a>
        </div>
        <div className="Cards">
          <Card
            backgroundImage="Redfall.png"
            name="Redfall Trailer Sound Design"
            link=""
          />
          <Card
            backgroundImage="PaperSamurai2.png"
            name="Paper Samurai"
            link=""
          />
          <Card
            backgroundImage="/Transformers.jpg"
            name="Transformers 2"
            link=""
          />
        </div>
        <div className="AudioPlayers">
          <AudioPlayer
            audioSrc={"/ufo.mp3"}
            artworkSrc={"/BG_1.png"}
            songName={"UFO - Coldplay"}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
