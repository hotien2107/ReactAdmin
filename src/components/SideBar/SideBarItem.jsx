import "./SideBar.css"
import { Link, useLocation } from "react-router-dom";




export default function SideBarItem(props) {
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    const Icon = props.SideBarItemIcon;
    let status = "";
    if (splitLocation[1] === "") {
        if (props.SideBarItemName === "Home"){
            status = "active";
        } else { 
            status = "";
        }
    } else if (props.SideBarItemName.indexOf(splitLocation[1]) >= 0) {
        status = "active";
    } else {
        status = "";
    }
    
    if (props.statusMenu === "Show") {
        return ( 
            <Link to={"/" + props.SideBarItemName} className="Link">
                <li className={"Item " + status}>
                    <Icon className="Icon mr5" />
                    {props.SideBarItemName}
                </li>
            </Link>
        )
    } else {
        return ( 
            <Link to={"/" + props.SideBarItemName} className="Link">
                <li className={"Item " + status}>
                    <Icon className="Icon" />
                </li>
            </Link>
        )
    }
}
