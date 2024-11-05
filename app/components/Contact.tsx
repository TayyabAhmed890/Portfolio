import React from 'react'

const Contact = () => {
  return (
   <>
   <div className='contact'>
    <h2>Contact <span className='cspan'>me</span></h2>
    <form action="#">
      <input type="text" placeholder='Name' autoComplete='off' required/>
      <input type="email" placeholder='Email' autoComplete='off' required/>
      <textarea placeholder='Enter your Message Here' autoComplete='off' required></textarea>
      <button>Send</button>
    </form>
   </div>
   </>
  )
}

export default Contact