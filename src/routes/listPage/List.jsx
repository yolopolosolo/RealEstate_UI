import "./List.scss"
import { listData } from "../../lib/dummydata";
import Filter from "../../components/filterComp/Filter";
import Cards from "../../components/CardComp/Cards";
import Map from "../../components/map/Map";

function List() {

  const data = listData;

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
            {
              data.map(
                (item)=>(
                <Cards key={item.id} item={item}/>
                )
              )
            }
            
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data}/>
      </div>
    </div>
  )
}

export default List