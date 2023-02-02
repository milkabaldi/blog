import Link from "next/link"
import Image from "next/image"

export const HomePage = ({data}) => 
     (
        <main>
        <h1>Home pages</h1>
        
        {data.map(ev => <Link key={ev.id} href={`/events/${ev.id}`} passHref><Image width={200} height={200} alt={ev.title} src={ev.image} /><h2>{ev.title}</h2><p>{ev.description}</p></Link> )}
        </main>
    )



