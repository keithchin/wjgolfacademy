import React from "react";
import { Link } from "gatsby";
import ReactWhatsapp from "react-whatsapp";
import Carousel from "@brainhubeu/react-carousel";

export default function VisionIndex() {
  return (
    <div>
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px", transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-900 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-white">Past Events </h2>
          </div>
        </div>
        <div className="carousel relative shadow-2xl bg-white">
          <div className="carousel-inner relative overflow-hidden w-full">
            <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
            <div className="carousel-item absolute opacity-0" style="height:50vh;">
              <div className="block h-full w-full bg-indigo-500 text-white text-5xl text-center">Slide 1</div>
            </div>
            <label for="carousel-3" className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
            <label for="carousel-2" className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
            
            <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
            <div className="carousel-item absolute opacity-0" style="height:50vh;">
              <div className="block h-full w-full bg-orange-500 text-white text-5xl text-center">Slide 2</div>
            </div>
            <label for="carousel-1" className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
            <label for="carousel-3" className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> 
            
            <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
            <div className="carousel-item absolute opacity-0" style="height:50vh;">
              <div className="block h-full w-full bg-green-500 text-white text-5xl text-center">Slide 3</div>
            </div>
            <label for="carousel-2" className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
            <label for="carousel-1" className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

            <ol className="carousel-indicators">
              <li className="inline-block mr-3">
                <label for="carousel-1" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
              </li>
              <li className="inline-block mr-3">
                <label for="carousel-2" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
              </li>
              <li className="inline-block mr-3">
                <label for="carousel-3" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
