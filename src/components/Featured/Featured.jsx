import "./Featured.css"
import FeaturedItem from "./FeaturedItem"
import PropTypes from "prop-types"

Featured.propTypes = {
    featured: PropTypes.array,
    onFeaturedClick: PropTypes.func,
}

Featured.defaultProps = {
    featured: [],
    onFeaturedClick: null,
}

export default function Featured(props) {

    const { featured, onFeaturedClick } = props;
    
    
    return (
        <div className="Featured" >
            {
                featured.map(featuredItem => {
                    if (featuredItem.title === "Income") {
                        return (
                            <FeaturedItem
                                key={featuredItem.id}
                                title={featuredItem.title}
                                amount={featuredItem.amount}
                                ratting={featuredItem.ratting}
                                sub={featuredItem.sub}
                                addClassName="ml20 mr20"
                                onFeaturedClick={onFeaturedClick}
                            />
                        )
                    }
                    return (
                        <FeaturedItem
                            key={featuredItem.id}
                            title={featuredItem.title}
                            amount={featuredItem.amount}
                            ratting={featuredItem.ratting}
                            sub={featuredItem.sub}
                            onFeaturedClick={onFeaturedClick}
                        />
                    )
                })

            }
        </div>
    )
}