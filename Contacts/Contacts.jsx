import React, { useState, useRef } from 'react'
import './Contacts.css'
import { Formik } from 'formik';
import emailjs from '@emailjs/browser';
import logo2 from './Contacts-img/logo2 (2).svg'
import footer1 from './Contacts-img/Group.svg'
import footer2 from './Contacts-img/Group (1).svg'
import footer3 from './Contacts-img/Vector (1).svg'
import twitter from './Contacts-img/twitter.svg'
import pininterest from './Contacts-img/pininterest.svg'
import facebook from './Contacts-img/facebook.svg'
import linked from './Contacts-img/Linked In.svg'
export default function Contacts() {

    const [show, setShow] = useState(false)
    const form = useRef();


    const sendEmail = () => {
        // e.preventDefault();
    
        emailjs.sendForm('service_vdf4or7', 'template_8ed3nza', form.current, 'jlTAk6KA3J9HCYurl')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


  return (
     <section className='Contacts'> 
     <div>
       <h1 className='big-contacts'>Contacts Information</h1>
       <ul className='contacts-list'>
         <li className='contacts-item'>Company Name:
1234 Sample Street Austin Texas 76401</li>
         <li className='contacts-item'>512.333.2222</li>
         <li className='contacts-item'>sampleemail@gmail.com</li>
       </ul>
       <h1 className='me'>Contact us :</h1>
       </div>
       <div className='Email'>
     {/* <h1>Anywhere in your app!</h1> */}
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'The email field is empty';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Non-direct value for email';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        setShow(true);
        setSubmitting(false);
        sendEmail()
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form ref={form} onSubmit={handleSubmit}>
            <div className='form-wrapper'>
            <label htmlFor="">Enter your email:</label>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           </div>
           <div className='form-wrapper1'>
            <label htmlFor="">Enter your message:</label>
             <textarea className='textarea' name="message" id="" cols="20" rows="4"></textarea>
             {errors.password && touched.password && errors.password}
           </div>
           <button className='btn-email' type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>

     {show && (<p>The data has been sent successfully</p>)}
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

