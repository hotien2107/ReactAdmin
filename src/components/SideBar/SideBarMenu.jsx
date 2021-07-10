import "./SideBar.css"
import SideBarItem from "./SideBarItem";

export default function SideBarMenu(props) {
    const sideBarItem = props.SideBarItem;
    if (props.statusMenu === "Show") {
        return (
            <div className="SideBarMenu">
                <h3 className="Title">{props.SideBarMenuName}</h3>
                <ul className="List">
                    {
                        sideBarItem.map((value, key) => (
                            <SideBarItem
                                key={key}
                                SideBarItemName={value.SideBarItemName}
                                SideBarItemIcon={value.SideBarItemIcon}
                                statusMenu={props.statusMenu}
                            />

                        ))
                    }

                </ul>
            </div>
        )
    } else {
        return (
            <div className="SideBarMenu">
                <ul className="List">
                    {
                        sideBarItem.map((value, key) => (
                            <SideBarItem
                                key={key}
                                SideBarItemName={value.SideBarItemName}
                                SideBarItemIcon={value.SideBarItemIcon}
                                statusMenu={props.statusMenu}
                            />

                        ))
                    }

                </ul>
            </div>
        ) 
    }
}
