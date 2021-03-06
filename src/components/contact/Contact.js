import { useState } from "react";
import "./Contact.scss"

export default function Contact() {
const[message,setMessage] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true)
    }

    return (
        <div className="contact" id="contact">
            {/* <div className="left">

            </div> */}
            <div className="right">
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <input  type="text" placeholder="Name"/>
                <input  type="text" placeholder="Email"/>
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send</button>
                {message && <span>Thanks, I look forward to reading your message!</span>}
            </form>
            </div>
        </div>
    )
}