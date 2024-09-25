import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  // added this form code from Web3forms for when user submit form the succesfull message appear and send to our email by webAPI and accessKey
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "345775b6-5898-43f3-8394-84ebbc5bb2ac");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below.  Your feedback, questions and suggestions are important to us as we strive to provide exceptional service to our community.</p>
        <ul>
          <li><img src={mail_icon} alt="" />explorewithvinu@gmail.com</li>
          <li><img src={phone_icon} alt="" />+91 8788551575</li>
        </ul>     
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name: </label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label>Phone Number: </label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required />
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message'></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
