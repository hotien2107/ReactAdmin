import "./Product.css"
import { Link } from "react-router-dom"
import Chart from "../../components/Chart/Chart"
import { RacketAnalytics } from "../../data/RacketAnalytics"
import { useState } from "react"
import {ArrowBackIos} from "@material-ui/icons"

export default function Product() {
    const dataKeyTransactions = ["Transactions"];
    const dataKeyAmount = ["Amount"];
    const dataKeyRatting = ["Ratting"];

    let zoomStatus = "hide";
    const [ZoomStatus, setZoomStatus] = useState(zoomStatus);

    const ZoomIn = () => {
        setZoomStatus("show");
    }

    const ZoomOut = () => {
        setZoomStatus("hide");
    }

    return (
        <div className="ProductPage">
            <div className="ProductPageTitleContainer">
                <div className="ProductPageTitle">Racket Information</div>
                <Link to="/Products">

                    <button className="ProductPageBack">
                    <ArrowBackIos style={{ fontSize: 16 }}/>
                        Back
                    </button>
                </Link>
            </div>
            <div className="ProductPageContainer">

                <div className="ProductPageInfo">
                    <div className="ProductPageInfoBasic">
                        <img src="https://pbs.twimg.com/media/E1ueLb8VkAAQbVS.jpg" alt="" className="ProductPageInfoImg" onClick={ZoomIn}/>
                        <div className="ProductPageInfoNameAndBrand">
                            <div className="ProductPageInfoName">Vợt cầu lông Yonex Astrox 100ZZ Kurenai - Đỏ New 2021</div>
                            <div className="ProductPageInfoBrand">
                                Yonex
                            </div>
                        </div>
                    </div>
                    <div className="ProductPageInfoDetail">
                        <div className="ProductPageInfoDetailList">
                            <div className="ProductPageInfoDetailListTitle">
                                Specifications
                            </div>
                            <div className="ProductPageInfoDetailItem">
                                <div className="ProductPageInfoDetailItemTitle">FLEX</div>
                                <div className="ProductPageInfoDetailItemContent">Extra Stiff</div>
                            </div>
                            <div className="ProductPageInfoDetailItem">
                                <div className="ProductPageInfoDetailItemTitle">FRAME</div>
                                <div className="ProductPageInfoDetailItemContent">HM Graphite / Namd / Tungsten / Black Micro Core / Nanometric</div>
                            </div>
                            <div className="ProductPageInfoDetailItem">
                                <div className="ProductPageInfoDetailItemTitle">SHAFT COMPOSITION</div>
                                <div className="ProductPageInfoDetailItemContent">HM Graphite / Namd</div>
                            </div>
                            <div className="ProductPageInfoDetailItem">
                                <div className="ProductPageInfoDetailItemTitle">LENGTH</div>
                                <div className="ProductPageInfoDetailItemContent">675 mm / 10 mm longer</div>
                            </div>
                            <div className="ProductPageInfoDetailItem">
                                <div className="ProductPageInfoDetailItemTitle">WEIGHT GRIP SIZE</div>
                                <div className="ProductPageInfoDetailItemContent">4U 5, 6 / 3U 4, 5, 6</div>
                            </div>
                            <div className="ProductPageInfoDetailItem">
                                <div className="ProductPageInfoDetailItemTitle">COLOR(S)</div>
                                <div className="ProductPageInfoDetailItemContent">Kurenai, Dark Navy</div>
                            </div>

                            <div className="ProductPageInfoDetailItem">
                                <div className="ProductPageInfoDetailItemTitle">RECOMMENDED STRING</div>
                                <div className="ProductPageInfoDetailItemContent">Control Players:
                                    AEROBITE BOOST
                                    Hard Hitters:
                                    BG66 FORCE</div>
                            </div>

                            <div className="ProductPageInfoDetailItem">
                                <div className="ProductPageInfoDetailItemTitle">STRINGING ADVICE</div>
                                <div className="ProductPageInfoDetailItemContent">4U: 20 - 28 lbs, 3U: 21 - 29 lbs</div>
                            </div>
                            <div className="ProductPageInfoDetailItem">
                                <div className="ProductPageInfoDetailItemTitle">MADE IN</div>
                                <div className="ProductPageInfoDetailItemContent">Japan</div>
                            </div>
                            <div className="ProductPageInfoDetailItem">
                                <div className="ProductPageInfoDetailItemTitle">ITEM CODE</div>
                                <div className="ProductPageInfoDetailItemContent">AX100ZZ</div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="ProductPageAnalytics">

                    <Chart data={RacketAnalytics} dataKey={dataKeyTransactions} title="Transactions" />
                    <br />
                    <Chart data={RacketAnalytics} dataKey={dataKeyAmount} title="Amount" />
                    <br />
                    <Chart data={RacketAnalytics} dataKey={dataKeyRatting} title="Ratting" />
                    <br />
                    <div className="ProductPageComments">
                        <div className="ProductPageCommentsTitle">Comments</div>
                        <div className="ProductPageCommentsItem">
                            <div className="CommentsItemInfo">
                                <img src="https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1.jpg" alt="" className="CommentsItemInfoAvt" />
                                <div className="CommentsItemInfoNameAndDay">
                                    <div className="CommentsItemInfoName">Hồ Hoàng Việt Tiến</div>
                                    <div className="CommentsItemInfoDay">July 8, 2021</div>
                                </div>
                            </div>
                            <div className="CommentsItemContent">Good racket!!</div>
                        </div>
                        <div className="ProductPageCommentsItem">
                            <div className="CommentsItemInfo">
                                <img src="https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1.jpg" alt="" className="CommentsItemInfoAvt" />
                                <div className="CommentsItemInfoNameAndDay">
                                    <div className="CommentsItemInfoName">Hồ Hoàng Việt Tiến</div>
                                    <div className="CommentsItemInfoDay">July 8, 2021</div>
                                </div>
                            </div>
                            <div className="CommentsItemContent">Awesome!!</div>
                        </div>
                        <div className="ProductPageCommentsItem">
                            <div className="CommentsItemInfo">
                                <img src="https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1.jpg" alt="" className="CommentsItemInfoAvt" />
                                <div className="CommentsItemInfoNameAndDay">
                                    <div className="CommentsItemInfoName">Hồ Hoàng Việt Tiến</div>
                                    <div className="CommentsItemInfoDay">July 8, 2021</div>
                                </div>
                            </div>
                            <div className="CommentsItemContent">I will buy again ^^</div>
                        </div>
                    </div>

                </div>


                {/* <div className="ProductPageEdit">
                    <div className="ProductPageEditTitle">Edit</div>
                    <div className="ProductPageEditContainer">
                        <div className="ProductPageEditText">

                            <div className="ProductPageEditTextLabel">
                                <div className="ProductPageEditTextItemTitle">
                                    Productname
                                </div>
                                <input type="text" placeholder="hotien2107" className="ProductPageEditTextItemInput" />
                            </div>
                            <div className="ProductPageEditTextLabel">
                                <div className="ProductPageEditTextItemTitle">
                                    Full Name
                                </div>
                                <input type="text" placeholder="Hồ Hoàng Việt Tiến" className="ProductPageEditTextItemInput" />
                            </div>
                            <div className="ProductPageEditTextLabel">
                                <div className="ProductPageEditTextItemTitle">
                                    Email
                                </div>
                                <input type="text" placeholder="hotien2107@gmail.com" className="ProductPageEditTextItemInput" />
                            </div>
                            <div className="ProductPageEditTextLabel">
                                <div className="ProductPageEditTextItemTitle">
                                    Phone
                                </div>
                                <input type="text" placeholder="+84 823 892 244" className="ProductPageEditTextItemInput" />
                            </div>
                            <div className="ProductPageEditTextLabel">
                                <div className="ProductPageEditTextItemTitle">
                                    Facebook
                                </div>
                                <input type="text" placeholder="fb.com/tien.hohoang.7" className="ProductPageEditTextItemInput" />
                            </div>

                        </div>
                        <div className="ProductPageEditAvt">
                            <img src="https://pbs.twimg.com/media/E1ueLb8VkAAQbVS.jpg" alt="" className="UpdateAvt" />
                            <label htmlFor="file"><Publish className="IconPublic" /></label>
                            <input type="file" name="file" id="file" style={{ display: "none", opacity: 0 }} />
                        </div>

                    </div>
                    <button className="BtnSaveEditProduct">Save</button>
                </div> */}
            </div>
            <div className={"ZoomImgBox " + ZoomStatus} onClick={ZoomOut}>
                <img src="https://pbs.twimg.com/media/E1ueLb8VkAAQbVS.jpg" alt="" className="ZoomImg" />

            </div>
        </div>
    )
}
