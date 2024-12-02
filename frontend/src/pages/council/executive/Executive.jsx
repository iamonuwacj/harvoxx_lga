import React from 'react'
import './executive.css'
import Header from '../../../components/header/Header'
import exeImg from '../../../Images/fineBoyBuild.jpeg'
import Faq from '../../../components/faq/Faq'
import {Dash} from '../../../components/horizontalLine/Dash'
import Footer from '../../../components/footer/Footer'


const Executive = () => {
    return (
        <>
            <Header />
            <div className='exe-hero'></div>

            <div className='exe-content'>
                <div className="exeImg">
                    <img src={exeImg} alt="" />
                </div>

                <div className="exe-title">
                    <h2>Title</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum deleniti cupiditate perferendis nostrum esse laborum exercitationem, veniam eos reiciendis beatae delectus vero ipsam consectetur nam, modi aut deserunt quam earum!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam nihil, blanditiis exercitationem omnis iure dolorem laboriosam ea assumenda perferendis, inventore eligendi, beatae impedit consequuntur ab consequatur accusamus dicta laborum.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum libero blanditiis sapiente reprehenderit aut harum quam hic quas nulla possimus saepe esse iusto, exercitationem magnam porro maxime dolor, numquam deleniti!
                    </p>
                </div>
            </div>

            <div className="members">
                <h2>Council Members</h2>
                <div className='council-box'>
                    <div className='box'>
                        <div className="img-box">
                            <img src={exeImg} alt="" />
                        </div>

                        <div className='box-content'>
                            <h3>Title</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem recusandae ea dolorem aperiam provident pariatur in voluptate exercitationem nulla, ducimus accusamus voluptas inventore deleniti quis incidunt corrupti impedit voluptatem maxime?

                            </p>
                        </div>
                    </div>

                    <div className='box'>
                        <div className="img-box">
                            <img src={exeImg} alt="" />
                        </div>

                        <div className='box-content'>
                            <h3>Title</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem recusandae ea dolorem aperiam provident pariatur in voluptate exercitationem nulla, ducimus accusamus voluptas inventore deleniti quis incidunt corrupti impedit voluptatem maxime?

                            </p>
                        </div>
                    </div>

                    

                    
                </div>
            </div>

            <Faq />
            <Dash />
            <Footer />
        </>
    )
}

export default Executive