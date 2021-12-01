const CLIENT_ID = '647581798523-kvn1bjhg4pcjlf9co0vfom7vm99b1qff.apps.googleusercontent.com'
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly'

const gapi = window.gapi
var GoogleAuth

export function initAuth(setIsSignedIn) {
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

            if (GoogleAuth.isSignedIn.get()) {
                setIsSignedIn(true)
                console.log('user is already signed in')
            }
        })
    }

    function updateSignInStatus(isSignedIn) {
        setIsSignedIn(isSignedIn)
        if (isSignedIn) {
            console.log('user is signed in')
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

    return { handleClientLoad, handleAuthClick, handleSignOutClick }
}