import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
 
const About = () => {
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-y-hidden overflow-x-hidden flex justify-center items-center">
        <div className="main bg-slate-50 w-[80%] h-[80%] rounded-md overflow-scroll">
          <div className="flex flex-col items-center">
            <img
              src="https://img.freepik.com/premium-vector/man-male-character-avatar-vector-portrait-businessman-type-clothes_491904-56.jpg?w=740"
              className="sm:w-78 py-4 h-72 rounded-full "
               

              
              alt="Developer Image"
            />
            <div>
              <p className="  font-serif px-8 text-lg text-center">
                <strong className="text-center">Suraj Kushwaha</strong>
                <br />
                <strong className="text-center">
                  BE,Theem college of Engineering
                </strong>
              </p>
            </div>
          </div>
          <div className="text-justify px-6 py-8">
            <p className="  font-serif px-8 text-lg text-justify">
              My name is <strong>Suraj Kushwaha</strong>, and I am currently
              pursuing a B.Tech in Computer Engineering at{" "}
              <strong>Theem college of engineering</strong>. I'm writing to
              express my enthusiasm for the field and my eagerness to contribute
              to the ever-evolving world of technology. I have a solid
              foundation in computer science, engineering principles, and a
              passion for <strong>Full Stack in MERN</strong> technology. My
              academic journey is complemented by hands-on projects, technical
              workshops, and a proactive approach to learning. I believe my
              skills and dedication make me a valuable asset to any tech-focused
              environment.You can check-out my code on
              <Link to="https://github.com/sk-0507">
                <a className="link text-blue-700 inline"> Github </a>
              </Link>
              and contact me on
              <Link to="https://www.linkedin.com/in/suraj-kushwaha-367620249/">
                <a className="link text-blue-700 inline"> linkedin </a>
              </Link>
              Back to
              <Link to="/home">
                <a className="link text-blue-700 inline"> Home</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About