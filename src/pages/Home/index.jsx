import Intro from "../../components/Intro/Intro";

import "./style.css";

export function Home({ path }) {
  console.log("path", path);

  return (
    <div class="home">
      <Intro />

    </div>
  );
}
