import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {

   const [error, seterror] = useState("");
    const [name, setname] = useState("");
    const navigate = useNavigate()
   
    const handleOnclick = () => {
      
     seterror(1);
     navigate(`/login`);
      
    };
  

 
 
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

const addUser = async () => {
  // const { name, email, password } = form;
  // const name = name;
  // localStorage.setItem("Name",name);
  

  try {
    const response = await fetch("http://localhost:3000/api/v1/user/signUp", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
      
    }

    const contentType = response.headers.get("Content-Type");
    if (contentType && contentType.includes("application/json")) {
      const responseData = await response.json();
       
      console.log(responseData.msg);
      if (error === 1) {
         toast.success((responseData.msg), {
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
      
    } else {
      console.error("Response is not in JSON format");
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};


  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  // };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    addUser();
    setemail("");
    setname("");
    setpassword("");

  };



  return (
    <>
      <section className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-y-hidden overflow-x-hidden ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create Account
              </h1>
              <form
                onSubmit={handleOnSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name"
                  />
                </div>
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
                  type="submit"
                  onClick={handleOnclick}
                  className="w-full rounded-lg h-[3rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50  "
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/Login"
                    href="#"
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
}

export default SignUp