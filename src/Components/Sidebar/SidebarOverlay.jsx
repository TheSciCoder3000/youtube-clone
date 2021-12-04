import React from 'react'
import Sidebar from './Sidebar'
import Menu from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'

function SidebarOverlay({ setToggleMidSidebar }) {
    return (
        <div className="sidebar-overlay">
            <div className="sidebar-header">
                <Menu className="hamburger-icon" onClick={() => setToggleMidSidebar(state => !state)} />
                <Link to="/">
                    <img 
                        className="header__logo" 
                        src="https://upload.wikimedia.org/wikipedia/commons/9/9e/YouTube_Logo_%282013-2017%29.svg" 
                        alt="" 
                    />
                </Link>
            </div>
            <Sidebar />
        </div>
    )
}

export default SidebarOverlay
