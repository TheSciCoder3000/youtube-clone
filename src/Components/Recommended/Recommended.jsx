import React from 'react'
import VideoItems from './VideoItems'

const youtubeVids = [
    {
        "title": 'Alan Walker Gold Greatest Hits',
        "thumbnail": 'https://i.ytimg.com/vi/51rEkz-WZag/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRZzSAEJXgaJKk7Cl0uIEzg9ah4Q',
        "channel": 'king EDM',
        "channelImg": 'https://yt3.ggpht.com/ytc/AKedOLQ7vRuKiElVn3TJBM8hduQJgSs-N87Kc_Jo84NrPQ=s68-c-k-c0x00ffffff-no-rj',
        "views": '1K',
        "timestampe": '7 months ago'
    },
    {
        "title": 'Most Emotional & Sad Violin, piano Music',
        "thumbnail": 'https://i.ytimg.com/vi/8WweT4b_Dx0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA04pB7PDESjBZbTWjlygto3_SdMg',
        "channel": 'Time Music',
        "channelImg": 'https://yt3.ggpht.com/ytc/AKedOLRkeCKECTuw3Ygbu4cpLGJIidhG6AK5LSf61JbS=s68-c-k-c0x00ffffff-no-rj',
        "views": '19K',
        "timestampe": '5 months ago'
    },
    {
        "title": 'Best Anime Openings & Endings',
        "thumbnail": 'https://i.ytimg.com/vi/EpAlSusAz-4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZKVkHRyIYSzV3NNWWVN094q-IEw',
        "channel": 'Anime Music',
        "channelImg": 'https://yt3.ggpht.com/VX9C3_8EOt4PKaIjjuZy_ZVBK4GQZIB2zpVNigP0RS8WbvkNw16UzUX3x12nRIxteAr0Q60CAw=s68-c-k-c0x00ffffff-no-rj',
        "views": '397K',
        "timestampe": '3 months ago'
    },
    {
        "title": 'My Japanese Playlist [chill & soft]',
        "thumbnail": 'https://i.ytimg.com/vi/ivSj6GoOs2M/hq720_live.jpg?sqp=CKD-kY0G-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAq6_f9YIn0XyhV0n3qhy2c6DdEUA',
        "channel": '1 Hour Japan Music',
        "channelImg": 'https://yt3.ggpht.com/ytc/AKedOLSqraALqTOBLmpp8qjuqsa9N8usnzgi25v7388b=s68-c-k-c0x00ffffff-no-rj',
        "views": '1K',
        "timestampe": '10 minutes ago'
    },
    {
        "title": 'a study playlist to get motivated and focused',
        "thumbnail": 'https://i.ytimg.com/vi/hg9g4atlY5Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfJC2VvIdNjw7YsH-8cFBOasFv-g',
        "channel": 'SUM',
        "channelImg": 'https://yt3.ggpht.com/JSfYGG5DQXLxnC9ECo4HxwMbQOyFGYU115-morqmGQiSOVO7GkHcvoeQdIfXiQ67PX7msdNr28I=s68-c-k-c0x00ffffff-no-rj',
        "views": '274K',
        "timestampe": '1 month ago'
    },
    {
        "title": 'Die For You ft. Grabbitz',
        "thumbnail": 'https://i.ytimg.com/vi/h7MYJghRWt0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRtpmhqj8oEFft3mpQBC3pTi6ZAw',
        "channel": 'VALORANT',
        "channelImg": 'https://yt3.ggpht.com/bTC9q1MMBvuzXZogSeVX-_RJNSJwacY7CkTxIyDXe2KGJMtz7m7P30-klN7-kRoePlo131ELzw=s68-c-k-c0x00ffffff-no-rj',
        "views": '4.5M',
        "timestampe": '6 days ago'
    },
    {
        "title": 'Best Acoustic Japanese Songs 2021',
        "thumbnail": 'https://i.ytimg.com/vi/H3MRwDoQNbs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB24UuAELpIpKUbsj9hQF_LO3cahw',
        "channel": 'ND-Music',
        "channelImg": 'https://yt3.ggpht.com/ytc/AKedOLT1QTR7QC7maCSn6OH0a1uRssf2MSRMbksxGCn-=s68-c-k-c0x00ffffff-no-rj',
        "views": '139K',
        "timestampe": '11 months ago'
    },
    {
        "title": 'Japanese Sad Song',
        "thumbnail": 'https://i.ytimg.com/vi/EaSQZY6E6cs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYvNDi7s_-lmtgFhZoDCp-sWRNEg',
        "channel": 'ND-Music',
        "channelImg": 'https://yt3.ggpht.com/ytc/AKedOLT1QTR7QC7maCSn6OH0a1uRssf2MSRMbksxGCn-=s68-c-k-c0x00ffffff-no-rj',
        "views": '64K',
        "timestampe": '3 months ago'
    },
    {
        "title": "Elon Musk's son, \"X Æ A-12\" aka \"Baby X\" stealing the show during a virtual Starship Presentation.",
        "thumbnail": "https://i.ytimg.com/vi/HDK01stXNKk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9huF1-ShsLCaJgR6pnflxLFLDQA",
        "channelImg": "https://yt3.ggpht.com/FDUumYRxDzzh2RRjBjiL7vf7-hn2zvuwQ4aYaGLIra7jlGJhx3T5w-y62tuVg9wWVkYJBuTxj8o=s68-c-k-c0x00ffffff-no-rj",
        "channel": "SpaceXly",
        "views": "1.1M views",
        "timestamp": "12 days ago"
      },
      {
        "title": "1 Hour Of Best Anime Sad Emotional and Sad Anime OST Mix 2020 - Sad Anime Music Collection 2020",
        "thumbnail": "https://i.ytimg.com/vi/e-jWTsEbGbc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOt7Jp-ELFJOATQLEbLcuHTR2g2A",
        "channelImg": "https://yt3.ggpht.com/ytc/AKedOLRkeCKECTuw3Ygbu4cpLGJIidhG6AK5LSf61JbS=s68-c-k-c0x00ffffff-no-rj",
        "channel": "Time Music",
        "views": "315K views",
        "timestamp": "11 months ago"
      },
      {
        "title": "Optical Illusion Trick Shots ft. Zach King",
        "thumbnail": "https://i.ytimg.com/vi/t8JCJZM8tCw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBiFJwA-FuEBo-R0scpwdyl-b4CIQ",
        "channelImg": "https://yt3.ggpht.com/ytc/AKedOLSjqUC0lSGMdPcnK547t6WwlFc6TG4yj0x8hjfVwg=s68-c-k-c0x00ffffff-no-rj",
        "channel": "Dude Perfect",
        "views": "13M views",
        "timestamp": "2 months ago"
      },
      {
        "title": "How To Build UNSTOPPABLE CONFIDENCE & Start Fixing Your LIFE - Jordan Peterson | JP & Lewis Howes",
        "thumbnail": "https://i.ytimg.com/vi/FG8lsBMGrWo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBzSKAv1NyaURIbiH8is0sGUvuTw",
        "channelImg": "https://yt3.ggpht.com/LhhhOn_F6U56b3kYQan7BOkPrbY0fQ3ELVueSojeXHSGD4gF54Z1z6SVLCxDyN-5DKE-Emf_og=s68-c-k-c0x00ffffff-no-rj",
        "channel": "SUCCESS CHASERS",
        "views": "273K views",
        "timestamp": "4 months ago"
      },
      {
        "title": "Elon Musk is About to Become Humanity’s First Trillionaire",
        "thumbnail": "https://i.ytimg.com/vi/tWAI71gNd1k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2bHY7YANI9KXpnrTr6x9nVGynPw",
        "channelImg": "https://yt3.ggpht.com/ytc/AKedOLQSVa9UH7rIrk5fWAdMfDdfH8PksfJqjhx5eV0-=s68-c-k-c0x00ffffff-no-rj",
        "channel": "Futurity",
        "views": "109K views",
        "timestamp": "4 weeks ago"
      },
      {
        "title": "Making MrBeast’s Squid Game in 10 Days",
        "thumbnail": "https://i.ytimg.com/vi/VQcO_PYVx3o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBFNU0d4mp6o-7YsOi2H1H3TLNHg",
        "channelImg": "https://yt3.ggpht.com/ytc/AKedOLQziW_MlRPg4FTDzbliamAt5FS96zXsWD8zI5-13Q=s68-c-k-c0x00ffffff-no-rj",
        "channel": "SoKrispyMedia",
        "views": "4.9M views",
        "timestamp": "2 days ago"
      },
      {
        "title": "We Remade the Jurassic Park T-Rex with Modern VFX",
        "thumbnail": "https://i.ytimg.com/vi/lUUQDbsV8Gw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhAvAiec9Yy3UZlVPoGueEXxuuEA",
        "channelImg": "https://yt3.ggpht.com/ytc/AKedOLT1n0dNMBScNd3IntFE65xyX3r_zgaqV0zTtuOXxg=s68-c-k-c0x00ffffff-no-rj",
        "channel": "Corridor Crew",
        "views": "1M views",
        "timestamp": "1 day ago"
      },
      {
        "title": "How Tom Scott & Mr. Beast use APIs to update their videos programmatically",
        "thumbnail": "https://i.ytimg.com/vi/JjXBrJfp5TE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYwSh_Z2BGuuP1g8PxXLWhSzfbDQ",
        "channelImg": "https://yt3.ggpht.com/ytc/AKedOLTcIl6kKt3lEPJEySUf_hpHiKDKiFeo9eWPReLysQ=s68-c-k-c0x00ffffff-no-rj",
        "channel": "Fireship",
        "views": "337K views",
        "timestamp": "1 year ago"
      },
      {
        "title": "Making Of SHANG CHI AND THE LEGEND OF THE TEN RINGS Part 2 - Best Of Behind The Scenes | Disney+",
        "thumbnail": "https://i.ytimg.com/vi/MhLyfU0BNVw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZq705bSFQ00GiJbavRWSo3In2QQ",
        "channelImg": null,
        "channel": "STREAM WARS",
        "views": "542K views",
        "timestamp": "2 weeks ago"
      }
]

function Recommended() {
    return (
        <div className="app__viewer__main recommended">
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
