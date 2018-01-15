import React from 'react'
import { Image } from 'react-bootstrap'

import Profile from './images/profile.jpg'
import './about.css'

const Basics = () => (
	<div className="basics">
		<h3>Professional</h3>
		<span>Christine graduated from the University of California, San Diego with a B.S. in Computer Science.
		She currently works as a Software Engineer in Silicon Valley, focusing primarily on Frontend Development.
		The main framework she's familiar with is AngularJS, though she built this website using ReactJS. She's
		also taken it upon herself to receive two certificates from Stanford, one in Innovation and Entrepreneurship
		and the other during the Summer Institute for General Management.</span>
	</div>
)

const Volunteer = () => (
	<div className="basics">
		<h3>Volunteer</h3>
		<span>Her interests align with growing STEM education, to do so she has worked several organizations.
		She's been an instructor at Citizen's School, teaching Scratch and 3D printing and has served as a mentor for 
		<a href="http://www.sheplusplus.com/" target="_blank"> She++ </a> and 
		<a href="https://twitter.com/vietwic?lang=en" target="_blank"> Vietnamese Women in Computing. </a> 
		Christine also serves as a board member for <a href="http://sjproject.org/" target="_blank"> The San Jose Project </a>
		and all her volunteer work has led her to receive two Presidential Volunteer Service Awards.</span>
	</div>
)

const Leadership = () => (
	<div className="basics">
		<h3>Leadership</h3>
		<span>Christine has recently published a book titled 
		<a href="https://www.paperoranges.com" target="_blank"> Alice's 3D Printing Spree </a> and hopes to use that as a 
		platform for people of color to feel more represented in the field. She's also captained USTA's Mixed Doubles team 
		in the summers, as well as her social volleyball league.
		</span>
	</div>
)

const About = () => (
  <div className="about">
  	<div className="profile">
  		<Image src={ Profile } thumbnail/>
  	</div>
  	<Basics></Basics>
  	<Volunteer></Volunteer>
  	<Leadership></Leadership>
  </div>
)

export default About