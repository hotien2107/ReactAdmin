import "./Featured.css"
import FeaturedItem from "./FeaturedItem"

export default function Home({ data }) {
    return (
        <div className="Featured" >
            {
                data.map((value, key) => {
                    if (value.title === "Sales") {
                        return (
                            <FeaturedItem
                            key={key}
                            title={value.title}
                            price={value.price}
                            ratting={value.ratting}
                            sub={value.sub}
                            addClassName="ml20 mr20"
                        />
                        )
                    }
                    return (
                        <FeaturedItem
                            key={key}
                            title={value.title}
                            price={value.price}
                            ratting={value.ratting}
                            sub={value.sub}
                        />
                    )})
            
           }
        </div>
    )
}