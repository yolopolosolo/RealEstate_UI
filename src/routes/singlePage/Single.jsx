import Slider from "../../components/SliderComp/Slider";
import "./Single.scss";
import Map from "../../components/map/Map"
import { useLoaderData, useNavigate } from "react-router-dom"
import DOMPurify from "dompurify"
import { useContext, useState } from "react";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/authContext";

function Single() {
  const {currentUser} =  useContext(AuthContext); 
  const post = useLoaderData();
  const [error,setError] = useState("");
  const navigate = useNavigate();
  const [saved,setSaved] = useState(post.isSaved);

  const handleSave = async ()=>{
    setSaved((prev)=>!prev);
    if(!currentUser) navigate("/login");
    try{
      
       await apiRequest.post("/user/save",
        {
          postId: post.id
        }
      )
    }catch(err){
      setSaved((prev)=>!prev);
      setError(err.response.data.message);
    }
  }



  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
            <Slider images={post.images}/>
            <div className="info">
              <div className="top">
                  <div className="post">
                      <h1>
                        {post.title}
                      </h1>
                      <div className="address">
                        <img src="/pin.png" alt="" />
                        <span>{post.address}</span>
                      </div>
                      <div className="price">
                        $ {post.price}
                      </div>
                  </div>
                  <div className="user">
                    <img src={post.user.avatar} alt="" />
                    <span>{post.user.username}</span>
                  </div>
              </div>
              <div className="bottom" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.postDetail.desc)}}>
              </div>
            </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
            <p className="title">General</p>
            <div className="listVertical">
              <div className="feature">
                <img src="/utility.png" alt="" />
                <div className="featureText">
                  <span>Utilities</span>
                  <p>{post.postDetail.utilities}</p>
                </div>
              </div>
              <div className="feature">
                <img src="/pet.png" alt="" />
                <div className="featureText">
                  <span>Pet Policy</span>
                  <p>{post.postDetail.pet}</p>
                </div>
              </div>
              <div className="feature">
                <img src="/fee.png" alt="" />
                <div className="featureText">
                  <span>Property fees</span>
                  <p>{post.postDetail.income}</p>
                </div>
              </div>
            </div>

            <p className="title">Room Sizes</p>
            <div className="sizes">
                <div className="size">
                  <img src="/size.png" alt="" />
                  <span>{post.postDetail.size} sqft</span>
                </div>

                <div className="size">
                  <img src="/bed.png" alt="" />
                  <span>{post.bedroom} bed</span>
                </div>

                <div className="size">
                  <img src="/bath.png" alt="" />
                  <span>{post.bathroom} bathroom</span>
                </div>
            </div>

            <p className="title">Nearby Places</p>
            <div className="listHorizontal">
              <div className="feature">
                <img src="/school.png" alt="" />
                <div className="featureText">
                  <span>School</span>
                  <p>{post.postDetail.school}m away</p>
                </div>
              </div>
              <div className="feature">
                <img src="/bus.png" alt="" />
                <div className="featureText">
                  <span>Bus stop</span>
                  <p>{post.postDetail.bus}m away</p>
                </div>
              </div>
              <div className="feature">
                <img src="/restaurant.png" alt="" />
                <div className="featureText">
                  <span>Restaurant</span>
                  <p>{post.postDetail.restaurant}m away</p>
                </div>
              </div>
            </div>

            <p className="title">Location</p>
            <div className="mapContainer">
              <Map items={[post]}/>
            </div>
            <div className="buttons">
              <button>
                <img src="/chat.png" alt="" />
                Send a message
              </button>
              <button onClick={handleSave}
               style={{
                backgroundColor: saved ? "#fece51" : "white",
              }}
              >
                <img src="/save.png" alt="" />
                {saved ? "Place Saved" : "Save the place"}
              </button>
              {error && <span>{error}</span>}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Single