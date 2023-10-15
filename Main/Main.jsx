import React from 'react'
import Home1 from './Img/Home1.svg'
import './Main.css'
import Home2 from './Img/Rectangle 9.svg'
import Project1 from './Img/projects-1.svg'
import Project2 from './Img/projects-2.svg'
import Project3 from './Img/projects-3.svg'
import Project4 from './Img/projects-4.svg'
import logo2 from './Img/logo2 (2).svg'
import footer1 from './Img/Group.svg'
import footer2 from './Img/Group (1).svg'
import footer3 from './Img/Vector (1).svg'
import twitter from './Img/twitter.svg'
import pininterest from './Img/pininterest.svg'
import facebook from './Img/facebook.svg'
import linked from './Img/Linked In.svg'
export default function Main() {
  return (
    <>
    <section className='Main'>
      <div className='Project-lorum'>
        <h1  className='Lorum-text'>PROJECT Lorum</h1>
        
        <img className='lorum-img' src={Home1} alt="" />
      </div>
      <div className='about'>
      <img className='about-img' src={Home2} alt="" />
      <div className='about-text'>
        <h1 className='big-about'>About</h1>
        <p className='mimi-about'>
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has 
        survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged.
        </p>
        </div>
      </div>
      <h1 className='big-focus'>Main Focus/Mission Statement</h1>
      <div className='Focus'>
        <p className='focus-1'>1</p> 
          <p className='focus-text'>Lorem ipsum dolor sit amet,consectetur adipiscing elit.Sed efficitur, lectus et facilisis placerat.</p>
          <p className='focus-1'>2</p>
          <p className='focus-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
        </div>
        <div className='projects'>
          <h1 className='big-projects'>Our Projects</h1>
          <img src={Project1} alt="" className="projects-img" />
          <img src={Project2} alt="" className="projects-img" />
          <img src={Project3} alt="" className="projects-img" />
          <img src={Project4} alt="" className="projects-img" />
        </div>
        <footer>
          <div className='footer'>
            <img className='footer-img' src={logo2} alt="" />
            <ul className='footer-list'>
              <li className="footer-items">Contacts:</li>
              <li className="footer-items"> <img  src= {footer3}alt="" /> 1234 Sample Street Austin Texas 78704</li>
              <li className="footer-items"> <img src={footer1} alt="" /> 512.333.2222</li>
              <li className="footer-items"> <img src={footer2} alt="" /> sampleemail@gmail.com</li>
            </ul>
            <p className='footer-text'>Social Media:</p>
            <ul className='madia-list'>
              <li className="media-item"><img src={twitter} alt="" /></li>
              <li className="media-item"><img src={linked} alt="" /></li>
              <li className="media-item"><img src={facebook} alt="" /></li>
              <li className="media-item"><img src={pininterest} alt="" /></li>
            </ul>
          </div>
        </footer>
    </section>
    </>
  )
}
