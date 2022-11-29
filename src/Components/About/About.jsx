import "./About.css"

function About(){
    return(
        <section className="about" id="about">
            <div className="about-container">
                <div className="about-header">
                    <h3>About</h3>
                </div>
                <div className="about-card">
                    <img src="images/coder.png" alt="coder image" className="about-img" />
                <div>
                    <p className="about-description">Hello! My name is Xavier Julies. I'm a Frontend Web Developer building the Front-end of Websites and Web Applications. I enjoy creating things that live on the internet. Check out some of my work in the Projects section.!
                    <br/>
                    <br/>
                    I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                </div>
                <div>
                    <p className="about-description tech-text">Technologies I have used:</p>
                </div>
                <div className="tech-list">
                    <div className="tech-item">
                        <img src="images/html5.svg" alt="" tooltip="HTML 5" />
                        <p>HTML</p>
                        </div>
                    <div className="tech-item">
                        <img src="images/css3.svg" alt="CSS Icon" />
                        <p>CSS</p>
                        </div>
                    <div className="tech-item">
                        <img src="images/javascript.svg" alt="JavaScript Icon" />
                        <p>Javascript</p>
                        </div>
                    <div className="tech-item">
                        <img src="images/react.svg" alt=" ReactJS Icon" />
                        <p>ReactJS</p>
                        </div>
                    <div className="tech-item">
                        <img src="images/sass.svg" alt="Sass Icon" />
                        <p>Scss</p>
                        </div>
                    <div className="tech-item">
                        <img src="images/git.svg" alt="Git Icon" />
                        <p>Git</p>
                    </div>
                    <div className="tech-item">
                        <img src="images/responsive.svg" alt="Responsive design Icon" className="responsive"/>
                        <p>Responsive</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default About