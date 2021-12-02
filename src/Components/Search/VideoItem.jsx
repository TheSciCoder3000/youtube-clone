import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { numFormatter, timeSince } from '../../utils'

function VideoItem({ title, thumbnail, views, timestamp, desc, channelName, channelImg }) {
    return (
        <div className="search__vidList__video-item">
            <img src={thumbnail} alt="" className="video-item__video-thumbnail" />
            <div className="video-item__video-info">
                <h3 className="video-info__title">{title}</h3>
                <p className="video-info__video-stats">
                    {numFormatter(views)} views ∙ {timeSince(new Date(Date.now() - (Date.now() - new Date(timestamp))))} ago
                </p>
                <div className="video-info__channel">
                    <Avatar className="video-info__channel__thumbnail" src={channelImg} />
                    <p className="video-info__channel__name">{channelName}</p>
                </div>
                <p className="video-info__desc">{desc}</p>
            </div>
        </div>
    )
}

export default VideoItem
