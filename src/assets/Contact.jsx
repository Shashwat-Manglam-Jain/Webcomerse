
import './contact.css'
const Contact = () => {
  return (
    <div><br /><br /><br /><br /><br /><br /><br />
      <h1 className="text ">Contact Us</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.3115118589253!2d77.41957977510744!3d23.304453805750654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69f8561cc753%3A0x1b69b2dbddaca47c!2zUGVvcGxl4oCZcyBNYWxs!5e0!3m2!1sen!2sin!4v1693512707883!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <br /><br /><br /><br />
<div className="whole">
  <form action="https://formspree.io/f/mleyngrp" method="Post" className="form">
    <input type="text" placeholder="UserName" name="UserName" autoComplete="off" className='border border-solid border-[#1f2937]' required/>
    <input type="email" placeholder="Email" name="Email" autoComplete="off" className='border border-solid border-[#1f2937]' required/>
    <textarea className="des border border-solid border-[#1f2937]"  placeholder="DESCRIPTION" name="message" cols="30" rows="6"  autoComplete="off" required/>
    <button type="submit" value="send" className="btn bg-[#1f2937]">SUBMIT</button>
    <br /><br />
  </form>
</div>



    </div>
  );
};

export default Contact;
