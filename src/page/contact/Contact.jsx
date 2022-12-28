

import "./Contact.scss"

function Contact() {
    return ( <div className="contact">
        
        <form className="contact-form">
        <h1 className="title">CONTACT US</h1>

        <div class="spacer"></div>
        
        <div className="input-box">
            <p className="text">Full name</p>
            <input type="text" className="box" name="name" placeholder="ex: Le Phuong" required/>
        </div>
        <div className="input-box">
            <p className="text">
            Phone number
            </p>
            <input type="text" className="box" name="phone" placeholder="0***" required/>
        </div>
        <div className="input-box">
            <p className="text">
            Email
            </p>
            <input type="text" className="box" name="email" placeholder="ex: email@domain.com" required/>
        </div>
        <div className="input-box">
            <p className="text">
            Message
            </p>
            <textarea type="text" className="box message" name="message" placeholder="message..." required/>
            <span className="textmessage"></span>
        </div>
        

        <div className="submit-box">
            <button className="btn">Send</button>
        </div>
        </form>
    </div> );
}

export default Contact;