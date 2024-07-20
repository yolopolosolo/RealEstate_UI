import { useContext, useState } from "react";
import "./ProfileUpdate.scss"
import { AuthContext } from "../../context/authContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadComp/Upload";

function ProfileUpdate() {
  const [error,setError] = useState("");
  const {updateUser,currentUser} = useContext(AuthContext);
  const [avatar, setAvatar] = useState([]);
  
  const navigate = useNavigate();

  const handleSubmit= async (e)=>{
    e.preventDefault();
    const formData =  new FormData(e.target);
    const {username,email,password} = Object.fromEntries(formData);

    try{
      const res = await apiRequest.put(`/user/${currentUser.id}`,
        {
          username,
          email,
          password,
          avatar:avatar[0]
        });
      
      updateUser(res.data);
      navigate("/profile");
    }catch(err){
      setError(err.response.data.message);
    }
  }

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error && <span>error</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img src={avatar[0] || currentUser.avatar || "/noavatar.jpg"} alt="" className="avatar" />
        <UploadWidget
          uwConfig={{
            cloudName: "deeex6aho",
            uploadPreset: "yoloestate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  )
}

export default ProfileUpdate