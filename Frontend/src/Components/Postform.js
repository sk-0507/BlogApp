import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Postform = () => {
  const [imgUrl, setimgUrl] = useState("");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
   
  const [name , setName] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    saveform();
    setimgUrl("");
    settitle("");
    setdesc("");
    setName(" ");
  };
  const saveform = async () => {
    const token = localStorage.getItem("Token");
    const url = imgUrl
      ? imgUrl
      : "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    try {
      const createpost = await fetch(
        "http://localhost:3000/api/v1/post/savePost",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            imgUrl: url,
            title: title,
            desc: desc,
            name:name
          }),
        }
      );
      const data = await createpost.json();
      if(data.ok){
          toast.success((data.msg), {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        
        console.log(data);
      }else{
        toast.error((data.error), {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnclick = () => {
    // navigate("/home");
  };
  // const handleOntype = () => {
  //   navigate('/login');
  // }

  return (
    <>
      <section className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-y-hidden overflow-x-hidden ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create Post
              </h1>
              <form
                onSubmit={handleOnSubmit}
                className="space-y-4 md:space-y-6"
                
              >
                <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label
                    for="imgUrl"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter ImgUrl
                  </label>
                  <input
                    type="text"
                    name="imgUrl"
                    value={imgUrl}
                    onChange={(e) => setimgUrl(e.target.value)}
                    id="imgUrl"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="imgUrl"
                  />
                </div>
                <div>
                  <label
                    for="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your title
                  </label>
                  <input
                    type="title"
                    name="title"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Technology,...etc"
                  />
                </div>
                <div>
                  <label
                    for="Description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    id="desc"
                    name="desc"
                    value={desc}
                    onChange={(e) => setdesc(e.target.value)}
                    rows="4"
                    cols="50"
                    placeholder="Decsription"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  onClick={handleOnclick}
                  className="w-full rounded-lg h-[3rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50  "
                >
                  Create Post
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  See your post{" "}
                  <Link
                    to="/home"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-sky-600"
                  >
                    Home
                  </Link>
                </p>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Do you have account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-sky-600"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Postform;
