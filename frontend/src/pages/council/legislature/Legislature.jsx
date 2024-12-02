import React from 'react'
import './legislature.css'
import Header from '../../../components/header/Header'
import {Dash} from '../../../components/horizontalLine/Dash'
import Faq from '../../../components/faq/Faq'
import Footer from '../../../components/footer/Footer'

import exeImg from '../../../Images/fineBoyBuild.jpeg'

const Legislature = () => {
    return (
        <>
            <Header />
            <div className='le-hero'></div>

            <div className='le-content'>
                <div className="leImg">
                    <img src={exeImg} alt="" />
                </div>

                <div className="le-title">
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
                <div className='council-box-le'>
                    <div className='box-le'>
                        <div className="img-box-le">
                            <img src={exeImg} alt="" />
                        </div>

                        <div className='box-content-le'>
                            <h3>Title</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem recusandae ea dolorem aperiam provident pariatur in voluptate exercitationem nulla, ducimus accusamus voluptas inventore deleniti quis incidunt corrupti impedit voluptatem maxime?

                            </p>
                        </div>
                    </div>

                    <div className='box-le'>
                        <div className="img-box-le">
                            <img src={exeImg} alt="" />
                        </div>

                        <div className='box-content-le'>
                            <h3>Title</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem recusandae ea dolorem aperiam provident pariatur in voluptate exercitationem nulla, ducimus accusamus voluptas inventore deleniti quis incidunt corrupti impedit voluptatem maxime?

                            </p>
                        </div>
                    </div>

                    <div className='box-le'>
                        <div className="img-box-le">
                            <img src={exeImg} alt="" />
                        </div>

                        <div className='box-content-le'>
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

export default Legislature