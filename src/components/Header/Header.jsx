import { h } from 'preact';
// import { a } from 'preact-iso';
import './Header.css';

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;