import React from 'react'

const YouTubeList = props => {
    
    const items = props.data.items.map(item => {
        return (
            <div key={item.id.videoId} className="w-1/5 p-2">
                <div>
                    <img className="w-full" width='320' src={item.snippet.thumbnails.medium.url} alt={item.snippet.title}/>
                    <h1 className="font-bold">{item.snippet.title}</h1>
                    <h1 className="text-gray-500">{item.snippet.channelTitle}</h1>
                </div>
            </div>
        )
    })

    return (
        <div className="w-full flex flex-wrap">
            {items}
        </div>
    )
}

export default YouTubeList