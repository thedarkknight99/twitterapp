import React from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from '@material-ui/core'

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar-twitter-icon"/>
            <SidebarOptions active Icons={HomeIcon} text="Home"/>
            <SidebarOptions Icons={SearchIcon} text="Explore"/>
            <SidebarOptions Icons={NotificationsNoneIcon} text="Notifications"/>
            <SidebarOptions Icons={MailOutlineIcon} text="Messages"/>
            <SidebarOptions Icons={BookmarkBorderIcon} text="Bookmarks"/>
            <SidebarOptions Icons={ListAltIcon} text="List"/>
            <SidebarOptions Icons={PermIdentityIcon} text="Profile"/>
            <SidebarOptions Icons={MoreHorizIcon} text="More"/>
            <Button className="sidebar-btn-tweet" fullWidth>Tweet</Button>

        </div>
    )
}

export default Sidebar
