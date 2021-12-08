import './App.css';
import Header from './Header'
import Sidebar, { SidebarSmall } from './Components/Sidebar/Sidebar'
import SidebarOverlay from './Components/Sidebar/SidebarOverlay';
import Recommended from './Components/Recommended/Recommended'
import Search from './Components/Search/Search'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { initAuth } from './OAuth2.0';
import { useWindowSize } from './utils';
import Hidden from './Components/Hidden/Hidden'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxLkhjRizHMMeMiRc0DtJHZCbgd5uIaeo",
  authDomain: "clone-497bf.firebaseapp.com",
  projectId: "clone-497bf",
  storageBucket: "clone-497bf.appspot.com",
  messagingSenderId: "207158038962",
  appId: "1:207158038962:web:b510884ea8512ee39894ab",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');

function App() {
  const [IsSignedIn, setIsSignedIn] = useState(false)
  const [UserProfile, setUserProfile] = useState({})

  const [ToggleSidebar, setToggleSidebar] = useState(true)
  const [ToggleMidSidebar, setToggleMidSidebar] = useState(false)

  const { handleClientLoad, handleAuthClick, handleSignOutClick } = initAuth(setIsSignedIn, setUserProfile)
  const [screenWidth, _] = useWindowSize()

  useEffect(() => {
    console.log('Loading...')
    handleClientLoad()
  }, [])

  return (
    <div className="app">
      <Router>
        <Header IsSignedIn={IsSignedIn} 
                onSignIn={handleAuthClick} 
                onSignOut={handleSignOutClick}
                UserProfile={UserProfile}
                setToggleSidebar={setToggleSidebar}
                setToggleMidSidebar={setToggleMidSidebar}
                screenWidth={screenWidth} />
        <div className="app__viewer">
          {
            screenWidth >= 1313 && ToggleSidebar ? <Sidebar />
            : screenWidth >= 792 ? <SidebarSmall />
            : <></>
          }
          {(ToggleMidSidebar &&
            <>
              <SidebarOverlay setToggleMidSidebar={setToggleMidSidebar} />
              <div className="dark-overlay"></div>
            </>
          )}

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
            <Route exact path="/xxHiddenxx">
              <Hidden />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
