import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import PostCard from "./PostCard";
import { url } from "../BaseUrl";

const Home = () => {
  const navigate = useNavigate();
  const HandleOnClick = () => {
    localStorage.removeItem("Token");
    navigate("/login");
  };
  const [data, setdata] = useState({});
  useEffect(() => {
    try {
      const fetchdata = async () => {
        const resp = await fetch(`${url}/api/v1/post/getPost`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!resp.ok) {
          throw new Error(`HTTP error! Status: ${resp.status}`);
        } else {
          const respInJson = await resp.json();
          if (!respInJson) {
            console.log("no data found");
          }
          setdata(respInJson);
          console.log("posts>>>", respInJson);
        }
      };
      fetchdata();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <nav class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold whitespace-nowrap  text-slate-50">
              PostPilot
            </span>
          </a>

          <div className=" w-full md:block md:w-auto">
            <div className="font-medium flex flex-col lg:flex-row gap-8 items-center p-4 md:p-0 mt-4  ">
              <div>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `block py-2 px-3   text-slate-50 rounded md:bg-transparent   md:p-0 dark:text-white md:dark:text-blue-500 ${
                      isActive ? "text-blue-800" : "text-white"
                    } hover:text-blue-200`
                  }
                >
                  Home
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/Postform"
                  className={({ isActive }) =>
                    `block py-2 px-3   text-slate-50 rounded md:bg-transparent   md:p-0 dark:text-white md:dark:text-blue-500 ${
                      isActive ? "text-blue-800" : "text-white"
                    } hover:text-blue-200`
                  }
                >
                  Create Post
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    `block py-2 px-3   text-slate-50 rounded md:bg-transparent   md:p-0 dark:text-white md:dark:text-blue-500 ${
                      isActive ? "text-blue-800" : "text-white"
                    } hover:text-blue-200`
                  }
                >
                  About-me!
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `block py-2 px-3   text-slate-50 rounded md:bg-transparent   md:p-0 dark:text-white md:dark:text-blue-500 ${
                      isActive ? "text-blue-800" : "text-white"
                    } hover:text-blue-200`
                  }
                >
                  LogOut
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {data?.post?.map((item) => (
          <div key={item._id}>
            <PostCard data={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
