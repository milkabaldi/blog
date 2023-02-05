
import CatEvent from '../../components/events/catEvent'

const EventsCatPage = ({data, pageName}) => {
    return (
        <CatEvent data={data} pageName={pageName} />
    )
}

export default EventsCatPage






export async function getStaticPaths() {
    const {events_categories} = await import('/data/data.json');
    const allPaths = events_categories.map(ev => {
        return {
            params:{
                categories: ev.id.toString(),
            }
        }
    })
    console.log(allPaths)
    return {
        paths: allPaths,
        fallback: false,
    };
}


export async function getStaticProps(context) {
    console.log(context)
    const id = context?.params.categories
    const { allEvents } = await import('/data/data.json');

    const data = allEvents.filter(ev => ev.city ===id)
    console.log(data)
    return { props: { data, pageName: id }}

}