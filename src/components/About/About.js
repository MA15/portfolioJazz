import "./About.scss"
import image5 from '../../Assets/portfolioheadshot.png'

export default function About() {
    return (
        <div className="about" id="about">
            <div className="left">
            <img src={image5} alt="headshot photo">
            </img>
           
            </div>
             <div className="right">
            
            <div className="container">
                <h2>About Me</h2>
                <br></br>
            <h4>Matthew Arnett</h4>
            <h4>Miami based Freelance Full-Stack Web Developer</h4>
           </div>
            </div>
            
        </div>
    )
}