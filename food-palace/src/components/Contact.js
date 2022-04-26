import React from 'react'
import './Contacts/Contact.css'

function Contact() {
  return (
    <div className='Contact'>
      <form>
        <input type="text" placeholder='Your Name' name='Your Name' />
        <input type="email" placeholder='Your Email' name='Your Email' />
        <textarea rows="5" placeholder='Your Message' name='Your Message'/>
        <button className='btn'>Send</button>
      </form>
    </div>
  )
}

export default Contact