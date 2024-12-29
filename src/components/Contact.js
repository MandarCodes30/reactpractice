import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <input className='border border-black p-2 m-2'  type='text' placeholder='name'></input>
      <input className='border border-black p-2 m-2'  type='text' placeholder='password'></input>
      <button>Submit</button>
    </div>
  )
}

export default Contact