import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import PostCard from './PostCard';

const Home = () => {
  const navigate = useNavigate()
  const HandleOnClick = () => {
    localStorage.removeItem("Token")
    navigate('/login');
  }
const [data , setdata] = useState({});
useEffect(()=>{
try {
  const fetchdata = async ()=>{
    const resp = await fetch("http://localhost:3000/api/v1/post/getPost", {
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      },
    });
    if(!resp.ok){
       throw new Error(`HTTP error! Status: ${resp.status}`);
    }else{
      const respInJson = await resp.json();
      if(!respInJson){
        console.log( "no data found")
      }
      setdata(respInJson);
      console.log("posts>>>",respInJson);
       
    }
  }
  fetchdata();
} catch (error) {
  console.log(error)
}
},[])





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
                <Link to="/Postform">
                  <a
                    href="#"
                    className="block py-2 px-3   text-slate-50 rounded md:bg-transparent   md:p-0 dark:text-white md:dark:text-blue-500 hover:text-blue-200"
                    aria-current="page"
                  >
                    Create Post
                  </a>
                </Link>
              </div>
              <div>
                <Link to="/About">
                  <a
                    href="#"
                    className="block py-2 px-3 text-slate-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About-me!
                  </a>
                </Link>
              </div>
              <div>
                <button
                  type='submit'
                  onClick={HandleOnClick}
                  className="block py-2 px-3 text-slate-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <Link to="/login">LogOut</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {data?.post?.map((item) => (
          <div key={item._id}>
            <PostCard data={item}/>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home