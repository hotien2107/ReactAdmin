import { Dashboard, Poll, Assignment, Whatshot, AssignmentInd, ShoppingBasket, MonetizationOn, Mail, Feedback, Message, Person } from "@material-ui/icons"
import './SideBar.css'
import SideBarMenu from './SideBarMenu'


const Menu = [
    {
        SideBarMenuName: "Dashboard",
        SideBarItem: [
            {
                SideBarItemName:"Home",
                SideBarItemIcon: Dashboard,
                status: "active"
            },
            {
                SideBarItemName:"Analytics",
                SideBarItemIcon: Poll,
                status: "inactive"
            },
            {
                SideBarItemName:"Hot",
                SideBarItemIcon: Whatshot,
                status: "inactive"
            },
        ],

    },
    {
        SideBarMenuName: "Quick Menu",
        SideBarItem: [
            {
                SideBarItemName:"Users",
                SideBarItemIcon: AssignmentInd,
                status: "inactive"
            },
            {
                SideBarItemName:"Products",
                SideBarItemIcon: ShoppingBasket,
                status: "inactive"
            },
            {
                SideBarItemName:"Transactions",
                SideBarItemIcon: MonetizationOn,
                status: "inactive"
            },
        ],

    },
    {
        SideBarMenuName: "Notifications",
        SideBarItem: [
            {
                SideBarItemName:"Mail",
                SideBarItemIcon: Mail,
                status: "inactive"
            },
            {
                SideBarItemName:"Feedback",
                SideBarItemIcon: Feedback,
                status: "inactive"
            },
            {
                SideBarItemName:"Message",
                SideBarItemIcon: Message,
                status: "inactive"
            },
        ],

    },
    {
        SideBarMenuName: "Staff",
        SideBarItem: [
            {
                SideBarItemName:"Manager",
                SideBarItemIcon: Assignment,
                status: "inactive"
            },
        ],

    },
    {
        SideBarMenuName: "Personal Information",
        SideBarItem: [
            {
                SideBarItemName:"Information",
                SideBarItemIcon: Person,
                status: "inactive"
            },
        ],

    },
];

export default function SideBar() {
    
    return (
        <div className="SideBar">
            
            <div className="SideBarWrapper">
                {Menu.map((value, key) => (
                    <SideBarMenu 
                    key={key}
                    SideBarMenuName={value.SideBarMenuName}
                    SideBarItem={value.SideBarItem}
                    status={value.status}
                    />
                ))}

            </div>

        </div>
    )
}
