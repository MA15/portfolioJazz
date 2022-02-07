import "./Header.scss"
import "../NavList/navList.js"

export default function Header() {

    const list = [
        {
            id:"about",
            title: "About",
        },
        {
            id:"portfolio",
            title: "Portfolio",
        },
        {
            id:"contact",
            title: "Contact",
        },
        {
            id:"resume",
            title: "Resume",
        },

    ];

    return (
        <div className="header">
            <div className="wrapper">
                <div className="left">
                   <h1>Matthew Arnett</h1>
                </div>


                <div className="right">
                    <ul>
                        
                        <a href="#about" className="aboutme"><li className="active">About</li></a>
                        <a href="#projects" className="portfolio"><li>Portfolio</li></a>
                        <a href="#contact" className="contactme"><li>Contact</li></a>
                        <a href="#resume" className="resume"><li>Resume</li></a>
                    </ul>
                </div>

                {/* <div className="right">
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
                 </div> */}

            </div>
            
        </div>
    )
}