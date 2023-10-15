import React from 'react'
import './RegForm.css'
export default function RegForm({setUser}) {
    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(e);

        const obj = {
            email: e.target.elements.email.value,
            userName: e.target.elements.userName.value,
        }
        setUser(obj)
        localStorage.setItem('user',JSON.stringify(obj))
        // console.log(JSON.parse(localStorage.getItem('user')));
    }
  return (
    <div>
        <form 
        onSubmit={submitHandler}
        className='regform'>
            <input className='reg'
            placeholder='email'
            type="email" name='email' id='email' />
            <input className='reg'
            placeholder='pass'
            type="password" name='pass' id='pass' />
            <input className='reg'
            placeholder='userName'
            type="text" name='userName' />
            <button className='reg-btn'>Registration</button>
        </form>
    </div>
  )


  
}
