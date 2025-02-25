import { h } from 'preact';
import BridgeCore from './BridgeCore';
import STLBundles from './STLBundles';
import './Projects.css';
const Projects = () => {
    return (
        <div class="projects">
            <BridgeCore />
            <STLBundles />
        </div>
    );
};

export default Projects;