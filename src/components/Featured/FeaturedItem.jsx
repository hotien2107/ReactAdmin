import "./Featured.css"
import { ArrowUpward, ArrowDownward, AttachMoney } from "@material-ui/icons"

export default function Home(props) {
    const ratting = props.ratting;
    if (ratting >= 0){
        return (
            <div className="FeaturedItem">
                <span className="FeaturedTitle">{props.title}</span>
                <div className="FeaturedInf">
                    <span className="FeaturedPrice">
                        {props.price}
                        <AttachMoney />
                    </span>
                    <span className="FeaturedRating positive" >
                        {props.ratting}
                        <ArrowUpward className="FeaturedIcon" />
                    </span>
                </div>
                <span className="FeaturedSub">{props.sub}</span>
            </div>
        )
    }
    return (
        <div className="FeaturedItem">
            <span className="FeaturedTitle">{props.title}</span>
            <div className="FeaturedInf">
                <span className="FeaturedPrice">
                    {props.price}
                    <AttachMoney />
                </span>
                <span className="FeaturedRating negative" >
                    {props.ratting}
                    <ArrowDownward className="FeaturedIcon" />   
                </span>
            </div>
            <span className="FeaturedSub">{props.sub}</span>
        </div>
    )
}
