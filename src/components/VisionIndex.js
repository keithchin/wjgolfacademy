import React from "react";
import { Link } from "gatsby";
import ReactWhatsapp from "react-whatsapp";

export default function VisionIndex() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center text-center mb-24">
        <div className="w-full lg:w-6/12 px-4 py-4">
          <h2 className="text-5xl font-semibold">Mission & Vision</h2>
          <p className="text-lg leading-relaxed m-4 text-gray-600"></p>
        </div>
      </div>
      <div
        className="flex flex-wrap"
        data-sal="slide-up"
        data-sal-duration="10000"
        data-sal-delay="15000"
        data-sal-easing="ease"
      >
        <div className="grid grid-cols-12 justify-between">
          <div className="col-span-2"></div>
          <div className="col-span-12 px-4 sm:col-span-3 sm:px-0">
            <h2 className="px-4 text-3xl text-center font-semibold">
              Our Mission
            </h2>
            <div className="pt-8">
              <p className="text-gray-900  text-lg font-semibold leading-relaxed mt-0 mb-4 ">
                ✔️ To provide accessible training for golfers of all levels
              </p>
              <p className="text-gray-900  text-lg font-semibold leading-relaxed mt-0 mb-4 ">
                ✔️ To use technology and years of experience as aid in
                delivering results
              </p>
              <p className="text-gray-900 text-lg font-semibold leading-relaxed mt-0 mb-4 ">
                ✔️ To help our students succeed in their golfing goals
              </p>
            </div>
          </div>
          <div className="col-span-2"></div>
          <div className="col-span-12 py-4 px-4 sm:col-span-3 sm:px-0 sm:py-0">
            <h2 className="px-4 text-3xl text-center  font-semibold">
              Our Vision
            </h2>
            <ul>
              <li className="text-lg text-center leading-relaxed m-4 text-gray-600">
                To bring the best out of your game
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
