import React from 'react'
import './projects.css'
import Header from '../../components/header/Header'
import houseImg from '../../Images/wowBuildWithHarvoxx.jpeg'
import banner from '../../Images/houseBuild.jpeg'
import Faq from '../../components/faq/Faq'
import Footer from '../../components/footer/Footer'
import { Dash } from '../../components/horizontalLine/Dash'

const Projects = () => {
  return (
    <div className='project-container'>
        <Header />
        <div className='project-hero'>
            <h2>
                Projects
            </h2>
        </div>

        <div className='view-project'>
            <h2>
                An Insight on our latest project
            </h2>

            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint consequatur dolorum debitis et eligendi ullam fugiat inventore velit aliquam quaerat. Assumenda at repudiandae voluptatem! Voluptate totam in natus praesentium a.
            </p>
        </div>

        <div className='gallery'>
            <div className='first-img-container'>
                <img src={houseImg} alt="" />
                <p>Latest project</p>
            </div>

            <div className='img-col'>
                <div className="img-container">
                    <img src={houseImg} alt="" />
                    <p>Latest project</p>
                </div>
                <div className="img-container">
                    <img src={houseImg} alt="" />
                    <p>Latest project</p>
                </div>
            </div>
        </div>

        <div className="project-banner">
            <img src={banner} alt="" />
        </div>

        <div className='project-site'>
            <h2>Project Site</h2>

            <div className='box'>
                <div className='img-box'>
                    <img src={banner} alt="" />
                </div>
                <div className='img-box'>
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>

        <Faq />
        <Dash />
        <Footer />
    </div>
  )
}

export default Projects