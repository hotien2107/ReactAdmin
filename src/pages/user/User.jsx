import "./User.css"
import {Link} from "react-router-dom"
import { AccountBox, Event, PhoneAndroid, Email, Facebook, Publish } from "@material-ui/icons"
import { useState } from "react";

export default function User() {
    let zoomStatus = "hide";
    const [ZoomStatus, setZoomStatus] = useState(zoomStatus);

    const ZoomIn = () => {
        setZoomStatus("show");
    }

    const ZoomOut = () => {
        setZoomStatus("hide");
    }
    return (
        <div className="UserPage">
            <div className="UserPageTitle">Edit User</div>
            <div className="UserPageContainer">

                <div className="UserPageInfo">
                    <div className="UserPageInfoBasic">
                        <img src="https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1.jpg" alt="" className="UserPageInfoAvt" />
                        <div className="UserPageInfoNameAndJob">
                            <div className="UserPageInfoName">Hồ Hoàng Việt Tiến</div>
                            <div className="UserPageInfoJob">
                                Front-end Developer
                            </div>
                        </div>
                    </div>
                    <div className="UserPageInfoDetail">
                        <div className="UserPageInfoDetailList">
                            <div className="UserPageInfoDetailListTitle">
                                Account
                            </div>
                            <div className="UserPageInfoDetailItem">
                                <AccountBox className="Icon" />
                                Hồ Hoàng Việt Tiến
                            </div>
                            <div className="UserPageInfoDetailItem">
                                <Event className="Icon" />
                                21.07.2000
                            </div>
                        </div>
                        <div className="UserPageInfoDetailList">
                            <div className="UserPageInfoDetailListTitle">
                                Contact
                            </div>
                            <div className="UserPageInfoDetailItem">
                                <PhoneAndroid className="Icon" />
                                +84 823 892 244
                            </div>
                            <div className="UserPageInfoDetailItem">
                                <Email className="Icon" />
                                hotien2107@gmail.com
                            </div>
                            <div className="UserPageInfoDetailItem">
                                <Facebook className="Icon" />
                                fb.com/tien.hohoang.7
                            </div>
                        </div>
                    </div>
                </div>
                <div className="UserPageEdit">
                    <div className="UserPageEditTitle">Edit</div>
                    <div className="UserPageEditContainer">
                        <div className="UserPageEditText">

                            <div className="UserPageEditTextLabel">
                                <div className="UserPageEditTextItemTitle">
                                    Username
                                </div>
                                <input type="text" placeholder="hotien2107" className="UserPageEditTextItemInput" />
                            </div>
                            <div className="UserPageEditTextLabel">
                                <div className="UserPageEditTextItemTitle">
                                    Full Name
                                </div>
                                <input type="text" placeholder="Hồ Hoàng Việt Tiến" className="UserPageEditTextItemInput" />
                            </div>
                            <div className="UserPageEditTextLabel">
                                <div className="UserPageEditTextItemTitle">
                                    Email
                                </div>
                                <input type="text" placeholder="hotien2107@gmail.com" className="UserPageEditTextItemInput" />
                            </div>
                            <div className="UserPageEditTextLabel">
                                <div className="UserPageEditTextItemTitle">
                                    Phone
                                </div>
                                <input type="text" placeholder="+84 823 892 244" className="UserPageEditTextItemInput" />
                            </div>
                            <div className="UserPageEditTextLabel">
                                <div className="UserPageEditTextItemTitle">
                                    Facebook
                                </div>
                                <input type="text" placeholder="fb.com/tien.hohoang.7" className="UserPageEditTextItemInput" />
                            </div>

                        </div>
                        <div className="UserPageEditAvt">
                            <img src="https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1.jpg" alt="" className="UpdateAvt" onClick={ZoomIn}/>
                            <label htmlFor="file"><Publish className="IconPublic" /></label>
                            <input type="file" name="file" id="file" style={{ display: "none", opacity: 0 }} />
                        </div>

                    </div>
                    <button className="BtnSaveEditUser">Save</button>
                </div>
            </div>
            <Link to="/Users">

                <button className="UserPageBack">
                    Back
                </button>
            </Link>
            <div className={"ZoomImgBox " + ZoomStatus} onClick={ZoomOut}>
                <img src="https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1.jpg" alt="" className="ZoomImg" />

            </div>
        </div>
    )
}
