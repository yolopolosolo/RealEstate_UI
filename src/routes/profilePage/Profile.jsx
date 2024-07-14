import Chat from "../../components/chatComp/Chat";
import MyList from "../../components/myList/MyList";
import "./Profile.scss"

function Profile() {
  const profileImage = "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";


  return (
    <div className="profilePage">
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User Information</h1>
                    <button>Update Profile</button>
                </div>
                <div className="info">
                    <span> 
                        Avatar: <img src={profileImage} alt="" />
                    </span>
                    <span>Username: <b>John Doe</b></span>
                    <span>Email: <b>John@gmail.com</b></span>
                </div>

                <div className="title">
                    <h1>My List</h1>
                    <button>Add New Post</button>
                </div>
                <MyList/>

                <div className="title">
                    <h1>Saved List</h1> 
                </div>
                <MyList/>
            </div>
        </div>
        <div className="chatContainer">
            <div className="wrapper">
                <Chat/>
            </div>
        </div>
    </div>
  )
}

export default Profile