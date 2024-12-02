import React from 'react'
import Header from '../../components/header/Header'
import './about.css'
import missionImg from '../../Images/wowBuildWithHarvoxx.jpeg'
import {Dash }from '../../components/horizontalLine/Dash'
import Footer from '../../components/footer/Footer'

const About = () => {
    return (
        <div>
            <Header />
            <div className='about-wrapper'>
                <h2>About Us</h2>
            </div>

            <div className="about-mission">
                <div className="about-col">
                    <img src={missionImg} alt="" />
                </div>
                <div className="about-col">
                    <h2>Our Mission</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos ipsum quas consectetur ex perspiciatis pariatur esse molestias sint facilis praesentium quae officiis blanditiis fugit ut, earum officia ipsa neque.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto in enim est, placeat voluptatem dolorum non ipsa aut? Magni ipsa provident officia fugiat tenetur corrupti asperiores suscipit minus accusamus nostrum!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia asperiores magnam maiores, ipsam error vel voluptate labore soluta quisquam, non quaerat enim dolor, incidunt velit eius hic earum voluptas.
                    </p>
                </div>

            </div>

            <div className="about-video">
                <video src="" controls>
                    
                </video>
            </div>

            <div className="vision">
                <h2>Our Vision</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iste ipsam fuga soluta ea, necessitatibus, exercitationem facilis tempora aspernatur dolore, itaque eligendi aut commodi saepe? Nihil nostrum enim assumenda quod.
                </p>
            </div>

            <div className='abt-gallery'>
                <div className="gallery-col">
                    <img src={missionImg} alt="" />
                    <p className='first'>Content</p>
                </div>
                <div className="gallery-col">
                    <img src={missionImg} alt="" />
                    <p className='sec'>Content</p>
                </div>
                <div className="gallery-col">
                    <img src={missionImg} alt="" />
                    <p className='last'>Content</p>
                </div>
            </div>

            <Dash />
            <Footer />
        </div>
    )
}

export default About