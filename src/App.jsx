import Home from "./Home.jsx";
import Contactt from "./Contact.jsx";
import Profile from "./Profile.jsx";
import Project from "./Project.jsx";
import Skills from "./Skills.jsx";
import "./CSS/App.css";
import "./CSS/index.css";
import "animate.css";
import 'aos/dist/aos.css';

function App() {
  return (
    <div className="main-container">
      <section id="home" className="section">
        <Home />
      </section>
      <section id="profile" className="section">
        <Profile />
      </section>
      <section id="project" className="section">
        <Project />
      </section>
      <section id="skills" className="section">
        <Skills />
      </section>
      <section id="contact" className="section">
        <Contactt />
      </section>
    </div>

  );
}

export default App;
 