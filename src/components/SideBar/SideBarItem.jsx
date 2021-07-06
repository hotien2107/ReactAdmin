import "./SideBar.css"
import { Link } from "react-router-dom";
import { useState } from 'react';



export default function SideBarItem(props) {
    let Status = props.status;
    const Icon = props.SideBarItemIcon;
    const [status, setStatus] = useState(Status);
    const checkFocus = () =>{
        setStatus("active");
    }
    const dontFocus = () =>{
        setStatus("inactive");
    }
    return (
        <Link to={"/" + props.SideBarItemName} className="Link" onFocus={checkFocus} onBlur={dontFocus}> 
            <li className={"Item " + status}>
                <Icon className="Icon" />
                {props.SideBarItemName}
            </li>
        </Link>
    )
}
