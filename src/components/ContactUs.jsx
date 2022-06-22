import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceID = 'service_jl1wjff'
        const templateID = 'template_i794zvd'
        const publicKEY = 'k3_c03PZF_WlQK8Y8'

        emailjs.sendForm(serviceID, templateID, form.current, publicKEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset()
    };
    return (
        <div className='contacts'>

                <div className="contact-box">
                    <div className="titles">
                        <h1>Contact Us</h1>
                    </div>

                    <div className="main-box">
                        <div className="left-side">
                            <h3>Drop me a line.I would like to hear from you.</h3>
                        </div>

                        <div className="right-side">
                            <form ref={form} onSubmit={sendEmail} className='form'>
                                <input type="text" name="name" placeholder='Name' /> <br />
                                <input type="text" name='subject' placeholder='Enter your Subject'/><br />
                                <input type="email" name="email" placeholder='Email' /> <br />
                                <textarea name="message"  placeholder='Message'/>
                                <button className='send-btn' type='submit'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ContactUs