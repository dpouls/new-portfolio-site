import "./Intro.css";
import dallin from "../../assets/dallin.jpg";

function Intro() {
  let src = dallin;
  return (
    <div class="intro">
      <img
        id="profile-img"
        src={src}
        
        alt="profile-picture"
      />
      <h1 class="title">Dallin Poulson</h1>
      <p class="description">
        I am passionate about software development and its transformative power in solving complex problems. 
        Through elegant code and innovative solutions, I create applications that deliver exceptional user experiences 
        and drive business value.
      </p>
      <p class="description">
        As a full-stack developer, I specialize in modern web technologies including React, Node.js, and PostgreSQL. 
        I combine technical expertise with a strong focus on clean architecture and scalable solutions to build 
        robust, maintainable applications.
      </p>
      <a href="/projects" style={{color: '#1974D0'}}>See my projects!</a>
    </div>
  );
}

export default Intro;
