import "./SideBar.css"
import { Link, useLocation } from "react-router-dom";




export default function SideBarItem(props) {
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    const Icon = props.SideBarItemIcon;
    let status = splitLocation[1] === props.SideBarItemName ? "active" : "";

    return (
        <Link to={"/" + props.SideBarItemName} className="Link ">
            <li className={"Item " + status}>
                <Icon className="Icon" />
                {props.SideBarItemName}
            </li>
        </Link>
    )
}
