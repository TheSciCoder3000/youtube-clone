import React from 'react'

function SidebarMenuItems({ Icon, itemName }) {
    return (
        <div className="sidebar__menu-item">
            <Icon className="sidebar__menu-item__icon" />
            <span className="sidebar__menu-item_title">{itemName}</span>
        </div>
    )
}

export default SidebarMenuItems
