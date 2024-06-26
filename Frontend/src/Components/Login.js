import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import { url } from '../BaseUrl';


function Login() {

   const [error, seterror] = useState("");
    
  
   
  const handleOnclick = () =>{
    seterror(1);
  }

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();


  const checkUser = async () =>{
    try {
      // const {email,password} = form;
      const getUser = await fetch(`${url}/api/v1/user/login`, {
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if(!getUser.ok){
        throw new Error(`http error status ${getUser.status}`)
      }

          const contentType = getUser.headers.get("Content-Type");
         if (contentType && contentType.includes("application/json")) {
           const responseData = await getUser.json();
           console.log(responseData.msg);
          //  console.log(responseData);
           const token = responseData.token;
           console.log(token);
           localStorage.setItem("Token",token);
           
           if (error === 1) {
             toast.success(responseData.msg, {
               position: "top-center",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "colored",
             });

             seterror(0);
           }
            if (responseData.msg === "User Logged In Successfully!!") {
              navigate( `/home`);
            }
         } else {
           console.error("Response is not in JSON format");
         }
         
    } catch (error) {
          console.error("There was a problem with the fetch operation:", error);

    }
  }
 

 
  const handleOnsubmit = (e) => {
    e.preventDefault();
    checkUser();
    setemail("");
    setpassword("");
  };

  // const handleOnchange = (e) => {
  //   const { name, value } = e.target;
  //   setform({
  //     ...form,
  //     [name]: value,
  //   });
  // };


  return (
    <>
      <section className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-y-hidden overflow-x-hidden ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login to your Account
              </h1>
              <form
                onSubmit={handleOnsubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <button
                  onClick={handleOnclick}
                  type="submit"
                  className="w-full rounded-lg h-[3rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50" 
                >
                  Login into your account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Do not have account?{" "}
                  <Link
                    to="/SignUp"
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-sky-600"
                  >
                    Create here
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
}

export default Login