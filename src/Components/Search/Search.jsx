import React, { useEffect, useState } from 'react'
import { useParams, Route } from 'react-router-dom'
import { searchByKeyword } from '../../OAuth2.0'
import ChannelItem from './ChannelItem'
import VideoItem from './VideoItem'

function Search({ IsSignedIn }) {
    const { searchData: searchKeyword } = useParams()
    const [SearchData, setSearchData] = useState({})

    useEffect(() => {
        console.log('use effect - searching: ', IsSignedIn)
        if (IsSignedIn) searchByKeyword(searchKeyword, setSearchData)
    },[IsSignedIn, searchKeyword])

    function mapSearchData() {
        let data = SearchData.items
        if (!data) return
        return data.map(item => {
            if (item.kind == "youtube#channel") {
                let channelData = item.snippet
                return <ChannelItem key={item.id}
                                    channelName={channelData.channelTitle}
                                    channelImg={channelData.thumbnails.high.url}
                                    vids={item.statistics.videoCount}
                                    desc={channelData.description} />
            } else {
                return <VideoItem key={item.id}
                                  title={item.snippet.title}
                                  thumbnail={item.snippet.thumbnails.default.url}
                                  desc={item.snippet.description}
                                  views={item.statistics.viewCount} />
            }
        })
    }

    return (
        <div className="app__viewer__main">
            <div className="search__filter">filter</div>
            <hr className="search__hr" />
            <div className="search__vidList">
                {/* you searched for {searchKeyword} */}
                {IsSignedIn ?
                    mapSearchData()
                    :
                    <div className="sign-in-not-verified">
                        Sign In first to search videos
                    </div>
                }
            </div>
        </div>
    )
}

export default Search
