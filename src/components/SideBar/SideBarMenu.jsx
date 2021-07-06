import "./SideBar.css"
import SideBarItem from "./SideBarItem";

export default function SideBarMenu(props) {
    const sideBarItem = props.SideBarItem;
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
                                status={value.status}
                            /> 
                            
                        ))


                        // sideBarItem.map((obj) => (
                        //     <SideBarItem
                        //     key={obj.key}
                        //     SideBarItemName={value.SideBarItemName}
                        //     SideBarItemIcon={value.SideBarItemIcon}
                        //     />
                        // ))

                    }

            </ul>
        </div>
    )
}
