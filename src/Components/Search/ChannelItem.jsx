import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { numFormatter } from '../../utils'

function ChannelItem({ channelImg, channelName, subs, vids, desc }) {
    return (
    <div className="search__vidList__channel-item">
        <Avatar className="channel-item__channel-img" src={channelImg} alt="" />
        <div className="channel-item__channel-info">
            <h3 className="channel-info__channel-name">{channelName}</h3>
            <p className="channel-info__channel-stats">
                {numFormatter(subs)} subscribers ∙ {numFormatter(vids)} videos
            </p>
            <p className="channel-info__channel-desc">{desc}</p>
        </div>
    </div>
    )
}

export default ChannelItem
