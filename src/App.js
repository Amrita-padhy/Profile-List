import "./App.css";
import React from "react";
import Profile from "./components/Profile";
import { profileData } from "./components/profile-data";
// import { profileData } from "./profile-data";

function App({}) {
  return (
    <div className="App container h-screen bg-slate-900">
      {/* <Profile /> */}
      {/* {profileData.map((userData) => (
        // console.log(userData)
      ))} */}
      <Profile />
    </div>
  );
}

export default App;
