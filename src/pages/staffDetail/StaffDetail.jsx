import "./StaffDetail.css"
import { Link } from "react-router-dom"
import { AccountBox, Event, PhoneAndroid, Email, Facebook, Publish, ArrowBackIos } from "@material-ui/icons"
import { useState } from "react";

export default function StaffDetail() {
    let zoomStatus = "hide";
    const [ZoomStatus, setZoomStatus] = useState(zoomStatus);

    const ZoomIn = () => {
        setZoomStatus("show");
    }

    const ZoomOut = () => {
        setZoomStatus("hide");
    }
    return (
        <div className="StaffDetailPage">
            <div className="StaffDetailPageTitleAndBack">
                <div className="StaffDetailPageTitle">Staff Detail</div>
                <Link to="/Staffs" className="Link">

                    <button className="StaffDetailPageBack">
                        <ArrowBackIos style={{ fontSize: 16 }} />
                        Back
                    </button>
                </Link>
            </div>
            <div className="StaffDetailPageContainer">

                <div className="StaffDetailPageInfo">
                    <div className="StaffDetailPageInfoBasic">
                        <img src="https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1.jpg" alt="" className="StaffDetailPageInfoAvt" />
                        <div className="StaffDetailPageInfoNameAndJob">
                            <div className="StaffDetailPageInfoName">Hồ Hoàng Việt Tiến</div>
                            <div className="StaffDetailPageInfoJob">
                                Front-end Developer
                            </div>
                        </div>
                    </div>
                    <div className="StaffDetailPageInfoDetail">
                        <div className="StaffDetailPageInfoDetailList">
                            <div className="StaffDetailPageInfoDetailListTitle">
                                Account
                            </div>
                            <div className="StaffDetailPageInfoDetailItem">
                                <AccountBox className="Icon" />
                                Hồ Hoàng Việt Tiến
                            </div>
                            <div className="StaffDetailPageInfoDetailItem">
                                <Event className="Icon" />
                                21.07.2000
                            </div>
                        </div>
                        <div className="StaffDetailPageInfoDetailList">
                            <div className="StaffDetailPageInfoDetailListTitle">
                                Contact
                            </div>
                            <div className="StaffDetailPageInfoDetailItem">
                                <PhoneAndroid className="Icon" />
                                +84 823 892 244
                            </div>
                            <div className="StaffDetailPageInfoDetailItem">
                                <Email className="Icon" />
                                hotien2107@gmail.com
                            </div>
                            <div className="StaffDetailPageInfoDetailItem">
                                <Facebook className="Icon" />
                                fb.com/tien.hohoang.7
                            </div>
                        </div>
                    </div>
                </div>
                <div className="StaffDetailPageEdit">
                    <div className="StaffDetailPageEditTitle">Edit</div>
                    <div className="StaffDetailPageEditContainer">
                        <div className="StaffDetailPageEditText">

                            <div className="StaffDetailPageEditTextLabel">
                                <div className="StaffDetailPageEditTextItemTitle">
                                    Username
                                </div>
                                <input type="text" placeholder="hotien2107" className="StaffDetailPageEditTextItemInput" />
                            </div>
                            <div className="StaffDetailPageEditTextLabel">
                                <div className="StaffDetailPageEditTextItemTitle">
                                    Full Name
                                </div>
                                <input type="text" placeholder="Hồ Hoàng Việt Tiến" className="StaffDetailPageEditTextItemInput" />
                            </div>
                            <div className="StaffDetailPageEditTextLabel">
                                <div className="StaffDetailPageEditTextItemTitle">
                                    Email
                                </div>
                                <input type="text" placeholder="hotien2107@gmail.com" className="StaffDetailPageEditTextItemInput" />
                            </div>
                            <div className="StaffDetailPageEditTextLabel">
                                <div className="StaffDetailPageEditTextItemTitle">
                                    Phone
                                </div>
                                <input type="text" placeholder="+84 823 892 244" className="StaffDetailPageEditTextItemInput" />
                            </div>
                            <div className="StaffDetailPageEditTextLabel">
                                <div className="StaffDetailPageEditTextItemTitle">
                                    Facebook
                                </div>
                                <input type="text" placeholder="fb.com/tien.hohoang.7" className="StaffDetailPageEditTextItemInput" />
                            </div>

                        </div>
                        <div className="StaffDetailPageEditAvt">
                            <img src="https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1.jpg" alt="" className="UpdateAvt" onClick={ZoomIn} />
                            <label htmlFor="file"><Publish className="IconPublic" /></label>
                            <input type="file" name="file" id="file" style={{ display: "none", opacity: 0 }} />
                        </div>

                    </div>
                    <button className="BtnSaveEditStaffDetail">Save</button>
                </div>
            </div>

            <div className={"ZoomImgBox " + ZoomStatus} onClick={ZoomOut}>
                <img src="https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1.jpg" alt="" className="ZoomImg" />

            </div>
        </div>
    )
}
