const CLIENT_ID = '647581798523-kvn1bjhg4pcjlf9co0vfom7vm99b1qff.apps.googleusercontent.com'
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly'

const gapi = window.gapi
var GoogleAuth

export function initAuth(setIsSignedIn, setUserProfile) {
    const authorizeButton = document.getElementById('sign-in-btn')
    const signOutButton = document.getElementById('sign-out-btn')

    function handleClientLoad() {
        gapi.load('client:auth2', initClient)
    }

    function initClient() {
        gapi.client.init({
            discoveryDocs: DISCOVERY_DOCS,
            clientId: CLIENT_ID,
            scope: SCOPES
        }).then(() => {
            GoogleAuth = gapi.auth2.getAuthInstance()
            GoogleAuth.isSignedIn.listen(updateSignInStatus)

            updateSignInStatus(GoogleAuth.isSignedIn.get())
        })
    }

    function updateSignInStatus(isSignedIn) {
        setIsSignedIn(isSignedIn)
        if (isSignedIn) {
            console.log('user is signed in')
            getUserProfile()
        } else {
            console.log('user is signed out')
        }
    }

    function handleAuthClick() {
        gapi.auth2.getAuthInstance().signIn()
    }

    function handleSignOutClick() {
        gapi.auth2.getAuthInstance().signOut()
    }

    function getUserProfile() {
        console.log('retrieving user profile')
        setUserProfile(GoogleAuth.currentUser.get().getBasicProfile())
    }

    return { handleClientLoad, handleAuthClick, handleSignOutClick }
}

export async function searchByKeyword(keyword, setSearchData) {
    console.log('searching...')
    gapi.client.youtube.search.list({
        "part": [
          "id,snippet"
        ],
        "maxResults": 20,
        "q": keyword
    }).then(function(response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response.result);
        let vidIds = response.result.items.map(item => {
            if (item.id.kind == 'youtube#video') return item.id.videoId
        })
        let PromiseVidList = videosByVidId(vidIds)
        let PromiseChannelList = channelById(response.result.items.map(item => {
            if (item.id.kind == "youtube#channel") return item.id.channelId
        }))

        Promise.all([PromiseVidList, PromiseChannelList]).then(function ([VidList, ChannelList]) {
            console.log('async vid list', VidList)
            console.log('async channel list', ChannelList.items)
    
            setSearchData({
                items: [
                    ...(ChannelList.items ? ChannelList.items : []),
                    ...VidList.items
                ]
            })
        })
    })
}

async function videosByVidId(vidIdList) {
    console.log('searching vids')
    return gapi.client.youtube.videos.list({
        "part": [
          "snippet, statistics"
        ],
        "id": vidIdList,
        "maxResults": 20
      }).then(function(response) {
          console.log('vid data response', response.result)
          return response.result
      })
}

async function channelById(channelIdList) {
    console.log('searching for channel data')
    return gapi.client.youtube.channels.list({
        "part": [
          "id,statistics,snippet"
        ],
        "id": channelIdList,
        "maxResults": 20
      }).then(function(response) {
          console.log('channel data response ', response.result)
          return response.result
      })
}
