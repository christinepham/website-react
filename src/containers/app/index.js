import React from 'react';
import Icon from 'react-icons-kit'

import { Route, Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { githubAlt, linkedinSquare } from 'react-icons-kit/fa/';

/* Custom Components */
import Home from '../home/home'
import About from '../about/about'
import Experience from '../resume/experience/experience'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

function Links(props) {
  return <span className="links">
    <a href={ props.link } target="_blank">
      <Icon icon={ props.iconName } />
    </a>
  </span>
}

const App = () => (
  <div className="home-page">
    <Navbar fixedTop fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Xtiney</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Links link="https://github.com/christinepham/" iconName={ githubAlt }></Links>
      <Links link="https://www.linkedin.com/in/christinetpham/" iconName= { linkedinSquare }></Links>

      <Nav pullRight>
        <NavItem eventKey={1} href="/">Home</NavItem>
        <NavItem eventKey={2} href="/about">About</NavItem>
        <NavDropdown eventKey={3} title="Resume" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} href="/experience">Experience</MenuItem>
          <MenuItem eventKey={3.2} href="/projects">Projects</MenuItem>
          <MenuItem eventKey={3.3} href="/skills">Skills</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>

    <main>
      <Route exact path="/" component={ Home } />
      <Route exact path="/about" component={ About } />
      <Route exact path="/experience" component={ Experience } />
{/*      <Route exact path="/projects" component={ Projects } />
      <Route exact path="/skills" component={ Skills } />*/}
    </main>
  </div>
)

export default App