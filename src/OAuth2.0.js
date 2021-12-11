const CLIENT_ID = '647581798523-kvn1bjhg4pcjlf9co0vfom7vm99b1qff.apps.googleusercontent.com'
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly'

const gapi = window.gapi
var GoogleAuth

// OAuth2.0 Initialization Function
export function initAuth(setIsSignedIn, setUserProfile) {

    // Load Client Function
    function handleClientLoad() {
        gapi.load('client:auth2', initClient)
    }

    // Client Initialization Function
    function initClient() {
        gapi.client.init({
            discoveryDocs: DISCOVERY_DOCS,
            clientId: CLIENT_ID,
            scope: SCOPES
        }).then(() => {
            GoogleAuth = gapi.auth2.getAuthInstance()

            // Add Update Listenner
            GoogleAuth.isSignedIn.listen(updateSignInStatus)

            // Update the UI
            updateSignInStatus(GoogleAuth.isSignedIn.get())
        })
    }

    // Update Event Handler
    function updateSignInStatus(isSignedIn) {
        // Update react component state
        setIsSignedIn(isSignedIn)

        // If user is signed in, retrieve User Profile Data
        if (isSignedIn) getUserProfile()
    }

    // Sign In Event Handler
    function handleAuthClick() {
        gapi.auth2.getAuthInstance().signIn()
    }

    // Sign Out Event Handler
    function handleSignOutClick() {
        gapi.auth2.getAuthInstance().signOut()
    }

    // Getting User Profile Data Function
    async function getUserProfile() {
        // Get channel name
        let channelName = await gapi.client.youtube.channels.list({
            "part": [
                "id,snippet"
            ],
            "mine": true
        }).then(response => {
            return response.result.items[0].snippet.title
        })

        // Update User Profile State of component
        setUserProfile({
            channelName,
            ...GoogleAuth.currentUser.get().getBasicProfile()
        })
    }

    return { handleClientLoad, handleAuthClick, handleSignOutClick }
}


// ============================== YouTube Query Functions ==============================

// Query by keyword (Main Search Function)
export async function searchByKeyword(keyword, setSearchData) {
    gapi.client.youtube.search.list({
        "part": [
          "id,snippet"
        ],
        "maxResults": 20,
        "q": keyword
    }).then(function(response) {
        // Map Video Ids
        let vidIds = response.result.items.map(item => {
            if (item.id.kind == 'youtube#video') return item.id.videoId
        })

        // get video details of video Ids
        let PromiseVidList = videosByVidId(vidIds)

        // Get the channel details
        let PromiseChannelList = channelById(response.result.items.map(item => {
            if (item.id.kind == "youtube#channel") return item.id.channelId
        }))

        // Resolve all promises
        Promise.all([PromiseVidList, PromiseChannelList]).then(function ([VidList, ChannelList]) {
            // Update Component Search Data
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
