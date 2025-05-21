import Intro from "../../components/Intro/Intro";
import Projects from "../../components/Projects/Projects";
import "./style.css";

export function Home({ path }) {
  console.log("path", path);

  return (
    <div class="home">
      <Intro />
      <Projects />
    </div>
  );
}
