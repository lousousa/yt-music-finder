import React from 'react'

const EventsList = props => {

    const items = props.data._embedded.events.map(item => (
        <div className="w-1/2 sm:w-1/4 md:w-1/5 p-2">
            <img alt={item.name} src={item.images[0].url}/>
            <p className="font-bold">{item.name}</p>
            <p>{item.dates.start.localDate}</p>
            <p>{item.dates.start.localTime}</p>
            <p><a className="text-blue-600 underline" target="_blank" rel="noreferrer" href={item.url}>Buy ticket</a></p>
        </div>
    ))

    return (
        <div className="w-full flex flex-wrap justify-center">
            <div className="w-full sm:w-5/6 p-2 bg-blue-100 rounded-t-xl">
                <p className="font-bold">Upcoming events:</p>
            </div>
            <div className="w-full sm:w-5/6 flex flex-wrap bg-blue-100 rounded-b-xl">
                {items}
            </div>
        </div>
    )
}

export default EventsList