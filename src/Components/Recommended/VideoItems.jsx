import React from 'react'

function VideoItems({ title, channel, viewCount, uploadDate, duration, thumbnail }) {
    return (
        <div className="recommended__videoItem">
            {title}
        </div>
    )
}

export default VideoItems
