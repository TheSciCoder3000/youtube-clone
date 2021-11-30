import React from 'react'
import SidebarMenuItems from './SidebarMenuItems'
import { NavLink } from 'react-router-dom'

import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlined from '@mui/icons-material/SubscriptionsOutlined';
import { 
    GamesOutlined, HistoryOutlined, 
    LiveTvOutlined, MovieOutlined, 
    OndemandVideoOutlined, VideoLibraryOutlined, 
    WatchLaterOutlined, WorkspacePremiumOutlined,
    CheckroomOutlined, SportsBaseballOutlined,
    SettingsOutlined, FlagOutlined,
    HelpOutline, FeedbackOutlined
} from '@mui/icons-material';



function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__inital-menus">
                <NavLink className="sidebar__navlinks" exact to="/" activeClassName="sidebar-navlink-selected"><SidebarMenuItems Icon={HomeIcon} itemName="Home" /></NavLink>
                <NavLink className="sidebar__navlinks" to="/explore" activeClassName="sidebar-navlink-selected"><SidebarMenuItems Icon={ExploreOutlinedIcon} itemName="Explore" /></NavLink>
                <NavLink className="sidebar__navlinks" to="/subscription" activeClassName="sidebar-navlink-selected"><SidebarMenuItems Icon={SubscriptionsOutlined} itemName="Subscriptions" /></NavLink>
            </div>
            <hr className="sidebar__hr" />
            <div className="sidebar__secondary-menus">
                <SidebarMenuItems Icon={VideoLibraryOutlined} itemName="Libary" />
                <SidebarMenuItems Icon={HistoryOutlined} itemName="History" />
                <SidebarMenuItems Icon={OndemandVideoOutlined} itemName="Your videos" />
                <SidebarMenuItems Icon={WatchLaterOutlined} itemName="Watch later" />
            </div>
            <hr className="sidebar__hr" />
            <div className="sidebar__more">
                <h3 className="sidebar__more__section-header">MORE FROM YOUTUBE</h3>
                <SidebarMenuItems Icon={WorkspacePremiumOutlined} itemName="YouTube Premium" />
                <SidebarMenuItems Icon={MovieOutlined} itemName="Movies" />
                <SidebarMenuItems Icon={GamesOutlined} itemName="Gaming" />
                <SidebarMenuItems Icon={LiveTvOutlined} itemName="Live" />
                <SidebarMenuItems Icon={CheckroomOutlined} itemName="Fashion and Beauty" />
                <SidebarMenuItems Icon={SportsBaseballOutlined} itemName="Sports" />
            </div>
            <hr className="sidebar__hr" />
            <div className="sidebar__settings">
                <SidebarMenuItems Icon={SettingsOutlined} itemName="Settings" />
                <SidebarMenuItems Icon={FlagOutlined} itemName="Report History" />
                <SidebarMenuItems Icon={HelpOutline} itemName="Help" />
                <SidebarMenuItems Icon={FeedbackOutlined} itemName="Send Feedback" />
            </div>
            <hr className="sidebar__hr" />
            <div className="some-content">
                <p>This Youtube Clone was built to show case my skills and knowledge in using React js and firebase</p>
                <br />
                <p>This was not used with any malicious intent whatsoever.</p>
            </div>
        </div>
    )
}

export default Sidebar
