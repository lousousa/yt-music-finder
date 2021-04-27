import React from 'react'

import { InlineIcon } from '@iconify/react'
import chevronLeft from '@iconify/icons-jam/chevron-left'
import chevronRight from '@iconify/icons-jam/chevron-right'

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
        <div className="w-full flex flex-wrap items-center">
            <div className='w-1/12 text-center'>
                {props.data.prevPageToken &&
                    <InlineIcon className="inline text-6xl text-gray-600 cursor-pointer" onClick={props.onPrev} icon={chevronLeft} />}
            </div>
            <div className='w-10/12 flex flex-wrap'>{items}</div>
            <div className='w-1/12 text-center'>
                {props.data.nextPageToken &&
                    <InlineIcon className="inline text-6xl text-gray-600 cursor-pointer" onClick={props.onNext} icon={chevronRight} />}
            </div>
        </div>
    )
}

export default YouTubeList