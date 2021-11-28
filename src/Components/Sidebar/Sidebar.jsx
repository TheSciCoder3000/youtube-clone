import React from 'react'
import SidebarMenuItems from './SidebarMenuItems'

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
                <SidebarMenuItems Icon={HomeIcon} itemName="Home" />
                <SidebarMenuItems Icon={ExploreOutlinedIcon} itemName="Explore" />
                <SidebarMenuItems Icon={SubscriptionsOutlined} itemName="Subscriptions" />
            </div>
            <div className="sidebar__secondary-menus">
                <SidebarMenuItems Icon={VideoLibraryOutlined} itemName="Libary" />
                <SidebarMenuItems Icon={HistoryOutlined} itemName="History" />
                <SidebarMenuItems Icon={OndemandVideoOutlined} itemName="Your videos" />
                <SidebarMenuItems Icon={WatchLaterOutlined} itemName="Watch later" />
            </div>

            <div className="sidebar__more">
                <h3 className="sidebar__more__section-header">More From Youtube</h3>
                <SidebarMenuItems Icon={WorkspacePremiumOutlined} itemName="Youtube Premium" />
                <SidebarMenuItems Icon={MovieOutlined} itemName="Movies" />
                <SidebarMenuItems Icon={GamesOutlined} itemName="Gaming" />
                <SidebarMenuItems Icon={LiveTvOutlined} itemName="Live" />
                <SidebarMenuItems Icon={CheckroomOutlined} itemName="Fashion and Beauty" />
                <SidebarMenuItems Icon={SportsBaseballOutlined} itemName="Sports" />
            </div>
            <div className="sidebar__settings">
                <SidebarMenuItems Icon={SettingsOutlined} itemName="Settings" />
                <SidebarMenuItems Icon={FlagOutlined} itemName="Report History" />
                <SidebarMenuItems Icon={HelpOutline} itemName="Help" />
                <SidebarMenuItems Icon={FeedbackOutlined} itemName="Send Feedback" />
            </div>
        </div>
    )
}

export default Sidebar
