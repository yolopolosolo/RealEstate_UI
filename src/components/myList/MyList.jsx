import Cards from "../CardComp/Cards"
import "./MyList.scss"

function MyList({items}) {
  return (
    <div className="list">
        {
            items.map(
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