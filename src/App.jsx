import './App.css'
import me from './assets/me.jpeg'

function App() {
    const projects = [
        {
            title: "The World's Most Accurate* AI Text Detector",
            link: 'https://detectai.ossner.com',
            year: 2025
        },
        {
            title: 'Why do Buttons Beep?',
            link: 'https://ossner.github.io/DTMF',
            year: 2024
        },
        {
            title: 'Do you know your MEPs? (outdated)',
            link: 'https://ossner.github.io/meproulette',
            year: 2023
        },
        {
            title: 'RCIT: A Robust Catadioptric-based Instrument 3D Tracking Method For Microsurgical Instruments In a Single-Camera System',
            link: 'https://ieeexplore.ieee.org/abstract/document/10340955',
            year: 2023
        },
        {
            title: 'Algorithms and Datastructures',
            link: 'https://ossner.github.io/TUMGAD/src/routes',
            year: 2020
        },
        {
            title: 'Binary Signal Encoding Visualizer',
            link: 'https://ossner.github.io/signalizer',
            year: 2022
        },
    ]

    const sortedProjects = projects.sort((a, b) => b.year - a.year)

    return (
        <div style={{ maxWidth: '700px', margin: '0 auto', fontFamily: 'sans-serif', padding: '2rem' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <img src={me} alt="me" style={{ width: '400px', borderRadius: '10%', marginRight: '1rem' }} />
                <div>
                    <h1 style={{ margin: 0 }}>Hi, I'm Sebastian</h1>
                    <p style={{ margin: 0 }}>I like to build things that are sometimes useful, mostly not</p>
                </div>
            </div>

            <h2 style={{marginTop:'80px', marginLeft:'50px', fontSize:'2.5em'}}>Projects</h2>
            <div className="timeline">
                {sortedProjects.map((project, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-dot" />
                        <div className="timeline-content">
                            <span className="year">{project.year}</span>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                {project.title}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App
