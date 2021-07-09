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
                
            },
            {
                SideBarItemName:"Hot",
                SideBarItemIcon: Whatshot,
                
            },
        ],

    },
    {
        SideBarMenuName: "Quick Menu",
        SideBarItem: [
            {
                SideBarItemName:"Users",
                SideBarItemIcon: AssignmentInd,
                
            },
            {
                SideBarItemName:"Products",
                SideBarItemIcon: ShoppingBasket,
                
            },
            {
                SideBarItemName:"Transactions",
                SideBarItemIcon: MonetizationOn,
                
            },
        ],

    },
    {
        SideBarMenuName: "Notifications",
        SideBarItem: [
            {
                SideBarItemName:"Mail",
                SideBarItemIcon: Mail,
                
            },
            {
                SideBarItemName:"Feedback",
                SideBarItemIcon: Feedback,
                
            },
            {
                SideBarItemName:"Message",
                SideBarItemIcon: Message,
                
            },
        ],

    },
    {
        SideBarMenuName: "Staff",
        SideBarItem: [
            {
                SideBarItemName:"Manager",
                SideBarItemIcon: Assignment,
                
            },
        ],

    },
    {
        SideBarMenuName: "Personal Information",
        SideBarItem: [
            {
                SideBarItemName:"Information",
                SideBarItemIcon: Person,
                
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
