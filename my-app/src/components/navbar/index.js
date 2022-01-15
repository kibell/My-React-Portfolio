import React, { Component } from 'react'
import Logo from '../../images/logo192.png'
import "./styles.css"
class NavBar extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active d1">
        <a class="nav-link " href="#about"><span class="highlight mr">01</span>About Me </a>
      </li>
      
      <li class="nav-item d3">
        <a class="nav-link " href="#workExp"><span class="highlight mr">02</span>Work Experience</a>
      </li>

      <li class="nav-item d2">
        <a class="nav-link" href="#education"><span class="highlight mr ">03</span>Education</a>
      </li>
      <li class="nav-item d4">
        <a class="nav-link" href="./project.html"><span class="highlight mr d4">04</span>Project Library</a>
      </li>

      <li class="nav-item d4">
        <a class="nav-link" href="./contact.html"><span class="highlight mr d4">05</span>Contact Me</a>
      </li>
   
    </ul>
   
  </div>
</nav>
    )
  }
}


export default NavBar