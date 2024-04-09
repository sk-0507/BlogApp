import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div className="lg:h-screen  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-y-hidden overflow-x-hidden ">
        <h1 className="text-center mt-56 text-slate-100 font-sarif text-4xl">
          ✨Welcome to PostPilot! ✨
        </h1>
        <h1 className="text-center mt-4 text-slate-50 font-serif text-3xl">
          🌟 Discover a World of Insights and Inspiration 🌟
        </h1>
        <span className="text-center text-clip">
          <p className="mt-6 text-slate-200 font-serif px-4 text-2xl">
            📖 Explore a world of captivating stories and insightful articles
            curated just for you. Whether you're a seasoned reader or a
            first-time explorer, our platform is designed to take you on a
            journey of discovery. <br></br>Thank you for choosing PostPilot as
            your destination for exciting adventures in the world of words!
            Happy reading! 📚
          </p>
        </span>
        <div className="flex justify-center py-4">
          <Link to="/signUp">
            <button className="flex flex-col items-center text-slate-50 text-xl font-serif">
              Get-Started <GoArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
