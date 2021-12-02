import React from 'react'

function VideoItem({ title, thumbnail, views, timestamp, desc }) {
    return (
        <div className="search__vidList__video-item">
            <img src={thumbnail} alt="" className="video-item__video-thumbnail" />
            <div className="video-item__video-info">
                <h3 className="video-info__title">{title}</h3>
                <p className="video-info__video-stats">{views} views ∙ {timestamp}</p>
                <p className="video-info__desc">{desc}</p>
            </div>
        </div>
    )
}

export default VideoItem
