import { h, render } from "preact";
import {
  lazy,
  LocationProvider,
  ErrorBoundary,
  Router,
  Route,
} from "preact-iso";
import { Home } from "./pages/Home/index.jsx";
import { NotFound } from "./pages/_404.jsx";
const Contact  = lazy(() => import("./components/Contact/Contact.jsx"));
import Header from "./components/Header/Header.jsx";
import "./style.css";
const Projects = lazy(() => import("./components/Projects/Projects.jsx"));

export function App() {
  return (
    <main>
      <LocationProvider>
        <ErrorBoundary>
          <Header />
          <Router>
            <Home path="/" />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route default component={NotFound} />
          </Router>
        </ErrorBoundary>
      </LocationProvider>
    </main>
  );
}

render(<App />, document.getElementById("app"));
