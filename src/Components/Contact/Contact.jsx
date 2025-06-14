import './Contact.css';
import mail from '../../assets/mail.png';
import location from '../../assets/location.png';
import call from '../../assets/call.png';

import React from 'react'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "51512ecd-0405-4d77-a587-8f06e562823e");

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
    <div className="contact">
      <div className="contact-col">
        <h2>Send a message</h2><br/>
        <p>
          For any inquiries, please contact FutureEdge University:
        </p><br/>
        <div className="contact-col2">
          <div className="contact-info">
            <strong><img src={mail} alt='' className='icons'/></strong> info@futureedgeuniversity.edu<br />
            <strong><img src={call} alt='' className='icons'/></strong> +1 (555) 123-4567<br />
            <strong><img src={location} alt='' className='icons'/></strong> 123 Innovation Drive, Tech City, CA 90001<br/> &nbsp;
          </div>
          <div className="form-info">
            <form className="contact-form" onSubmit={onSubmit}>
              <input type="text" name="name" placeholder="Enter Your Name" required />
              <input type="email" name="email" placeholder="Enter Your Email" required />
              <input type='text' name="contact" placeholder="Enter Your Contact Number" required />
              <textarea name="message" placeholder="Enter Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;