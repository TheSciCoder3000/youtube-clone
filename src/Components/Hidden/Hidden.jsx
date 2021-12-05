import React, { useEffect, useState } from 'react'
import movie from './movie.mp4'

function Hidden() {
    const [permission, setPermission] = useState(false)
    const reqPermission = () => {
        setPermission(true)
        setTimeout(() => {
            let video = document.getElementById('video-player')
            video.muted = false
            video.play()
        }, 200)
    }
    return (
        <div className="rick-rolled-container">
            {(permission ?
                <video id="video-player" loop  width="720" height="480" controls>
                    <source src={movie} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                :
                <>
                    <p className="permission">Are you sure you wann do this?</p>
                    <button className="permission-btn" onClick={reqPermission}>YES</button>
                </>
            )} 
        </div>
    )
}

export default Hidden
