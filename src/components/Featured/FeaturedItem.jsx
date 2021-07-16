import "./Featured.css"
import { ArrowUpward, ArrowDownward, AttachMoney } from "@material-ui/icons"
import PropTypes from "prop-types"

FeaturedItem.propTypes = {
    title: PropTypes.string,
    amount: PropTypes.number,
    ratting: PropTypes.number,
    sub: PropTypes.string,
    addClassName: PropTypes.string,
    onFeaturedClick: PropTypes.func,
}

FeaturedItem.defaultProps = {
    title: "Title",
    amount: 0,
    ratting: 0,
    sub: "Sub",
    addClassName: "",
    onFeaturedClick: null,
}


export default function FeaturedItem(props) {

    const {title, amount, ratting, sub, addClassName, onFeaturedClick } = props;
    
    
    function handleFeatured(featured) {
        if(!onFeaturedClick) return;
        onFeaturedClick(featured);
    }
    

    if (ratting >= 0){
        return (
            <div className={"FeaturedItem " + addClassName} onClick={() => handleFeatured(title)}>
                <span className="FeaturedTitle">{title}</span>
                <div className="FeaturedInf">
                    <span className="FeaturedPrice">
                        {amount}
                        <AttachMoney />
                    </span>
                    <span className="FeaturedRating positive" >
                        {ratting}
                        <ArrowUpward className="FeaturedIcon" />
                    </span>
                </div>
                <span className="FeaturedSub">{sub}</span>
            </div>
        )
    }
    return (
        <div className={"FeaturedItem " + addClassName} onClick={() => handleFeatured(title)}>
            <span className="FeaturedTitle">{title}</span>
            <div className="FeaturedInf">
                <span className="FeaturedPrice">
                    {amount}
                    <AttachMoney />
                </span>
                <span className="FeaturedRating negative" >
                    {ratting}
                    <ArrowDownward className="FeaturedIcon" />   
                </span>
            </div>
            <span className="FeaturedSub">{sub}</span>
        </div>
    )
}
