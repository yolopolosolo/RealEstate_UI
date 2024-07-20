import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import Chat from "../../components/chatComp/Chat";
import MyList from "../../components/myList/MyList";
import apiRequest from "../../lib/apiRequest";
import "./Profile.scss"
import { Suspense, useContext } from "react";
import { AuthContext } from "../../context/authContext";

function Profile() {
  const {updateUser,currentUser} = useContext(AuthContext);
  
  const navigate = useNavigate();

  const handleLogout = async ()=>{
    try {

        await apiRequest.post("/auth/logout");
        updateUser(null);
        navigate("/");
    } catch (err) {
        console.log(err);
    }
  }

  const data = useLoaderData();

  return (
    <div className="profilePage">
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User Information</h1>
                    <Link to={"/profile/update"}>
                    <button>Update Profile</button>
                    </Link>
                </div>
                <div className="info">
                    <span> 
                        Avatar: <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
                    </span>
                    <span>Username: <b>{currentUser.username}</b></span>
                    <span>Email: <b>{currentUser.email}</b></span>
                    <button onClick={handleLogout}>Logout</button>
                </div>

                <div className="title">
                    <h1>My List</h1>
                    <Link to={"/add"}>
                    <button>Add New Post</button>
                    </Link>
                    
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <Await
                    resolve={data.userPostResponse}
                    errorElement={<p>Failed to get Posts</p>}
                    >
                        {
                            (response)=>
                            <MyList items={response.data.userPosts}/>
                        }
                        
                    </Await>
                </Suspense>
                

                <div className="title">
                    <h1>Saved List</h1> 
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <Await
                    resolve={data.userPostResponse}
                    errorElement={<p>Failed to get Posts</p>}
                    >
                        {
                            (response)=>
                            <MyList items={response.data.savedPosts}/>
                        }
                        
                    </Await>
                </Suspense>
            </div>
        </div>
        <div className="chatContainer">
            <div className="wrapper">

            <Suspense fallback={<p>Loading...</p>}>
                    <Await
                    resolve={data.chatResponse}
                    errorElement={<p>Failed to get Chats</p>}
                    >
                        {
                            (response)=><Chat chats={response.data}/>
                        }
                        
                    </Await>
                </Suspense>
                
            </div>
        </div>
    </div>
  )
}

export default Profile