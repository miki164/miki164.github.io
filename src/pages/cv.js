import * as React from "react"
import '../styles/cv.css'

const Experience = () => {
    return (
        <section>
            <h2>WORK EXPERIENCE</h2>
            <div>
                <h6>MIŚCON - Przemyski Konwent Gier i Fantastyki</h6>
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
        <section>
            <h2>SKILLS</h2>
            <div id="skills">
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
                    <h6>Git</h6>
                    <div className="dot-box">
                        <span className="dot-full"/>
                        <span className="dot-full"/>
                        <span className="dot-full"/>
                        <span className="dot-full"/>
                        <span className="dot"/>
                    </div>
                </div>
                <div>
                    <h6>Django Rest Framework</h6>
                    <div className="dot-box">
                        <span className="dot-full"/>
                        <span className="dot-full"/>
                        <span className="dot-full"/>
                        <span className="dot"/>
                        <span className="dot"/>
                    </div>
                </div>
                <div>
                    <h6>Linux</h6>
                    <div className="dot-box">
                        <span className="dot-full"/>
                        <span className="dot-full"/>
                        <span className="dot"/>
                        <span className="dot"/>
                        <span className="dot"/>
                    </div>
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
            <a href="https://github.com/miki164/">https://elektronik.rzeszow.pl</a>
            <p><i>(September 24, 2017 - Present)</i></p>
        </section>
    )
}

const Rodo = () => {
    return (
        <footer>
            EN
            <br/>
            I agree to the processing of personal data provided in this document for realising the recruitment
            process
            pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in
            agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016
            on
            the protection of natural persons with regard to the processing of personal data and on the free
            movement of
            such data, and repealing Directive 95/46/EC (General Data Protection Regulation).
            <br/>
            PL
            <br/>
            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu rekrutacji zgodnie z art. 6 ust. 1 lit. a
            Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
            ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
            takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych).
        </footer>
    )
}
const cv = () => {
    return (
        <div>
            <header>
                <h1>Mikołaj Data</h1>
                <h6>Python Developer</h6>
                <p>Passionate programmer, with knowledge from many fields, such as electronics, astronautics and
                    physics.
                    Ready to develop his skills and capable to work with variety of technologies. Experienced in team
                    work NGOs member.</p>
            </header>

            <div id="contact">
                <a href=" mailto: datamikolaj@protonmail.com">Send Mail to me!</a>
            </div>
            <main>
                <div id="container">
                    <Education/>
                    <Skills/>
                    <Experience/>
                    <Projects/>
                    <Interests/>
                </div>
            </main>
            <Rodo/>
        </div>
    )
}
export default cv;