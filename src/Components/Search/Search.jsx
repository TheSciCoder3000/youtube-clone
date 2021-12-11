import React, { useEffect, useState } from 'react'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import { useParams, Route } from 'react-router-dom'
import { searchByKeyword } from '../../OAuth2.0'
import ChannelItem from './ChannelItem'
import VideoItem from './VideoItem'

// Search View Component
function Search({ IsSignedIn }) {
    // Get the search keyword from the url
    const { searchData: searchKeyword } = useParams()

    // Initialize SearchData State
    const [SearchData, setSearchData] = useState({})

    // After component finishes rendering, contact the api for a list of search results based on the keyword
    useEffect(() => {
        // Only Search if the user is signed in
        if (IsSignedIn) searchByKeyword(searchKeyword, setSearchData)
    },[IsSignedIn, searchKeyword])

    function mapSearchData() {
        let data = SearchData.items
        if (!data) return
        return data.map(item => {
            if (item.kind == "youtube#channel") {
                let channelData = item.snippet
                return <ChannelItem key={item.id}
                                    channelName={channelData.title}
                                    channelImg={channelData.thumbnails.high.url}
                                    vids={item.statistics.videoCount}
                                    subs={item.statistics.subscriberCount}
                                    desc={channelData.description} />
            } else {
                return <VideoItem key={item.id}
                                  title={item.snippet.title}
                                  thumbnail={
                                    item.snippet.thumbnails.maxres ? item.snippet.thumbnails.maxres.url
                                    : item.snippet.thumbnails.high ? item.snippet.thumbnails.high.url 
                                    : item.snippet.thumbnails.standard.url
                                  }
                                  desc={item.snippet.description}
                                  timestamp={item.snippet.publishedAt}
                                  views={item.statistics.viewCount} />
            }
        })
    }

    return (
        <div className="app__viewer__main search">
            <div className="search__filter">
                <TuneOutlinedIcon className="search__filter__icon" />
                <span className="search__filter__title">FILTERS</span>
            </div>
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
