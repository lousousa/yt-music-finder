import React, { Component } from 'react'

import SearchForm from './SearchForm'
import VideoPlayer from './VideoPlayer'
import YouTubeList from './YouTubeList'

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.searchForm = React.createRef()
        this.state = {
            youTubeData: null,
            ticketmasterData: null,
            video: null
        }
    }

    onYouTubeData = data => {
        this.setState({ youTubeData: data })
    }

    onTicketmasterData = data => {
        this.setState({ ticketmasterData: data })
    }

    onNext = () => {
        this.searchForm.current.search(this.state.youTubeData.nextPageToken, this.state.youTubeData.term)
    }

    onPrev = () => {
        this.searchForm.current.search(this.state.youTubeData.prevPageToken, this.state.youTubeData.term)
    }

    setVideo = (video) => {
        this.setState({ video })
    }

    render() {
        return (
            <div className="max-w-screen-lg mx-auto min-h-screen flex flex-wrap justify-center py-6 px-4 content-center items-center">
                <div className="w-2/3 text-center">

                    <h2 className="text-5xl">
                        <span className="font-bold text-red-500">YouTube</span>
                        <span className="text-gray-600 font-thin">&nbsp;Music Finder</span>
                    </h2>

                    {this.state.video &&
                        <div className="w-full flex justify-center"><VideoPlayer video={this.state.video}/></div>
                    }

                    <SearchForm ref={this.searchForm}
                        setVideo={this.setVideo}
                        onYouTubeData={this.onYouTubeData}
                        onTicketmasterData={this.onTicketmasterData}
                    />

                </div>
                
                {this.state.youTubeData &&
                    <div className="mt-4">
                        <YouTubeList
                            data={this.state.youTubeData}
                            onNext={this.onNext}
                            onPrev={this.onPrev}
                            onClickThumbnail={this.setVideo}
                        />
                    </div>
                }
            </div>
        )
    }

}