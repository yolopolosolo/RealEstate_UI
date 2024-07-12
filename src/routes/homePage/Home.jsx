import Searchbar from "../../components/SearchBarComp/Searchbar"
import "./Home.scss"

function Home() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Find Real Estate & Get Your Dream Place.
          </h1>
          <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia animi autem dolore soluta. Doloremque minus ipsa molestiae ullam placeat dicta quae aspernatur deserunt necessitatibus, nesciunt delectus, nemo nostrum quidem vel.</p>
          <Searchbar/>
          <div className="boxes">
            <div className="box"> 
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box"> 
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box"> 
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
        
      </div>
      <div className="imgContainer"><img src="/bg.png" alt="" /></div>
    </div>
  )
}

export default Home