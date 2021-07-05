import React from 'react'
import { Dashboard, Poll, Assignment, Whatshot, AssignmentInd, ShoppingBasket, MonetizationOn, Mail, Feedback, Message, Person } from "@material-ui/icons"
import './SideBar.css'
import { Link } from 'react-router-dom'

export default function SideBar() {
    return (
        <div className="SideBar">

            <div className="SideBarWrapper">
                <div className="SideBarMenu">
                    <h3 className="Title">Dashboard</h3>

                    <ul className="List">
                        <Link to="/" className="Link">
                            <li className="Item active">
                                <Dashboard className="Icon" />
                                Home
                            </li>
                        </Link>
                        <li className="Item">
                            <Poll className="Icon" />
                            Analytics
                        </li>
                        <li className="Item">
                            <Whatshot className="Icon" />
                            Hot
                        </li>
                    </ul>
                </div>
                <div className="SideBarMenu">
                    <h3 className="Title">Quick Menu</h3>
                    <ul className="List">
                        <Link to="/users" className="Link">
                        <li className="Item">
                            <AssignmentInd className="Icon" />
                            Users
                        </li>
                        </Link>

                        <li className="Item">
                            <ShoppingBasket className="Icon" />
                            Products
                        </li>
                        <li className="Item">
                            <MonetizationOn className="Icon" />
                            Transactions
                        </li>
                    </ul>
                </div>
                <div className="SideBarMenu">
                    <h3 className="Title">Notifications</h3>
                    <ul className="List">
                        <li className="Item">
                            <Mail className="Icon" />
                            Mail
                        </li>
                        <li className="Item">
                            <Feedback className="Icon" />
                            Feedback
                        </li>
                        <li className="Item">
                            <Message className="Icon" />
                            Message
                        </li>
                    </ul>
                </div>
                <div className="SideBarMenu">
                    <h3 className="Title">Staff</h3>
                    <ul className="List">
                        <li className="Item">
                            <Assignment className="Icon" />
                            Manager
                        </li>
                    </ul>
                </div>
                <div className="SideBarMenu">
                    <h3 className="Title">Personal</h3>
                    <ul className="List">
                        <li className="Item">
                            <Person className="Icon" />
                            Information
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}
