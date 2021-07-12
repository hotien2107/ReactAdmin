import { Dashboard, Poll, Assignment, Whatshot, AssignmentInd, ShoppingBasket, MonetizationOn, Mail, Feedback, Message, Person, MenuOpen, Menu } from "@material-ui/icons"
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
                SideBarItemName: "Users",
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
        SideBarMenuName: "Notifications",
        SideBarItem: [
            {
                SideBarItemName: "Mail",
                SideBarItemIcon: Mail,

            },
            {
                SideBarItemName: "Feedback",
                SideBarItemIcon: Feedback,

            },
            {
                SideBarItemName: "Message",
                SideBarItemIcon: Message,

            },
        ],

    },
    {
        SideBarMenuName: "Manager",
        SideBarItem: [
            {
                SideBarItemName: "Staffs",
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

let Status = "Hide";


export default function SideBar() {

    const [status, setStatus] = useState(Status);

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
