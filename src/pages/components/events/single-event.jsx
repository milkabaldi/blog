import React from 'react'
import Image from 'next/image'

const SingleEvent = ({data}) => {
  return (
    <div className='single__page'>
    <h1>{data.title}</h1>
    <Image src={data.image} width={1000} height={500} alt={data.title} />
    <p>{data.description}</p>
    <form onSubmit={onSubmit} className='single__page-email'></form>
    <label>Get Registered for this event!</label>
    <input type="email " id='email' placeholder='Please insert your email here' /> <button type='submit'>Submit</button>
</div>
  )
}

export default SingleEvent