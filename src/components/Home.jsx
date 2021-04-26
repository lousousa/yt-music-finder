import React, { Component } from 'react'

import YouTubeList from './YouTubeList'
import SearchForm from './SearchForm'

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            youTubeData: null,
            ticketmasterData: null
        }
    }

    onYouTubeData = data => {
        this.setState({ youTubeData: data })
    }

    onTicketmasterData = data => {
        this.setState({ ticketmasterData: data })
    }

    render() {

        return (
            <div className="max-w-screen-lg mx-auto h-screen flex flex-wrap justify-center content-center items-center">
                <div className="w-1/2 text-center">

                    <h2 className="text-5xl">
                        <span className="font-bold text-red-500">YouTube</span>
                        <span className="text-gray-600 font-thin">&nbsp;Music Finder</span>
                    </h2>

                    <SearchForm onYouTubeData={this.onYouTubeData} onTicketmasterData={this.onTicketmasterData}/>

                </div>

                {this.state.youTubeData &&
                    <div className="mt-4">
                        <YouTubeList data={this.state.youTubeData}/>
                    </div>
                }
            </div>
        )
    }

}