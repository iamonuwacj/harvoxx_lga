import React from 'react'
import './contact.css'
import Header from '../../components/header/Header'
// import heroImg from '../../Images/houseBuild.jpeg'
import fancyImg from '../../Images/fancyImg.jpeg'
import { Dash } from '../../components/horizontalLine/Dash'
import Footer from '../../components/footer/Footer'

const Contact = () => {
    
    return (
        <div>
            <Header />
            <div className='contact-hero'>
                <h2>Contact Us</h2>
            </div>

            <div className="contact-content">
                <div className='contact-row'>
                    <div className="touch">
                        <div className='contact-Img'>
                            <img src={fancyImg} alt="logo" />
                        </div>

                        <div className='contact-header'>
                            <h2>Get In Touch</h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex provident distinctio blanditiis officia nesciunt suscipit consequatur, eos, magni eum quisquam enim labore tenetur, eligendi eaque ipsum. Dolorum corrupti molestias iste?
                            </p>
                        </div>

                        <div className='contact-Img'>
                            <img src={fancyImg} alt="logo" />
                        </div>

                    </div>

                    <form className="contact-form">
                        <div className='form-group'>
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder='Enter your name'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="name">Email Address</label>
                            <input type="email" placeholder='Enter email address'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="name">Subject</label>
                            <input type="text" placeholder='Enter your subject'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="name">Name</label>
                            <textarea name="" id="" rows={10} cols={10} placeholder='Enter your message'></textarea>
                        </div>

                        <button>Submit message</button>
                    </form>
                </div>
            </div>
            <Dash />
            <Footer />
        </div>
    )
}

export default Contact