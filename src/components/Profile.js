import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { profileData } from "./profile-data";

function Profile() {
  const [userProfile, setUserProfile] = useState(profileData);
  const [search, setSearch] = useState("");
  // console.log(search);
  const handleDelete = (id) => {
    const newProfileList = userProfile.filter((profile) => profile.id !== id);
    // console.log(newProfileList);
    setUserProfile(newProfileList);
    // console.log(id);
  };

  return (
    <div className="container ">
      <div className="heading text-4xl text-white text-center p-3">
        Profile Page
      </div>
      <div className="searchBar flex justify-center my-2 ">
        <input
          type="text"
          className=" rounded-md p-2 border-none w-80"
          placeholder="Enter here..."
          onChange={(e) => setSearch(e.target.value)}
          // value={search}
        />
      </div>
      <div className="text-center w-full h-full grid place-content-center">
        {userProfile
          .filter((value) => {
            if (search === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => (
            <div
              className="w-72 h-20 flex justify-between items-center border-2 p-1 my-1 rounded-lg md:w-80 "
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
                <div>name:{item.name}</div>
                <div>Job:{item.job}</div>
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
