import React from 'react'
import Avatar from '@material-ui/core/Avatar'

function VideoItems({ title, channel, channelImg, viewCount, uploadDate, duration, thumbnail }) {
    return (
        <div className="recommended__videoItem">
            <img className="videoItem__thumbnail" src={thumbnail} alt="" />
            <div className="videoItem__details">
                <Avatar className="videoItem__details__thumbnail" src={channelImg} />
                <div className="videoItem__details__info">
                    <h3 className="info__title">{title}</h3>
                    <p className="info__channel">{channel}</p>
                    <p className="info__video-data">{viewCount} ∙ {uploadDate}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoItems
