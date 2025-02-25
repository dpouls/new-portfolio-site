import "./Intro.css";
import { useState } from "preact/hooks";
import dallinWiz from "../../assets/dallin-wizard.jpg";
import dallin from "../../assets/dallin.jpg";

function Intro() {
  const [src, setSrc] = useState(dallinWiz);

  return (
    <div class="intro">
      <img
        id="profile-img"
        src={src}
        onMouseEnter={() => setSrc(dallin)}
        onMouseLeave={() => setSrc(dallinWiz)}
        alt="profile-picture"
      />
      <h1 class="title">Dallin Poulson</h1>
      <p class="description">
        I've always thought of coding as the closest thing to real-life magic.
        With just a few lines of JavaScript, I can bring ideas to life—building
        systems that automate tasks, create seamless experiences, and solve
        real-world problems.
      </p>
      <p class="description">
        As a full-stack developer, I work with React, Node.js, and PostgreSQL to
        craft digital spells that make technology feel effortless.
      </p>
      <a href="/projects" style={{color: '#1974D0'}}>See my projects!</a>
    </div>
  );
}

export default Intro;
