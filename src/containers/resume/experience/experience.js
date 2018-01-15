import React from 'react'
// import { Image } from 'react-bootstrap'

// import CiscoLogo from '../images/Cisco-logo.png'
import './experience.css'

function Title(props) {
	return <div><h4><b>{ props.company },</b> <i>{ props.title }</i></h4></div>
}

function Description(props) {
	return <li> { props.description } </li>
}

const Cisco = () => (
	<div className="title">
		<Title company="Cisco" title="Software Engineer"></Title>
	  <ul>
	  	<Description description="Responsible for developing the User Interface for the Admin Portal using AngularJS -
	  	which helps customers handle their entitlements and services between products"></Description>
	  	<Description description="Assigned as module owner for client side analytics using Mixpanel, to help analyze
	  	and enhance the user experience"></Description>
	  	<Description description="Created the new responsive design for Cisco’ setup wizard that was demoed during
	  	Cisco’s Collaboration Summit"></Description>
	  	<Description description="Enhanced the E-discovery console by encrypting the queries, integrating new API’s to
	  	take in a list of strings, updating the design based on new mockups to be able to better reflect the new
	  	capabilities of the search"></Description>
	  </ul>
  </div>
)

const FLE = () => (
	<div className="title">
		<Title company="Foundation for Learning Equality" title="Software Development Intern"></Title>
		<ul>
			<Description description="Constructed a documentation system using Sphinx, a Python generator that was used
			during version control"></Description>
			<Description description="Designed wireframe mockups that were used for collecting user data and collaboration with users 
			who were offline"></Description>
			<Description description="Managed code quality assurance with BackboneJS and Handlebars to help standardize code throughout 
			application"></Description>
		</ul>
	</div>
)

const Experience = () => (
  <div className="experience">
    <h3>Experience</h3>
    <Cisco></Cisco>
    <FLE></FLE>
  </div>
)

export default Experience