import Intro from "../../components/Intro/Intro";
import BridgeCore from "../../components/Projects/BridgeCore";
import STLBundles from "../../components/Projects/STLBundles";
import "./style.css";

export function Home({ path }) {
  console.log("path", path);

  return (
    <div class="home">
      <Intro />

      <BridgeCore />
      <STLBundles />
    </div>
  );
}
