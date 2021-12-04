import React, { useState } from 'react'
import Menu from '@mui/icons-material/Menu';
import SearchOutlined from "@mui/icons-material/SearchOutlined"
import VideoCallIcon from '@mui/icons-material/VideoCallOutlined';
import AppsIcon from '@mui/icons-material/AppsOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Avatar from '@material-ui/core/Avatar'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link, useHistory } from 'react-router-dom'

function Header({ IsSignedIn, onSignIn, onSignOut, UserProfile, screenWidth, setToggleSidebar, setToggleMidSidebar }) {
    const [searchData, setSearchData] = useState('')
    const [ShowSearch, setShowSearch] = useState(false)
    const history = useHistory()

    const onSearchSubmit = (e) => {
        e.preventDefault()
        setShowSearch(false)
        history.push(`/search/${searchData}`)
    }

    const onMenuClick = () => {
        if (screenWidth >= 1313) setToggleSidebar(sidebarState => !sidebarState)
        else setToggleMidSidebar(state => !state)
    }

    const onSearchBtnClick = () => setShowSearch(true)

    return (
        <div className="header" >
            <div className="header__left">
                {(ShowSearch ?
                    <ArrowBackOutlinedIcon onClick={() => setShowSearch(false)} className="search-back-icon" />
                    :
                    <>
                        <Menu className="hamburger-icon" onClick={onMenuClick} />
                        <Link to="/">
                            <img 
                                className="header__logo" 
                                src="https://upload.wikimedia.org/wikipedia/commons/9/9e/YouTube_Logo_%282013-2017%29.svg" 
                                alt="" 
                            />
                        </Link>
                    </>
                )}
                
            </div>

            {((screenWidth >= 792 || ShowSearch) &&
                <div style={
                    ShowSearch ? { flex: 0.97 }
                    : {}
                } className="header__center">
                    <form onSubmit={onSearchSubmit}>
                        <input  className="header__input" 
                                type="text" 
                                placeholder="Search" 
                                value={searchData} 
                                onChange={e => 
                                setSearchData(e.target.value)}
                                on />
                    </form>
                    <Link to={`/search/${searchData}`} className="header__search-cont">
                        <SearchOutlined className="header__search-icon" />
                    </Link>
                </div>
            )}

            {(!ShowSearch &&
                <div className="header__right">
                    {(screenWidth <= 791 &&
                        <div className="search-icon-container" onClick={onSearchBtnClick}>
                            <SearchOutlined className="header__search-icon" />
                        </div>
                    )}
                    <VideoCallIcon className="header__right__icon" />
                    <AppsIcon className="header__right__icon" />
                    <NotificationsIcon className="header__right__icon" />
                    {IsSignedIn ?
                        <>
                            <Avatar
                                className="header__right__icon header__right__avatar"
                                alt="avatar"
                                src={UserProfile.RM}
                            />
                            <button id="sing-out-btn" onClick={onSignOut} className="header__right__sign-in">SIGN OUT</button>
                        </>
                        :
                        <button id="sign-in-btn" onClick={onSignIn} className="header__right__sign-in">
                            <AccountCircleOutlinedIcon className="sign-in__user-icon" /> SIGN IN
                        </button>
                    }
                </div>
            )}
        </div>
    )
}

export default Header
