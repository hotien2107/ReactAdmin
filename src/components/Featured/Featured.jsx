import "./Featured.css"
import FeaturedItem from "./FeaturedItem"

export default function Home({data}) {
    return (
        <div className="Featured" >
           {data.map((value, key) => (
               <FeaturedItem 
               key={key}
               title={value.title}
               price={value.price}
               ratting={value.ratting}

               sub={value.sub}
                />
           ))
           }
        </div>
    )
}