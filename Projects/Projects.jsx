import React from 'react'
import './Projects.css'
import p1 from './Projects-img/p1.svg'
import p2 from './Projects-img/p2.svg'
import p3 from './Projects-img/p3.svg'
import logo2 from './Projects-img/logo2 (2).svg'
import footer1 from './Projects-img/Group.svg'
import footer2 from './Projects-img/Group (1).svg'
import footer3 from './Projects-img/Vector (1).svg'
import twitter from './Projects-img/twitter.svg'
import pininterest from './Projects-img/pininterest.svg'
import facebook from './Projects-img/facebook.svg'
import linked from './Projects-img/Linked In.svg'
export default function Projects() {
  return (
    <section className='Projects'>
            <h1 className='projects-text'>Our Projects</h1>
            <div className="Sample-Project">
                <img src={p1} alt="" />
                <div className='sample-container'>
                <h2 className='big-sample'>Sample Project</h2>
                <p className='sample-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div className="Sample-Project">
                <img src={p2} alt="" />
                <div className='sample-container'>
                <h2 className='big-sample'>Sample Project 2</h2>
                <p className='sample-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div className="Sample-Project">
                <img src={p3} alt="" />
                <div className='sample-container'>
                <h2 className='big-sample'>Sample Project 3</h2>
                <p className='sample-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
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
  )
}
