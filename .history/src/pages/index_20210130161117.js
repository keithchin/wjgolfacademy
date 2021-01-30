import React from "react";
import { Link } from "gatsby";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import ReactWhatsapp from "react-whatsapp";
import TeamIndex from "../components/TeamIndex";
import VisionIndex from "../components/VisionIndex";
import EventsIndex from "../components/EventsIndex";
import BackgroundSlider from "gatsby-image-background-slider";
import { useStaticQuery, graphql } from "gatsby";

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
            // style={{
            //   backgroundImage:
            //     "url('https://scontent.fkul16-1.fna.fbcdn.net/v/t1.0-9/88013553_1697191627089733_1056772300839321600_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=TN0Yk_G-V2oAX-dvjRE&_nc_ht=scontent.fkul16-1.fna&oh=fe42a2141e7066b05400c75de6b083d0&oe=6019FF9E')",
            // }}
          >
            <BackgroundSlider
              query={useStaticQuery(graphql`
                query {
                  backgrounds: allFile(
                    filter: { sourceInstanceName: { eq: "images" } }
                  ) {
                    nodes {
                      relativePath
                      childImageSharp {
                        fluid(maxWidth: 4000, quality: 100) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              `)}
              initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
              transition={4} // transition duration between images
              duration={8} // how long an image is shown
              // specify images to include (and their order) according to `relativePath`
              images={["background-1.jpg", "background-2.jpg"]}
              // pass down standard element props
              // style={{
              //   transform: "rotate(-2deg) scale(.9)",
              // }}
            />

            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="mt-36 items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center transition-all duration-500 ease-in-out">
                <h1 className="text-white font-semibold text-5xl">
                  Your golf journey begins here.
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Experience golf with top professionals and coaches at one of
                  the best courses in Malaysia.
                </p>
                <div className="mt-12">
                  <ReactWhatsapp number="60122809559">
                    <button
                      className="text-white bg-transparent border border-solid border-white hover:bg-white hover:text-black active:bg-white font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      Contact Us
                    </button>
                  </ReactWhatsapp>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="pb-20 bg-green-600 -mt-28">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center mt-32">
              <div
                className="w-full md:w-5/12 px-4 mr-auto ml-auto mb-2"
                data-sal="slide-left"
                data-sal-duration="25000"
                data-sal-delay="3000"
                data-sal-easing="ease"
              >
                <h3 className="text-white mt-24 md:mt-12 text-5xl sm:text-5l text-center mb-2 font-semibold leading-normal">
                  About Us{" "}
                </h3>
                <p className="text-white text-md font-light leading-relaxed mt-8 mb-4 ">
                  Our academy was established in the year 2018, with the mission
                  of providing a platform for beginner and intermediate golfers
                  using the latest golf radar technology, TrackMan™.
                </p>
                <p className="text-white text-md font-light leading-relaxed mt-8 mb-4 pt-2">
                  Headed by Coach Wilson Choo, and managed by partner, Justin
                  Chin, we are located in Saujana Golf & Country Club, which
                  hosts a world-class driving range as well as a PGA certified
                  golf course.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-16">
                <div
                  className="relative flex flex-col min-w-0 break-words bg-blue-500 w-full mb-6 shadow-lg rounded-lg"
                  data-sal="fade"
                  data-sal-duration="10000"
                  data-sal-delay="5000"
                  data-sal-easing="ease"
                >
                  <img
                    alt="..."
                    src="https://scontent.fkul16-1.fna.fbcdn.net/v/t1.0-9/93282369_10157709203867740_4188504144882958336_n.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_ohc=KM4kTkyX258AX-SdTsB&_nc_ht=scontent.fkul16-1.fna&oh=52441dd8ca36e3e4c21dfc00e0f08048&oe=6019BA15"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative py-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 383 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px",
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blue-500 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl text-center font-bold text-white">
                      Our Founders
                    </h4>
                    <p className="text-sm text-center font-light mt-2 text-white">
                      Justin Chin and Wilson Choo
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px", transform: "translateZ(0)" }}
            data-sal="fade"
            data-sal-duration="10000"
            data-sal-delay="5000"
            data-sal-easing="ease"
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
                className="text-gray-100 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-xl h-90 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  src="https://scontent.fkul16-1.fna.fbcdn.net/v/t1.0-9/65250017_1470238616451703_373742998921412608_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_ohc=sBIbA1i8qCgAX9zuXnj&_nc_ht=scontent.fkul16-1.fna&oh=e3b4c5f79329c41b500ae25e6dbfd8cd&oe=6033C36B"
                />
              </div>
              <div
                className="w-full md:w-5/12 ml-auto mr-auto px-4"
                data-sal="slide-left"
                data-sal-duration="5000"
                data-sal-delay="3000"
                data-sal-easing="ease"
              >
                <div className="md:pr-12">
                  <h3 className="text-5xl pb-8 mb-8 mt-16 font-bold text-center sm:leading-normal">
                    Ready to take your game to the next level?
                  </h3>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"></p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-3 uppercase rounded-full text-white bg-green-600 mr-3">
                            <i className="fas fa-golf-ball"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600 pl-1">
                            Lessons with seasoned and touring professionals{" "}
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-3 uppercase rounded-full text-white bg-green-600 mr-3">
                            <i className="fas fa-star"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Private 1-to-1 lessons with coaches
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-3 uppercase rounded-full text-white bg-green-600 mr-3">
                            <i className="fas fa-user-friends"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            World-class training with Trackman™ analysis
                          </h4>
                        </div>
                      </div>
                    </li>
                    {/* <li className="py-2">
                      <div className="flex items-center">
                        <a
                          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                          className="font-bold text-gray-800 mt-8 ml-16 text-xlhover:opacity-50"
                        >
                          Check out our services!
                        </a>
                      </div>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team Section */}
        <section className="pt-20 pb-48">
          {/* <TeamIndex /> */}
          <VisionIndex />
        </section>

        <section className="pb-20 relative bg-gray-900">
          <EventsIndex />
        </section>
        <section
          className="relative block py-24 lg:pt-0 bg-gray-900"
          id="contact"
        ></section>
      </main>
      <Footer />
    </>
  );
}
