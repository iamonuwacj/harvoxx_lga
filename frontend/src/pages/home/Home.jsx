import React from 'react'
import Header from '../../components/header/Header'
import './home.css'
import lgaImage from '../../Images/bgBuildWithHarvoxx.jpeg'
import chairmanImg from '../../Images/fineBoyBuild.jpeg'
import houseImg from '../../Images/houseBuild.jpeg'
import roadImg from '../../Images/roadBuild.jpeg'
import { FaArrowRight, FaAngleDoubleRight } from 'react-icons/fa'
import { CiMail } from 'react-icons/ci'
import Faq from '../../components/faq/Faq'
import { Dash }from '../../components/horizontalLine/Dash'
import Footer from '../../components/footer/Footer'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div className='home-container'>
        <Header />
        <div className='hero'>
			<div className='hero-content'>
				<h2>
					Welcome to Our Town
				</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil odio libero laborum blanditiis repellat modi. Dignissimos rem modi sunt, pariatur dicta velit voluptates quia cumque tenetur ea maiores nam sed. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab iste amet doloremque cupiditate eos unde fuga repellendus accusamus hic quisquam deserunt eum, enim cumque dolorem. Vitae illo totam aliquid earum!
				</p>

				<div className='btn-group'>
					<NavLink className="learn">Learn More</NavLink>
					<NavLink className="video">City Video</NavLink>
			</div>
			</div>
        </div>

		<div className='about'>
			<div className='about-row'>

				<div className='col'>
					<div className="about-col">
						<img src={lgaImage} alt="" />
					</div>
					<div className="about-col">
						<h3>About The  LGA</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur neque architecto porro enim alias ut facere quasi fugiat autem in, repellat ad aliquam reiciendis perspiciatis soluta nulla quia. Iusto, quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam optio velit officia doloremque rerum labore quod earum dolorum eveniet ipsam, vitae, ut quos ratione laboriosam reiciendis sequi quibusdam natus.
						</p>
					</div>
				</div>
				

				<div className='col-meet'>
					<div className="about-col">
						<h3>
							Meet the Chairman
						</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iste recusandae laboriosam, voluptatibus quos voluptate facilis pariatur dicta excepturi, illo id dolor fuga? Asperiores a quam, ipsa eius aspernatur commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque odio necessitatibus eaque, neque enim molestias quo impedit. Mollitia reiciendis ea quidem cum deleniti hic cumque quia delectus atque necessitatibus
						</p>
					</div>
					<div className="about-col">
						<img src={chairmanImg} alt="" />
					</div>
				</div>
			</div>
		</div>

		<div className='projects'>
			<div className='heading'>
				<h3>
					Our Latest Project
				</h3>
				<p>
					"Transforming Our Community, One Project at a Time"
				</p>
			</div>

			<div className='project-row'>
				<div className='card'>
					<div className='img-container'>
						<img src={houseImg} alt="" />
					</div>
					<p style={{backgroundColor: "red"}}>In progress</p>
					<div className='tiles'>
						<h3>Title</h3>
						<NavLink >View More</NavLink>
					</div>
				</div>


				<div className='card'>
					<div className='img-container'>
						<img src={houseImg} alt="" />
					</div>
					<p style={{backgroundColor: "red"}}>In progress</p>
					<div className='tiles'>
						<h3>Title</h3>
						<NavLink >View More</NavLink>
					</div>
				</div>


				<div className='card'>
					<div className='img-container'>
						<img src={houseImg} alt="" />
					</div>
					<p style={{backgroundColor: "red"}}>In progress</p>
					<div className='tiles'>
						<h3>Title</h3>
						<NavLink >View More</NavLink>
					</div>
				</div>
			</div>

			<div className='more'>
				<NavLink >Load More <FaArrowRight className='arrow'/></NavLink>
			</div>
		</div>

		<div className='Our-town'>
			<h2>
				Welcome to Our Town
			</h2>
		</div>

		<div className='news'>
			<div className='news-head'>
				<h2>News and Announcement</h2>
				<p>Check on the latest upadte, breaking news and information</p>
			</div>


			<div className="box">
				<div className='img-container'>
					<img src={roadImg} alt="" />
				</div>

				<div className='timeline'>
					
					<a href="mailto:harvoxx" style={{color: "gray"}}><CiMail size={20} style={{color: "green"}}/>Inform</a>
					
					<span>7 hours ago</span>
				</div>

				<div className='update'>
					<h3>Community Update</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quisquam architecto doloribus facilis? Eum blanditiis quis, doloribus enim aperiam iure modi architecto consectetur, perspiciatis vel libero, ipsam tenetur illo nesciunt?
					</p>
				</div>
				<NavLink className={'more'}>Read More <FaAngleDoubleRight /></NavLink>
			</div>


			<div className="box">
				<div className='img-container'>
					<img src={roadImg} alt="" />
				</div>

				<div className='timeline'>
					
					<a href="mailto:harvoxx" style={{color: "gray"}}><CiMail size={20} style={{color: "green"}}/>Inform</a>
					
					<span>7 hours ago</span>
				</div>

				<div className='update'>
					<h3>Community Update</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat explicabo molestiae animi quasi perferendis nam neque delectus nihil, dolore sequi excepturi ea fugit eius blanditiis aliquam ipsa maiores quae laudantium!
					</p>
				</div>
				<NavLink className={"more"}>Read More <FaAngleDoubleRight /></NavLink>
			</div>
			<div className="box">
				<div className='img-container'>
					<img src={roadImg} alt="" />
				</div>

				<div className='timeline'>
					
					<a href="mailto:harvoxx" style={{color: "gray"}}><CiMail size={20} style={{color: "green"}}/>Inform</a>
					
					<span>7 hours ago</span>
				</div>

				<div className='update'>
					<h3>Community Update</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi itaque repellat nostrum ratione, eligendi rem nesciunt nisi, facere quia amet porro cumque consequuntur, nihil dicta. Hic delectus ipsum placeat.
					</p>
				</div>
				<NavLink className={"more"}>Read More <FaAngleDoubleRight /></NavLink>
			</div>

			<div className="box">
				<div className='img-container'>
					<img src={roadImg} alt="" />
				</div>

				<div className='timeline'>
					
					<a href="mailto:harvoxx" style={{color: "gray"}}><CiMail size={20} style={{color: "green"}}/>Inform</a>
					
					<span>7 hours ago</span>
				</div>

				<div className='update'>
					<h3>Community Update</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aliquid tempora! Corporis, aliquam architecto? Iusto molestias sit nemo facere excepturi unde eius minima, enim sequi, voluptatibus hic perspiciatis provident ut!
					</p>
				</div>
				<NavLink className={"more"}>Read More <FaAngleDoubleRight /></NavLink>
			</div>
		</div>

		<Faq />
		<Dash />
		<Footer />
    </div>
  )
}

export default Home