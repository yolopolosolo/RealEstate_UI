import "./List.scss"
import Filter from "../../components/filterComp/Filter";
import Cards from "../../components/CardComp/Cards";
import Map from "../../components/map/Map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

function List() {

  const data = useLoaderData();

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
            <Suspense fallback={<p>Loading....</p>}>
              <Await 
              resolve={data.postResponse}
              errorElement={<p>Error Loading Data</p>}
              >
               {
                (postResponse)=>
                    postResponse.data.map(
                      (post)=>(
                      <Cards key={post.id} item={post}/>
                      )
                    )
                }
              </Await>
            </Suspense>
            
        </div>
      </div>
      <div className="mapContainer">
        <Suspense fallback={<p>Loading ....</p>}>
                <Await resolve={data.postResponse}
                  errorElement={<p>Error loading data</p>}    
                >
                  {
                    (postResponse)=> <Map items={postResponse.data}/>
                  }
                </Await>
        </Suspense>
        
      </div>
    </div>
  )
}

export default List