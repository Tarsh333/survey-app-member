import React from 'react'
import { Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {GoHome} from 'react-icons/go'
import {BiHash,BiMessageDetail} from 'react-icons/bi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {AiOutlinePlusCircle} from 'react-icons/ai'
const Sidebar = () => {
    return (

        <Stack gap={3} className="sidebar">
            <div><Link to="#explore"><BiHash className="sidebar-icon"/><span className="sidebar-text">Explore</span></Link></div>
            <div><Link to="#notifications"><IoMdNotificationsOutline className="sidebar-icon"/><span className="sidebar-text">Notifications</span></Link></div>
            <div><Link to="/add-survey"><AiOutlinePlusCircle className="sidebar-icon"/><span className="sidebar-text">Add Survey</span></Link></div>
        </Stack>

    )
}

export default Sidebar
