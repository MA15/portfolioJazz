import "./Header.scss"

export default function Header() {
    return (
        <div className="header">
            <div className="wrapper">
                <div className="left">
                   <h1>Matthew Arnett</h1>
                </div>

                <div className="right">
                 <a href="#about" className="aboutme">About</a>
                 </div>

                 <div className="right">
                 <a href="#projects" className="portfolio">Portfolio</a>
                 </div>

                 <div className="right">
                 <a href="#contact" className="contactme">Contact</a>
                 </div>

                 <div className="right">
                 <a href="#resume" className="resume">Resume</a>
                 </div>

            </div>
            
        </div>
    )
}