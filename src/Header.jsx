import React from 'react'
import Menu from '@mui/icons-material/Menu';
import SearchOutlined from "@mui/icons-material/SearchOutlined"
import VideoCallIcon from '@mui/icons-material/VideoCallOutlined';
import AppsIcon from '@mui/icons-material/AppsOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import Avatar from '@material-ui/core/Avatar'

function Header() {
    return (
        <div className="header" >
            <div className="header__left">
                <Menu />
                <img 
                    className="header__logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9e/YouTube_Logo_%282013-2017%29.svg" 
                    alt="" 
                />
            </div>

            <div className="header__center">
                <input className="header__input" type="text" placeholder="Search" />
                <div className="header__search-cont">
                    <SearchOutlined className="header__search-icon" />
                </div>
            </div>

                <div className="header__right">
                <VideoCallIcon className="header__right__icon" />
                <AppsIcon className="header__right__icon" />
                <NotificationsIcon className="header__right__icon" />
                <Avatar
                    className="header__right__icon header__right__avatar"
                    alt="avatar"
                    src="https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.6435-9/135637488_1891484974340668_3102476322743592132_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFcXF_8NLCRIWV6NGaMyCq6RvVGE0iDeTtG9UYTSIN5O3MXBD5ofV7IDVW2gMLuxu2aaxWYYTPuHrPM1sBxv9_l&_nc_ohc=TW-aggDO3IwAX_cgZ8t&_nc_ht=scontent.fmnl3-2.fna&oh=9d47197237aad9b74d8b97972b844729&oe=61C5507E"
                />
            </div>
        </div>
    )
}

export default Header
