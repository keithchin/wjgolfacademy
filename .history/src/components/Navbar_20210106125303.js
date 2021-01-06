import React from "react";
import Popper from "popper.js";
import ReactWhatsapp from "react-whatsapp";
import { Link } from "gatsby";

export default function Navbar(props, color) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-gray-800")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "relative shadow-lg bg-white shadow-lg") +
          " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
              }
              to="/"
            >
              <img
                alt="..."
                src={require("../images/wj-logo-transparent.png")}
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "140px" }}
              />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className={
                  (props.transparent ? "text-white" : "text-gray-800") +
                  " fas fa-bars"
                }
              ></i>
            </button>
            <li></li>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <button
                className={
                  "text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 " +
                  bgColor
                }
                style={{ transition: "all .15s ease" }}
                type="button"
                ref={btnDropdownRef}
                onClick={() => {
                  dropdownPopoverShow
                    ? closeDropdownPopover()
                    : openDropdownPopover();
                }}
              >
                About Us
              </button>
              <div
                ref={popoverDropdownRef}
                className={
                  (dropdownPopoverShow ? "block " : "hidden ") +
                  (color === "white" ? "bg-white " : bgColor + " ") +
                  "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                }
                style={{ minWidth: "12rem" }}
              >
                <Link
                  to="/coaches/"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-gray-600 " +
                    (color === "white" ? " text-gray-800" : "text-white")
                  }
                >
                  Our Team
                </Link>
                <Link
                  to="/facilities/"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-gray-600 " +
                    (color === "white" ? " text-gray-800" : "text-white")
                  }
                  onClick={(e) => e.preventDefault()}
                >
                  Our Facility
                </Link>
                <Link
                  to="/memberships/"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-gray-600 " +
                    (color === "white" ? " text-gray-800" : "text-white")
                  }
                  onClick={(e) => e.preventDefault()}
                >
                  Memberships
                </Link>
                <Link
                  to="/#contact"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-gray-600 " +
                    (color === "white" ? " text-gray-800" : "text-white")
                  }
                  onClick={(e) => e.preventDefault()}
                >
                  Contact Us
                </Link>
              </div>
            </ul>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <button
                className={
                  "text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 " +
                  bgColor
                }
                style={{ transition: "all .15s ease" }}
                type="button"
                ref={btnDropdownRef}
                onClick={() => {
                  dropdownPopoverShow
                    ? closeDropdownPopover()
                    : openDropdownPopover();
                }}
              >
                About Us
              </button>
              <div
                ref={popoverDropdownRef}
                className={
                  (dropdownPopoverShow ? "block " : "hidden ") +
                  (color === "white" ? "bg-white " : bgColor + " ") +
                  "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                }
                style={{ minWidth: "12rem" }}
              >
                <Link
                  to="/coaches/"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-gray-600 " +
                    (color === "white" ? " text-gray-800" : "text-white")
                  }
                >
                  Our Team
                </Link>
                <Link
                  to="/facilities/"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-gray-600 " +
                    (color === "white" ? " text-gray-800" : "text-white")
                  }
                  onClick={(e) => e.preventDefault()}
                >
                  Our Facility
                </Link>
                <Link
                  to="/memberships/"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-gray-600 " +
                    (color === "white" ? " text-gray-800" : "text-white")
                  }
                  onClick={(e) => e.preventDefault()}
                >
                  Memberships
                </Link>
                <Link
                  to="/#contact"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-gray-600 " +
                    (color === "white" ? " text-gray-800" : "text-white")
                  }
                  onClick={(e) => e.preventDefault()}
                >
                  Contact Us
                </Link>
              </div>
              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#pablo"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-facebook text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Facebook</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#pablo"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-instagram text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Instagram</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#pablo"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-whatsapp text-lg leading-lg "
                    }
                  />
                  <ReactWhatsapp
                    number="1-212-736-5000"
                    message="Hello World!!!"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
