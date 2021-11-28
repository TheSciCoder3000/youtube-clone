import React from 'react'

function SidebarMenuItems({ Icon, itemName }) {
    return (
        <div className="sidebar__menu-item">
            <Icon className="sidebar__menu-item__icon" />
            {itemName}
        </div>
    )
}

export default SidebarMenuItems
