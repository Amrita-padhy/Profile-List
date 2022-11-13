import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { profileData } from "./profile-data";

function Profile() {
  const [userProfile, setUserProfile] = useState(profileData);
  console.log(userProfile);
  const handleDelete = (id) => {
    const newProfileList = userProfile.filter((profile) => profile.id !== id);
    console.log(newProfileList);
    setUserProfile(newProfileList);
    // console.log(id);
  };
  return (
    <div className="container ">
      <div className="heading text-4xl text-white text-center p-3">
        Profile Page
      </div>
      <div className="text-center w-full h-full grid place-content-center">
        {userProfile.map((item) => (
          <div
            className="w-96 h-28 flex justify-between items-center border-2 p-2 my-1  "
            key={item.id}
          >
            <img
              src={item.img}
              alt=""
              width={80}
              height={40}
              className="rounded-full"
            />

            <div className="desc text-white text-lg">
              <div>{item.name}</div>
              <div>{item.job}</div>
            </div>

            <RiDeleteBinLine
              className="text-white text-2xl hover:text-red-600"
              onClick={() => handleDelete(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
