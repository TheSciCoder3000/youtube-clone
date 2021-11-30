let ytdElements = document.querySelectorAll('ytd-rich-item-renderer.ytd-rich-grid-row')
let ytdData = []
for (let i in ytdElements) {
    if (i > 8) break
    let ytdElmt = ytdElements[i].querySelector('.style-scope.ytd-rich-item-renderer')
    console.log(ytdElmt)
    
    let thumbnail = ytdElmt.querySelector('#img').getAttribute('src')
    let title = ytdElmt.querySelector('#video-title').innerText
    let channelImg = ytdElmt.querySelector('#avatar').querySelector('img').getAttribute('src')
    let channel = ytdElmt.querySelector('.ytd-channel-name').innerText
    let views = ytdElmt.querySelector('#metadata-line').children[0].innerText
    let timestamp = ytdElmt.querySelector('#metadata-line').children[1].innerText

    ytdData.push({
        title,
        thumbnail,
        channelImg,
        channel,
        views,
        timestamp
    })
}
console.log(ytdData)

let data = [
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