import React from 'react'
import hero from '../Assets/hero-image.png'

export default function HeroSec() {
  return (
    <div className='hero-main'>
		<section className="viswa-hero-section">
			<div className="hero-text">
				<h5>#1 Project</h5>
				<h4>Viswanath Bodapati</h4>
				<h1>Track Your Work !!</h1>
				<p>
					Make advance tracking a breeze with our easy-to-use Tracking app.
					JOIN Millions of users worldwide and streamline in monitoring your projects with
					our user-friendly tracking application - the perfect tool for
					simplifying everyday analysis!
				</p>

				<a href="#main-da">Explore Now</a>
				<a href="#" className="ctaa"><i className="ri-play-fill"></i> Watch Premiere</a>
			</div>

			<div className="hero-landing-img">
				<img
					src={hero}
					alt="viswa-landing-photo"
				/>
				{/* <!-- <img
					src="https://data.apkshub.com/22/com.androidapps.unitconverter/2.2.33/icon.png"
					alt="viswa-landing-photo"
				/> --> */}
			</div>
		</section>

		<div className="icons">
			<a href="https://www.linkedin.com/in/viswanath-bodapati-56944714a/"
				><i className="ri-linkedin-box-fill"></i
			></a>
			<a href="https://www.youtube.com/watch?v=lR0lHgwAm_k"
				><i className="ri-youtube-line"></i
			></a>
			<a href="https://www.instagram.com/viswanath.bodapati/"
				><i className="ri-instagram-line"></i
			></a>
			<a href="https://medium.com/@viswanathbodapati.career"
				><i className="ri-medium-fill"></i
			></a>
			<a href="https://codepen.io/Viswanath-621"
				><i className="ri-codepen-line"></i
			></a>
			<a href="https://github.com/Viswanath-621"
				><i className="ri-github-line"></i
			></a>
		</div>

		<div className="scroll-down">
			<a href="#main-da"><i className="ri-arrow-down-s-fill"></i></a>
		</div>

    </div>
  )
}
