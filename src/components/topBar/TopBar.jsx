import React from 'react'
import './TopBar.css'
import { Notifications, Language, Settings } from '@material-ui/icons';

export default function TopBar() {
    return (
        <div className="TopBar">
            <div className="TopBarWrapper">
                <div className="TopBarLeft">
                    <div className="logo">
                        <span>VTadmin</span>
                        </div>
                </div>
                <div className="TopBarRight">
                    <div className="TopBarIcon">
                        <Notifications/>
                        <span className="TopBarIconBadge">2</span>
                    </div>
                    <div className="TopBarIcon">
                        <Language/>
                        <span className="TopBarIconBadge">2</span>
                    </div>
                    <div className="TopBarIcon">
                        <Settings/>
                        {/* <span className="TopBarIconBadge">2</span> */}
                    </div>
                    <img src="https://img.wattpad.com/cover/158753309-256-k335088.jpg" alt="" className="Avatar" />
                </div>
            </div>
        </div>
    )
}
