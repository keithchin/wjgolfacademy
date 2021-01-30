import React from "react";
import { Link } from "gatsby";

import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://scontent.fkul16-1.fna.fbcdn.net/v/t1.0-9/117645992_1860359360772958_1618631274850326967_o.jpg?_nc_cat=106&ccb=2&_nc_sid=a26aad&_nc_ohc=N7J3dbTf180AX9n4BN3&_nc_ht=scontent.fkul16-1.fna&oh=ed807573cb9dce087eb66f9b76ec5f0d&oe=601B0852')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-90 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="mt-36 items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 pl-16 ml-auto mr-auto sm:pr-20 sm:text-center">
                <div className="pr-12 sm:pl-24">
                  <h1 className="text-white font-semibold text-5xl ">
                    Our Team
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            ></svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div
            className="container "
            // style={{
            //   backgroundImage:
            //     "url('https://scontent.fkul16-1.fna.fbcdn.net/v/t1.0-9/48430052_10156445794157740_6824897621132312576_n.jpg?_nc_cat=106&ccb=2&_nc_sid=84a396&_nc_ohc=vOC6PBCiCdkAX_jR9ly&_nc_ht=scontent.fkul16-1.fna&oh=84a25f5cd7bc329944cc851700b85cb4&oe=601A04E8')",
            // }}
          >
            <div className="flex flex-wrap"></div>

            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32 sm:mt-8">
                <h3 className="text-3xl mb-2 font-semibold leading-normal text-center">
                  Wilson Choo
                </h3>
                <p className="text-xs italic font-light leading-relaxed mt-1 mb-4 text-gray-700 text-center">
                  Founder / Head Instructor{" "}
                </p>
                <p className="text-sm font-light leading-relaxed mt-2 sm:mt-0 mb-2 text-gray-700">
                  ✔️ Turned Professional in 2010
                </p>
                <p className="text-sm font-light leading-relaxed mt-2 sm:mt-0 mb-2 text-gray-700">
                  ✔️ National Player for Malaysia (2006-08)
                </p>
                <p className="text-sm font-light leading-relaxed mt-2 sm:mt-0 mb-2 text-gray-700">
                  ✔️ Achieved a career high world ranking of 717
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 sm:mt-32 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-green-600">
                  <img
                    alt="..."
                    src="https://scontent.fkul16-1.fna.fbcdn.net/v/t1.0-9/48430052_10156445794157740_6824897621132312576_n.jpg?_nc_cat=106&ccb=2&_nc_sid=84a396&_nc_ohc=vOC6PBCiCdkAX_jR9ly&_nc_ht=scontent.fkul16-1.fna&oh=84a25f5cd7bc329944cc851700b85cb4&oe=601A04E8"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px",
                      }}
                    ></svg>
                    <h4 className="text-xl font-bold text-white">
                      Coach Wilson
                    </h4>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    Ready to take your game to the next level?
                  </h3>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                    At WJ Golf Academy, we provide :
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-3 uppercase rounded-full text-white bg-green-500 mr-3">
                            <i className="fas fa-golf-ball"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Lessons with seasoned and touring professionals{" "}
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-3 uppercase rounded-full text-white bg-green-500 mr-3">
                            <i className="fas fa-star"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Access to state of the art equipments and facilities
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-3 uppercase rounded-full text-white bg-green-500 mr-3">
                            <i className="fas fa-user-friends"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Coaching programs for Juniors and Seniors
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <a
                          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                          className="font-bold text-gray-800 mt-8 hover:opacity-75"
                        >
                          Check out our services!
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Our Team</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
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
                      Founder / Touring Professional
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("../images/danny-chia.png")}
                    className=" max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-11 text-center">
                    <h5 className="text-xl font-bold">Danny Chia</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Touring Professional
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-5 py-1">
                  <img
                    alt="..."
                    src={require("../images/alan-chin.png")}
                    className=" max-w-full mx-auto"
                    style={{ maxWidth: "180px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Alan Chin</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Teaching Professional
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
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
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Khor Kheng Hwai</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Touring Professional
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-gray-900">
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
        </section>
      </main>
      <Footer />
    </>
  );
}
