import { useState } from "react"
import "./Searchbar.scss"

const types=["buy","rent"];

function Searchbar() {
    const [query,setQuery] = useState({
        type:"buy",
        location:"",
        minPrice:1,
        maxPrice:10
       });
    
    const switchType = (val)=>{
        setQuery(prev=>({
            ...prev,
            type:val
        })

    )};

  return (
    <div className="searchBar">
        <div className="type">
            {
            types.map(
                (type) => 
                (   
                    <button key={type} onClick={()=>switchType(type)} className={query.type===type ? "active":""}>
                    {type}
                    </button>
                )
            )}
        </div>
        <form action="">
            <input type="text" name="location" placeholder="City Location"/>
            <input type="number" name="minPrice" min={1} placeholder="Min Price"/>
            <input type="number" name="maxPrice" min={10} max={10000} placeholder="Max Price"/>
            <button>
                <img src="/search.png" alt="" />
            </button>
        </form>
    </div>
  )
}

export default Searchbar