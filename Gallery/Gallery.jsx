import React from 'react'
import './Gallery.css'
import gallery1 from './Gallery-img/gallery1.svg'
import gallery2 from './Gallery-img/gallery2.svg'
import gallery3 from './Gallery-img/gallery3.svg'
import gallery4 from './Gallery-img/gallery4.svg'
import gallery5 from './Gallery-img/gallery5.svg'
import gallery6 from './Gallery-img/gallery6.svg'
import gallery7 from './Gallery-img/gallery7.svg'
import gallery8 from './Gallery-img/gallery8.svg'
import gallery9 from './Gallery-img/gallery9.svg'
import gallery10 from './Gallery-img/gallery10.jpeg'
import logo2 from './Gallery-img/logo2 (2).svg'
import footer1 from './Gallery-img/Group.svg'
import footer2 from './Gallery-img/Group (1).svg'
import footer3 from './Gallery-img/Vector (1).svg'
import twitter from './Gallery-img/twitter.svg'
import pininterest from './Gallery-img/pininterest.svg'
import facebook from './Gallery-img/facebook.svg'
import linked from './Gallery-img/Linked In.svg'
export default function Gallery() {
  return (
    <section className='Gallery'>
        <div className="gallery-container">
            <h1 className='gallerry-photo'>Photo Gallery</h1>
            <img src={gallery1} alt="" className="gallery-img" />
            <img src={gallery2} alt="" className="gallery-img" />
            <img src={gallery3} alt="" className="gallery-img" />
            <img src={gallery4} alt="" className="gallery-img" />
            <img src={gallery5} alt="" className="gallery-img" />
            <img src={gallery6} alt="" className="gallery-img" />
            <img src={gallery7} alt="" className="gallery-img" />
            <img src={gallery8} alt="" className="gallery-img" />
            <img src={gallery9} alt="" className="gallery-img" />
            <img src={gallery10} alt="" className="gallery-img" />
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
