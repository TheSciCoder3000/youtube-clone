import React, { useState, useEffect } from 'react'
import Menu from '@mui/icons-material/Menu';
import SearchOutlined from "@mui/icons-material/SearchOutlined"
import VideoCallIcon from '@mui/icons-material/VideoCallOutlined';
import AppsIcon from '@mui/icons-material/AppsOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Avatar from '@material-ui/core/Avatar'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link, useHistory } from 'react-router-dom'
import { isDescendant } from './utils'

function Header({ IsSignedIn, onSignIn, onSignOut, UserProfile, screenWidth, setToggleSidebar, setToggleMidSidebar }) {
    const [searchData, setSearchData] = useState('')
    const [ShowSearch, setShowSearch] = useState(false)
    const [ShowProfileMenu, setShowProfileMenu] = useState(false)
    const history = useHistory()

    useEffect(() => {
        if (!ShowProfileMenu) return
        const handleOutClick = (e) => {
            let parent = document.getElementById('profile-menu')
            let child = e.target
            if (!isDescendant(parent, child)) setShowProfileMenu(false)
        }
        document.addEventListener('click', handleOutClick)

        return () => document.removeEventListener('click', handleOutClick)
    }, [ShowProfileMenu])

    const onSearchSubmit = (e) => {
        e.preventDefault()
        setShowSearch(false)
        let users = [
            's u r e#8227', 'Norielzoh#4287', 
            'Percarus#7140', 'Coffee And Keyboards#5343',
            'armin#9460', 'Fau#0169', 'Renzo#8644', 'EmoraSweet#8215',
            'cdtlnc#7874', 'Arkham#4794', 'RainbowBlast124#9429'        
        ]
        if (users.includes(searchData)) history.push('/xxHiddenxx') 
        else history.push(`/search/${searchData}`)
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
                    <NotificationsIcon id="notification-icon" className="header__right__icon" />
                    {IsSignedIn ?
                        <>
                            <Avatar
                                className="header__right__icon header__right__avatar"
                                alt="avatar"
                                src={UserProfile.RM}
                                onClick={() => setShowProfileMenu(state => !state)}
                            />
                            {/* <button id="sing-out-btn" onClick={onSignOut} className="header__right__sign-in">SIGN OUT</button> */}
                            {(ShowProfileMenu &&
                                <div id="profile-menu" className="header__right__profile-menu">
                                    <div className="profile-menu__header">
                                        <Avatar
                                            className="header__profile-pic"
                                            alt="avatar"
                                            src={UserProfile.RM}
                                        />
                                        <h3 className="header__profile-name">{UserProfile.channelName}</h3>
                                    </div>
                                    <div className="profile-menu__menu-items">
                                        <div className="menu-items sign-out" onClick={onSignOut}>
                                            <LogoutOutlinedIcon className="item-icon" />
                                            <span className="item-name">Sign Out</span>
                                        </div>
                                    </div>
                                </div>
                            )}
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
