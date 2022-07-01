import SideBar from "../../components/sidebar/SideBar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img 
                src="https://i.pinimg.com/originals/52/57/a7/5257a707cecc9f4aaf22d5894bf33dc3.jpg" 
                alt="" 
              />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-solid fa-circle-user"></i>
              </label>
              <input 
                type="file" 
                id="fileInput" 
                style={{display:"none"}}
              />
            </div>
            <label>Username</label>
            <input type="text" placeholder="username" />
            <label>Email</label>
            <input type="email" placeholder="email" />
            <label>Password</label>
            <input type="password" placeholder="password" />
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <SideBar />
    </div>
  )
}
