import React, { useEffect, useState } from 'react'

import Loader from "react-loader-spinner"

const VideoPlayer = props => {

    const [isWaiting, setWaiting] = useState(false)

    useEffect(() => {
        setWaiting(true)
        window.setTimeout(() => setWaiting(false), 500)
    }, [props.video])

    return (
        <div className="w-full flex flex-wrap justify-center items-center">
            {isWaiting ?
                <Loader className="my-12" type="Oval" color="#ef4444" height={32} width={32} timeout={3000} /> :
                <div className="mt-8 w-full flex flex-wrap justify-center">
                    <iframe className="max-w-full" width="640" height="360" src={props.video.url} title={props.video.url}></iframe>
                    <div className="max-w-full" style={{width:'640px'}} className='text-left mt-2'>
                        <h1 className="font-bold" dangerouslySetInnerHTML={{__html: props.video.title}}></h1>
                        <h2 className="text-gray-500">{props.video.channelTitle}</h2>
                    </div>
                </div>
            }
        </div>
    )
}

export default VideoPlayer