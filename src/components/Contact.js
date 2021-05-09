import React from 'react';
import emailjs from 'emailjs-com';
// import Form from 'react-bootstrap/Form'
// import dotenv from 'dotenv';

// dotenv.config()
console.log(process.env)

const Contact = props => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_EMAIL_TEMPLATE, e.target, process.env.REACT_APP_EMAILJS_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert('Message sent')
      e.target.reset()
  }

  return (
        <div>
            <h3>Contact Me Here!</h3>
            <form className=".App-contact-form" onSubmit={sendEmail}>
            {console.log(process.env)}
                <input type="hidden" name="contact_number" />
                <input type="hidden" value="https://www.micahbanschick.com" name="website" />
                <input type="text" placeholder="Subject" name="subject" />
                <br/>   
                <textarea placeholder="Message" name="message" />
                <br/>
                <input type="submit" value="Send" />
            </form>
        </div>

    
  );
}

export default Contact;