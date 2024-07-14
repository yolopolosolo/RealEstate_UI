import { listData } from "../../lib/dummydata"
import Cards from "../CardComp/Cards"
import "./MyList.scss"

function MyList() {
  return (
    <div className="list">
        {
            listData.map(
                item=>
                (
                    <Cards key={item.id} item={item}/>
                )
            )
        }
    </div>
  )
}

export default MyList