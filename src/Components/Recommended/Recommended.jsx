import React from 'react'
import VideoItems from './VideoItems'

const youtubeVids = [
    {
        title: 'Alan Walker Gold Greatest Hits',
        thumbnail: 'https://i.ytimg.com/vi/51rEkz-WZag/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRZzSAEJXgaJKk7Cl0uIEzg9ah4Q',
        channel: 'king EDM',
        channelImg: 'https://yt3.ggpht.com/ytc/AKedOLQ7vRuKiElVn3TJBM8hduQJgSs-N87Kc_Jo84NrPQ=s68-c-k-c0x00ffffff-no-rj',
        views: '1K',
        timestampe: '7 months ago'
    },
    {
        title: 'Most Emotional & Sad Violin, piano Music',
        thumbnail: 'https://i.ytimg.com/vi/8WweT4b_Dx0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA04pB7PDESjBZbTWjlygto3_SdMg',
        channel: 'Time Music',
        channelImg: 'https://yt3.ggpht.com/ytc/AKedOLRkeCKECTuw3Ygbu4cpLGJIidhG6AK5LSf61JbS=s68-c-k-c0x00ffffff-no-rj',
        views: '19K',
        timestampe: '5 months ago'
    },
    {
        title: 'Best Anime Openings & Endings',
        thumbnail: 'https://i.ytimg.com/vi/EpAlSusAz-4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZKVkHRyIYSzV3NNWWVN094q-IEw',
        channel: 'Anime Music',
        channelImg: 'https://yt3.ggpht.com/VX9C3_8EOt4PKaIjjuZy_ZVBK4GQZIB2zpVNigP0RS8WbvkNw16UzUX3x12nRIxteAr0Q60CAw=s68-c-k-c0x00ffffff-no-rj',
        views: '397K',
        timestampe: '3 months ago'
    },
    {
        title: 'My Japanese Playlist [chill & soft]',
        thumbnail: 'https://i.ytimg.com/vi/ivSj6GoOs2M/hq720_live.jpg?sqp=CKD-kY0G-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAq6_f9YIn0XyhV0n3qhy2c6DdEUA',
        channel: '1 Hour Japan Music',
        channelImg: 'https://yt3.ggpht.com/ytc/AKedOLSqraALqTOBLmpp8qjuqsa9N8usnzgi25v7388b=s68-c-k-c0x00ffffff-no-rj',
        views: '1K',
        timestampe: '10 minutes ago'
    },
    {
        title: 'a study playlist to get motivated and focused',
        thumbnail: 'https://i.ytimg.com/vi/hg9g4atlY5Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfJC2VvIdNjw7YsH-8cFBOasFv-g',
        channel: 'SUM',
        channelImg: 'https://yt3.ggpht.com/JSfYGG5DQXLxnC9ECo4HxwMbQOyFGYU115-morqmGQiSOVO7GkHcvoeQdIfXiQ67PX7msdNr28I=s68-c-k-c0x00ffffff-no-rj',
        views: '274K',
        timestampe: '1 month ago'
    },
    {
        title: 'Die For You ft. Grabbitz',
        thumbnail: 'https://i.ytimg.com/vi/h7MYJghRWt0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRtpmhqj8oEFft3mpQBC3pTi6ZAw',
        channel: 'VALORANT',
        channelImg: 'https://yt3.ggpht.com/bTC9q1MMBvuzXZogSeVX-_RJNSJwacY7CkTxIyDXe2KGJMtz7m7P30-klN7-kRoePlo131ELzw=s68-c-k-c0x00ffffff-no-rj',
        views: '4.5M',
        timestampe: '6 days ago'
    },
    {
        title: 'Best Acoustic Japanese Songs 2021',
        thumbnail: 'https://i.ytimg.com/vi/H3MRwDoQNbs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB24UuAELpIpKUbsj9hQF_LO3cahw',
        channel: 'ND-Music',
        channelImg: 'https://yt3.ggpht.com/ytc/AKedOLT1QTR7QC7maCSn6OH0a1uRssf2MSRMbksxGCn-=s68-c-k-c0x00ffffff-no-rj',
        views: '139K',
        timestampe: '11 months ago'
    },
    {
        title: 'Japanese Sad Song',
        thumbnail: 'https://i.ytimg.com/vi/EaSQZY6E6cs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYvNDi7s_-lmtgFhZoDCp-sWRNEg',
        channel: 'ND-Music',
        channelImg: 'https://yt3.ggpht.com/ytc/AKedOLT1QTR7QC7maCSn6OH0a1uRssf2MSRMbksxGCn-=s68-c-k-c0x00ffffff-no-rj',
        views: '64K',
        timestampe: '3 months ago'
    }
]

function Recommended() {
    return (
        <div className="recommended">
            {youtubeVids.map((vid, indx) => (
                <VideoItems key={indx} 
                            title={vid.title}
                            thumbnail={vid.thumbnail}
                            channel={vid.channel}
                            channelImg={vid.channelImg}
                            viewCount={vid.views}
                            uploadDate={vid.timestampe} 
                            />
            ))}
        </div>
    )
}

export default Recommended
