import * as React from "react"
import '../styles/cv.css'

const Experience = () => {
    return (
        <section>
            <h2>WORK EXPERIENCE</h2>
            <div>
                <h6>MIŚĆON - Przemyski Konwent Gier i Fantastyki</h6>
                <p><b>Chief Technology Officer</b></p>
                <p><i>(May 31, 2020 - Present)</i></p>
                <p>Managing of IT solutions in association. Designing and implementing website using ReactJS.</p>
            </div>
            <div>
                <h6>Stowarzyszenie Umarłych Statutów</h6>
                <p><b>Backend Python Developer</b></p>
                <p><i>(September 01, 2021 - Present)</i></p>
                <p><a href="https://umarlestatuty.pl">https://umarlestatuty.pl/</a></p>
                <p>Designing infrastructure and implementing REST API using Django Rest Framework and PostgresSQL.</p>
            </div>
        </section>
    )
}

const Skills = () => {
    return (
        <section id="skills">
            <h2>SKILLS</h2>
            <div>
                <h6>Python</h6>
                <div className="dot-box">
                    <span className="dot-full"></span>
                    <span className="dot-full"/>
                    <span className="dot-full"/>
                    <span className="dot-full"/>
                    <span className="dot"/>
                </div>
            </div>
            <div>
                <h6>Python</h6>
                <div className="dot-box">
                    <span className="dot-full"/>
                    <span className="dot-full"/>
                    <span className="dot-full"/>
                    <span className="dot-full"/>
                    <span className="dot"/>
                </div>
            </div>
            <div>
                <h6>Python</h6>
                <div className="dot-box">
                    <span className="dot-full"/>
                    <span className="dot-full"/>
                    <span className="dot-full"/>
                    <span className="dot"/>
                    <span className="dot"/>
                </div>
            </div>
            <div>
                <h6>Electronics</h6>
                <div className="dot-box">
                    <span className="dot-full"/>
                    <span className="dot-full"/>
                    <span className="dot"/>
                    <span className="dot"/>
                    <span className="dot"/>
                </div>
            </div>
        </section>
    )
}

const Education = () => {
    return (
        <section>
            <h2>EDUCATION</h2>
            <h6>Zespół Szkół Elektronicznych w Rzeszowie</h6>
            <p>Technik Elektronik</p>
            <p><i>(September 01, 2019 - Present)</i></p>
            <a href="https://elektronik.rzeszow.pl/">https://elektronik.rzeszow.pl</a>
        </section>
    )
}

const Interests = () => {
    return (
        <section>
            <h2>INTERESTS</h2>
            <p><b>Astronautics</b></p>
            <p><b>Guitar</b></p>
            <p><b>Sailing</b></p>
            <p><b>Electronics</b></p>
        </section>
    )
}

const Projects = () => {
    return (
        <section>
            <h2>Projects</h2>
            <h6>GitHub</h6>
            <p>Open source contribution and side projects</p>
            <a href="https://elektronik.rzeszow.pl/">https://elektronik.rzeszow.pl</a>
            <p><i>(September 24, 2017 - Present)</i></p>
        </section>
    )
}

const Languages = () => {
    return (
        <section>
            <h2>LANGUAGES</h2>
            <p><b>Polish</b></p>
            <p>Native</p>
            <p><b>English</b></p>
            <p>Communicative</p>
        </section>
    )
}
const cv = () => {
    return (
        <>
            <header>
                <h1>Mikołaj Data</h1>
                <h6>Python Developer</h6>
                <p>Passionate programmer, with knowledge from many fields, such as electronics, astronautics and
                    physics.
                    Ready to develop his skills and capable to work with variety of technologies. Experienced in team
                    work NGOs member.</p>
            </header>

            <div id="contact">
                <p><b>E-mail: </b> datamikolaj@protonmail.com</p>
            </div>
            <main>
                <div id="container">
                    <Education/>
                    <Skills/>
                    <Experience/>
                    <Projects/>
                    <Languages/>
                    <Interests/>
                </div>
            </main>
        </>
    )
}
export default cv;