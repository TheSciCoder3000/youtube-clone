import './App.css';
import Header from './Header'
import Sidebar, { SidebarSmall } from './Components/Sidebar/Sidebar'
import Recommended from './Components/Recommended/Recommended'
import Search from './Components/Search/Search'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { initAuth } from './OAuth2.0';
import { useWindowSize } from './utils';

function App() {
  const [IsSignedIn, setIsSignedIn] = useState(false)
  const [UserProfile, setUserProfile] = useState({})
  const { handleClientLoad, handleAuthClick, handleSignOutClick } = initAuth(setIsSignedIn, setUserProfile)
  const [screenWidth, screenHeight] = useWindowSize()

  useEffect(() => {
    console.log('Loading...')
    handleClientLoad()

    // window.gapi.load('auth2', () => {
    //   window.gapi.auth2.init({
    //     client_id: '647581798523-kvn1bjhg4pcjlf9co0vfom7vm99b1qff.apps.googleusercontent.com'
    //   })
    //   console.log('API initialized')

    //   window.gapi.load('signin2', () => {
    //     let params = {
    //       onSuccess: () => {
    //         console.log('User finish signing in')
    //       }
    //     }
    //     window.gapi.signin2.render('sign-in-btn', params)
    //   })
    // })
  }, [])

  return (
    <div className="app">
      <Router>
        <Header IsSignedIn={IsSignedIn} 
                onSignIn={handleAuthClick} 
                onSignOut={handleSignOutClick}
                UserProfile={UserProfile}
                screenWidth={screenWidth} />
        <div className="app__viewer">
          {
            screenWidth >= 1313 ? <Sidebar />
            : screenWidth >= 792 ? <SidebarSmall />
            : <></>
          }

          <Switch>
            <Route exact path="/search">
              <div className="app__no-results">
                <h3>There are no Results</h3>
                <p>please search for something else</p>
              </div>
            </Route>
            <Route path={`/search/:searchData`}>
              <Search IsSignedIn={IsSignedIn} />
            </Route>
            <Route exact path="/">
              <Recommended />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
