import React from "react";
import { Link } from "gatsby";
import ReactWhatsapp from "react-whatsapp";

export default function Footer() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center text-center mb-24">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold">Our Team</h2>
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
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6">
            <img
              alt="..."
              src={require("../images/wilson.png")}
              className=" max-w-full mx-auto"
              style={{ maxWidth: "180px" }}
            />
            <div className="pt-7 text-center">
              <h5 className="text-xl font-bold">Wilson Choo</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                Founder / Coach
              </p>
              <div className="mt-6">
                <Link to="http://www.owgr.com/en/Ranking/PlayerProfile.aspx?playerID=14869">
                  <button
                    className="bg-yellow-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fas fa-golf-ball"></i>
                  </button>
                </Link>
                <Link to="https://www.facebook.com/wilsonchoogolf">
                  <button
                    className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>
                </Link>
                <ReactWhatsapp number="1-212-736-5000">
                  <button
                    className="bg-green-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </button>
                </ReactWhatsapp>
                <Link to="https://www.instagram.com/badgerstyle23">
                  <button
                    className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6">
            <img
              alt="..."
              src={require("../images/justin-blonde.png")}
              className=" max-w-full mx-auto"
              style={{ maxWidth: "120px" }}
            />
            <div className="pt-8 text-center">
              <h5 className="text-xl font-bold">Justin Chin</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                Founder
              </p>
              <div className="mt-6">
                <Link to="http://www.owgr.com/en/Ranking/PlayerProfile.aspx?playerID=27150">
                  <button
                    className="bg-yellow-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fas fa-golf-ball"></i>
                  </button>
                </Link>
                <Link to="https://www.facebook.com/justinchin46">
                  <button
                    className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>
                </Link>
                <ReactWhatsapp number="1-212-736-5000">
                  <button
                    className="bg-green-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </button>
                </ReactWhatsapp>
                <Link to="https://www.instagram.com/justin.chin33">
                  <button
                    className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-5 py-1">
            <img
              alt="..."
              src={require("../images/danny-chia.png")}
              className=" max-w-full mx-auto"
              style={{ maxWidth: "140px", maxHeight: "130px" }}
            />
            <div className="pt-8 text-center">
              <h5 className="text-xl font-bold">Danny Chia</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                Advisor
              </p>
              <div className="mt-6">
                <Link to="http://www.owgr.com/en/Ranking/PlayerProfile.aspx?playerID=6386">
                  <button
                    className="bg-yellow-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fas fa-golf-ball"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6">
            <img
              alt="..."
              src={require("../images/kheng-hwai.png")}
              className=" max-w-full mx-auto "
              style={{ maxWidth: "180px" }}
            />
            <div className="pt-7 text-center">
              <h5 className="text-xl font-bold">Khor Kheng Hwai</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                Touring Professional
              </p>
              <div className="mt-6">
                <Link to="http://www.owgr.com/en/Ranking/PlayerProfile.aspx?playerID=12533">
                  <button
                    className="bg-yellow-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fas fa-golf-ball"></i>
                  </button>
                </Link>
                <ReactWhatsapp number="1-212-736-5000">
                  <button
                    className="bg-green-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </button>
                </ReactWhatsapp>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6">
            <img
              alt="..."
              src={require("../images/aru.png")}
              className=" max-w-full mx-auto"
              style={{ maxWidth: "180px" }}
            />
            <div className="pt-8 text-center">
              <h5 className="text-xl font-bold">V.Arumugam</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                Teaching Professional
              </p>
              <div className="mt-6">
                <Link to="http://www.owgr.com/en/Ranking/PlayerProfile.aspx?playerID=6441">
                  <button
                    className="bg-yellow-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fas fa-golf-ball"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
