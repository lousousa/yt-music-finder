import React, { Component } from 'react'

import { InlineIcon } from '@iconify/react'
import searchIcon from '@iconify/icons-jam/search'
import closeIcon from '@iconify/icons-jam/close'

import YouTube from '../apis/youtube'
import Ticketmaster from '../apis/ticketmaster'

import Loader from "react-loader-spinner"

export default class SearchForn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            term: '',
            waiting: { search: false }
        }
    }

    search = async () => {
        this.setState({ waiting: { search: true } })

        const responseYouTube = await YouTube.get('/search', {
            params: { q: this.state.term }
        })

        const responseTicketmaster = await Ticketmaster.get('/events.json', {
            params: { keyword: this.state.term }
        })
        
        this.props.onYouTubeData(responseYouTube.data)
        this.props.onTicketmasterData(responseTicketmaster.data)
        this.setState({ waiting: { search: false } })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.term.length > 0) this.search()
    }

    typeSearchText = (e) => {
        this.setState({ term: e.target.value })
    }

    clearSearchText = () => {
        this.setState({ term: '' })
    }

    render() {
        const isWaitingSearch = this.state.waiting.search
        return (
            <div className="flex justify-center">
                {isWaitingSearch ?
                    <Loader className="my-12" type="Oval" color="#ef4444" height={48} width={48} timeout={3000} /> :
                    <form className="flex flex-wrap mt-12">
                        <div className="w-full flex rounded-full hover:shadow-md">
            
                            <div className="w-1/6 text-xl text-gray-400 text-center border border-gray-300 rounded-l-full border-r-0 p-2">
                                <InlineIcon className="inline" icon={searchIcon} />
                            </div>
            
                            <input className="w-4/6 text-xl text-gray-600 border-t border-b border-gray-300 focus:outline-none p-2"
                                placeholder="Search artist or band" type="text" value={this.state.term} onChange={this.typeSearchText} />
            
                            <div className="w-1/6 text-3xl text-gray-400 text-center border border-gray-300 rounded-r-full border-l-0 p-1">
                                {this.state.term.length > 0 &&
                                    <InlineIcon className="inline cursor-pointer" icon={closeIcon} onClick={this.clearSearchText} />
                                }
                            </div>
            
                        </div>
                        <div className="w-full mt-6">
                            <button type="submit" className="text-lg bg-gray-100 rounded py-2 px-6 text-gray-700 hover:shadow-md focus:outline-none" onClick={this.handleSubmit}>Search</button>
                        </div>
                    </form>
                }
            </div>            
        )
    }
}