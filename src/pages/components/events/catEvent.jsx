import React from 'react'
import Image from 'next/image';
import Link  from 'next/link';

const CatEvent = ({data, pageName}) => {
  return (
    <div className='category'>
            <h1>Events in {pageName}</h1>
            <div className='category__main'>
                {data.map((ev) => (
                    <Link className='category__main-card' key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
                    
                    <Image alt={ev.title} width={300} height={300} src={ev.image} />
                    <h2>{ev.title}</h2>
                    <p>{ev.description}</p>
                    
                    </Link>
                ))}

            </div>
            
        </div>
  )
}

export default CatEvent