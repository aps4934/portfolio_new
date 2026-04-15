import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling

const App: React.FC = () => {
    return (
        <div className="App">
            <nav className="navbar">
                <h1>My Portfolio</h1>
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <section className="hero">
                <h2>Welcome to My Portfolio</h2>
                <p>I'm a passionate developer specializing in creating amazing web applications.</p>
                <button>Get Started</button>
            </section>

            <section className="projects">
                <h2>Projects Showcase</h2>
                <div className="project-item">Project 1</div>
                <div className="project-item">Project 2</div>
                <div className="project-item">Project 3</div>
                {/* Add your project details here */}
            </section>

            <section className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>CSS</li>
                    {/* Add more skills as needed */}
                </ul>
            </section>

            <section className="contact">
                <h2>Contact Me</h2>
                <p>Email: myemail@example.com</p>
            </section>
        </div>
    );
}

export default App;