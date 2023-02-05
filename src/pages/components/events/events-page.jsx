import React from 'react'
import Image from 'next/image';
import Link  from 'next/link';


const AllEvents = ({data}) => {
  return (
    <div className='events-page'>
     
      {data.map((ev) => (
        <Link className='events-page__card' key={ev.id} href={`/events/${ev.id}`} passHref>
        <Image src={ev.image} alt={ev.title} width={400} height={400} />
        <h2>{ev.title}</h2>
      </Link>
      
      ))}
      
    </div>
  )
}

export default AllEvents