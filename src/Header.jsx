import React, { useState } from 'react'
import Menu from '@mui/icons-material/Menu';
import SearchOutlined from "@mui/icons-material/SearchOutlined"
import VideoCallIcon from '@mui/icons-material/VideoCallOutlined';
import AppsIcon from '@mui/icons-material/AppsOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import Avatar from '@material-ui/core/Avatar'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link, useHistory } from 'react-router-dom'

function Header({ IsSignedIn, onSignIn, onSignOut, UserProfile }) {
    const [searchData, setSearchData] = useState('')
    const history = useHistory()

    const onSearchSubmit = (e) => {
        e.preventDefault()
        history.push(`/search/${searchData}`)
    }

    return (
        <div className="header" >
            <div className="header__left">
                <Menu />
                <Link to="/">
                    <img 
                        className="header__logo" 
                        src="https://upload.wikimedia.org/wikipedia/commons/9/9e/YouTube_Logo_%282013-2017%29.svg" 
                        alt="" 
                    />
                </Link>
            </div>

            <div className="header__center">
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

                <div className="header__right">
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
        </div>
    )
}

export default Header
