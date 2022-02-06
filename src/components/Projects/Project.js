import "./Project.scss"
import image from '../../Assets/horiseon.png'
import image2 from '../../Assets/cbPic.png'
import image3 from '../../Assets/DID.png'
import image4 from '../../Assets/LinkedIn.png'
export default function Project() {
    return (
        <div className="projects" id="projects">
            <h1>Portfolio</h1>
            <div className="container">
                <a href="https://ma15.github.io/horiseon/" target="_blank" className="item">
                    <img src={image} alt="Horiseon Image"/>
                    <h3>Horiseon </h3>
                </a>
                <a href="https://alysnyder.github.io/group-1-project/" target="_blank" className="item">
                    <img src={image2} alt="Chef Bartender Image"/>
                    <h3>Chef Bartender</h3>
                </a>
                <a href="hhttps://did-you-see.herokuapp.com/" target="_blank" className="item">
                    <img src={image3} alt="Did You See Image"/>
                    <h3>Did You See </h3>
                </a>
                <a href="https://www.linkedin.com/in/matt-arnett-808537217/" target="_blank" className="item">
                    <img src={image4} alt="LinkedIn Image"/>
                    <h3>LinkedIn </h3>
                </a>
                <a href="https://ma15.github.io/horiseon/" target="_blank" className="item">
                    <img src={image} alt="Horiseon Image"/>
                    <h3>Horiseon </h3>
                </a>
                <a href="https://ma15.github.io/horiseon/" target="_blank" className="item">
                    <img src={image} alt="Horiseon Image"/>
                    <h3>Horiseon </h3>
                </a>
            </div>
        </div>

        

        
    )
}