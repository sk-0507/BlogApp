import React from "react";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../BaseUrl";

function PostCard({ data }) {
  const { imgUrl, title, desc,_id , name} = data;
  const id = _id;
  //const date = createdAt.toLocaleString('en-GB',{day:'numeric',month:'long',year:'numeric'});
  const navigate = useNavigate();
  
  const token = localStorage.getItem("Token");
  const handleOnDelete = async () => {
    // console.log(id);
    try {
      const fetchdata = await fetch(
        `${url}/api/v1/post/deletePost/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      if(fetchdata.ok){
        const data = await fetchdata.json();
        console.log(data.msg);
        
        window.location.reload();
      }else{
        console.log("data fetch failed");
      }
    } catch (error) {
      console.log(error);
    }
 
  }

const handleOnUpdate = () => {
  navigate(`/Updatepost/${id}`);
}

  return (
    <>
      {/* <div  classNameName="w-[80%] h-[50%] container bg-slate-50 mt-12 grid grid-cols-2 grid-flow-col ">
        <div  classNameName="imageSide overflow-hidden m-1 object-contain">
          <img src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=600"
           classNameName />
        </div>
        <div  classNameName="textSide flex flex-col justify-between px-2 py-4">
          <div  classNameName="desc">
            <h1  classNameName="py-2">Title</h1>
            
            <span>
              <p>description here</p>
            </span>
          </div>

          <div  classNameName="button grid grid-cols-1 lg:grid-cols-2 ">
            <button  classNameName="w-[50%] rounded-lg h-[3rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50">
              Update
            </button>
            <button  classNameName="w-[50%] items-center rounded-lg h-[3rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50">
              Delete
            </button>
          </div>
        </div>
      </div> */}

      <section className="relative pt-12 bg-slate-50  ">
        <div className="items-center flex flex-wrap bg-slate-50">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              // src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
              src={imgUrl}
              //src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300 mt-8">
                <i className="fas fa-rocket text-xl"></i>
              </div>
              <h3 className="text-3xl font-semibold">{title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500 text-justify">
                {desc}
              </p>
              <strong>{moment().format('MMMM Do YYYY, h:mm:ss a')}</strong><br/>
              <strong>Posted by : {name}</strong>
              <div className="button grid grid-cols-1 lg:grid-cols-2 py-12">
                {id? <button onClick={handleOnUpdate}  className="w-[50%] rounded-lg h-[3rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50">
                    Update
                  </button>:null}
                 
                 
                { id? <button onClick={handleOnDelete} className="w-[50%] items-center rounded-lg h-[3rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50">
                  Delete
                </button>:null }
               
              </div>
            </div>
          </div>
        </div>
        <footer className="relative  pt-8 pb-6 mt-8 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
                  <div
                    href="#"
                    className="text-blueGray-500 hover:text-gray-800"
                    target="_blank"
                  ></div>

                  <div
                    href="#"
                    className="text-blueGray-500 hover:text-blueGray-800"
                    target="_blank"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default PostCard;
