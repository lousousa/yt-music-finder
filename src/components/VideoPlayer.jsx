import React from 'react'

const VideoPlayer = props => {
    return (
        <div className="mt-8 w-full flex flex-wrap justify-center">
            <iframe className="max-w-full" width="640" height="360" src={props.video.url} title={props.video.url}></iframe>
            <div style={{width:'640px'}} className='text-left mt-2'>
                <h1 className="font-bold" dangerouslySetInnerHTML={{__html: props.video.title}}></h1>
                <h2 className="text-gray-500">{props.video.channelTitle}</h2>
            </div>
        </div>
    )
}

export default VideoPlayer