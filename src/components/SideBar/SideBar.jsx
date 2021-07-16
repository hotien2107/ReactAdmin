import { Dashboard, Poll, Assignment, Whatshot, AssignmentInd, ShoppingBasket, MonetizationOn, Person, MenuOpen, Menu } from "@material-ui/icons"
import './SideBar.css'
import SideBarMenu from './SideBarMenu'
import { useState } from "react";


const menu = [
    {
        SideBarMenuName: "Dashboard",
        SideBarItem: [
            {
                SideBarItemName: "Home",
                SideBarItemIcon: Dashboard,
                status: "active"
            },
            {
                SideBarItemName: "Analytics",
                SideBarItemIcon: Poll,

            },
            {
                SideBarItemName: "Hot",
                SideBarItemIcon: Whatshot,
            },
        ],

    },
    {
        SideBarMenuName: "Quick Menu",
        SideBarItem: [
            {
                SideBarItemName: "Films",
                SideBarItemIcon: AssignmentInd,

            },
            {
                SideBarItemName: "Products",
                SideBarItemIcon: ShoppingBasket,

            },
            {
                SideBarItemName: "Transactions",
                SideBarItemIcon: MonetizationOn,

            },
        ],

    },
    {
        SideBarMenuName: "Relationships",
        SideBarItem: [
            {
                SideBarItemName: "Friends",
                SideBarItemIcon: Assignment,

            },
        ],

    },
    {
        SideBarMenuName: "Personal Information",
        SideBarItem: [
            {
                SideBarItemName: "Information",
                SideBarItemIcon: Person,

            },
        ],

    },
];


export default function SideBar() {

    const [status, setStatus] = useState('Hide');

    const changeMenuStatus = () => {
        if (status === "Hide") {
            setStatus("Show");
        } else {
            setStatus("Hide");
        }
    }

    if (status === "Show") {
        return (
            <div className={"SideBar " + status}>
                <div className="MenuIcon">
                    <MenuOpen className="IconInOut" onClick={changeMenuStatus} />
    
                </div>
                <div className="SideBarWrapper">
                    {
                        menu.map((value, key) => (
                            <SideBarMenu
                                key={key}
                                SideBarMenuName={value.SideBarMenuName}
                                SideBarItem={value.SideBarItem}
                                statusMenu={status}
                            />
                        ))
                    }
    
                </div>
    
            </div>
        )
    } else {
        return (
            <div className={"SideBar " + status}>
                <div className="MenuIcon">
                    <Menu className="IconInOut" onClick={changeMenuStatus} />
                </div>
                <div className="SideBarWrapper">
                    {
                        menu.map((value, key) => (
                            <SideBarMenu
                                key={key}
                                SideBarMenuName={value.SideBarMenuName}
                                SideBarItem={value.SideBarItem}
                                statusMenu={status}
                            />
                        ))
                    }
    
                </div>
    
            </div>
        )
    }
    


}
