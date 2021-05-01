import React from 'react'

import { InlineIcon } from '@iconify/react'
import chevronLeft from '@iconify/icons-jam/chevron-left'
import chevronRight from '@iconify/icons-jam/chevron-right'

const YouTubeList = props => {
    
    const items = props.data.items.map(item => (
        <div key={item.id.videoId} className="w-full sm:w-1/4 p-2">
            <div className="cursor-pointer" value={item.id.videoId}
                onClick={() => props.onClickThumbnail({
                    url: `https://www.youtube.com/embed/${ item.id.videoId }`,
                    title: item.snippet.title,
                    channelTitle: item.snippet.channelTitle
                })}>
                <img className="w-full" width='320' src={item.snippet.thumbnails.medium.url} alt={item.snippet.title}/>
                <h1 className="font-bold" dangerouslySetInnerHTML={{__html: item.snippet.title}}></h1>
                <h2 className="text-gray-500">{item.snippet.channelTitle}</h2>
            </div>
        </div>
    ))

    return (
        <div className="w-full flex flex-wrap items-center">
            <div className='hidden sm:block w-1/12 text-center'>
                {props.data.prevPageToken &&
                    <InlineIcon className="inline text-6xl text-gray-600 cursor-pointer" onClick={props.onPrev} icon={chevronLeft} />}
            </div>
            <div className='w-full sm:w-10/12'>
                <div className="p-2">
                    <p>Showing results for: <b>{props.data.term}</b></p>
                </div>
                <div className="flex flex-wrap">
                    {items}
                </div>
            </div>
            <div className='hidden sm:block w-1/12 text-center'>
                {props.data.nextPageToken &&
                    <InlineIcon className="inline text-6xl text-gray-600 cursor-pointer" onClick={props.onNext} icon={chevronRight} />}
            </div>
            <div className="sm:hidden flex w-full my-2 p-2">
                <div className="w-1/2">
                    {props.data.prevPageToken &&
                        <button type="button" className="text-lg bg-gray-100 rounded py-2 px-6 text-gray-700 hover:shadow-md focus:outline-none" onClick={props.onPrev}>Previous</button>}
                </div>
                <div className="w-1/2 text-right">
                    {props.data.nextPageToken &&
                        <button type="button" className="text-lg bg-gray-100 rounded py-2 px-6 text-gray-700 hover:shadow-md focus:outline-none" onClick={props.onNext}>Next</button>}
                </div>
            </div>
        </div>
    )
}

export default YouTubeList