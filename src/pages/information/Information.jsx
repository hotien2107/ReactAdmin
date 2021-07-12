import "./Information.css"
import { Link } from "react-router-dom"
import { AccountBox, Event, PhoneAndroid, Email, Facebook, Publish, ArrowBackIos } from "@material-ui/icons"
import { useState } from "react";

export default function Information() {
    let zoomStatus = "hide";
    const [ZoomStatus, setZoomStatus] = useState(zoomStatus);

    const ZoomIn = () => {
        setZoomStatus("show");
    }

    const ZoomOut = () => {
        setZoomStatus("hide");
    }
    return (
        <div className="InformationPage">
            <div className="InformationPageTitleAndBack">
                <div className="InformationPageTitle">Information</div>
                <Link to="/Informations" className="Link">

                    <button className="InformationPageBack">
                        <ArrowBackIos style={{ fontSize: 16 }} />
                        Back
                    </button>
                </Link>
            </div>
            <div className="InformationPageContainer">
                <div className="InformationPageInfoBasic">
                    <img src="https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1.jpg" alt="" className="InformationPageInfoAvt" />
                    <div className="InformationPageInfoNameAndJob">
                        <div className="InformationPageInfoName">Hồ Hoàng Việt Tiến</div>
                        <div className="InformationPageInfoJob">
                            Front-end Developer
                        </div>
                    </div>
                </div>
                <div className="InformationPageInfoDetail">
                    <div className="InformationPageInfoDetailList">
                        <div className="InformationPageInfoDetailListTitle">
                            Account
                        </div>
                        <div className="InformationPageInfoDetailItem">
                            <AccountBox className="Icon" />
                            Hồ Hoàng Việt Tiến
                        </div>
                        <div className="InformationPageInfoDetailItem">
                            <Event className="Icon" />
                            21.07.2000
                        </div>
                    </div>
                    <div className="InformationPageInfoDetailList">
                        <div className="InformationPageInfoDetailListTitle">
                            Account
                        </div>
                        <div className="InformationPageInfoDetailItem">
                            <AccountBox className="Icon" />
                            Hồ Hoàng Việt Tiến
                        </div>
                        <div className="InformationPageInfoDetailItem">
                            <Event className="Icon" />
                            21.07.2000
                        </div>
                    </div>
                    <div className="InformationPageInfoDetailList">
                        <div className="InformationPageInfoDetailListTitle">
                            Account
                        </div>
                        <div className="InformationPageInfoDetailItem">
                            <AccountBox className="Icon" />
                            Hồ Hoàng Việt Tiến
                        </div>
                        <div className="InformationPageInfoDetailItem">
                            <Event className="Icon" />
                            21.07.2000
                        </div>
                    </div>
                    <div className="InformationPageInfoDetailList">
                        <div className="InformationPageInfoDetailListTitle">
                            Contact
                        </div>
                        <div className="InformationPageInfoDetailItem">
                            <PhoneAndroid className="Icon" />
                            +84 823 892 244
                        </div>
                        <div className="InformationPageInfoDetailItem">
                            <Email className="Icon" />
                            hotien2107@gmail.com
                        </div>
                        <div className="InformationPageInfoDetailItem">
                            <Facebook className="Icon" />
                            fb.com/tien.hohoang.7
                        </div>
                    </div>
                </div>


            </div>

            <div className={"ZoomImgBox " + ZoomStatus} onClick={ZoomOut}>
                <img src="https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1.jpg" alt="" className="ZoomImg" />

            </div>
        </div>
    )
}
