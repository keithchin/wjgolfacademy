import React from "react";
import Popper from "popper.js";
import ReactWhatsapp from "react-whatsapp";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Menu from "../components/Menu";

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
  return (
    <div>
      <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "relative shadow-lg bg-white shadow-lg") +
          " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
        }
      >
        <div className="container px-4 mx-auto flex  items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <AniLink
              swipe
              direction="down"
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase align-center"
              }
              to="/"
            >
              <img
                alt="..."
                src={require("../images/wj-logo-transparent.png")}
                className="shadow-lg rounded-full max-w-full mx-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                style={{ maxWidth: "140px" }}
              />
            </AniLink>
            <div className="mt-12 ml-12 sm:mt-8">
              <Menu color={"white"} />
            </div>
          </div>
          {/* <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    "  py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="https://www.facebook.com/wjgolfacademy"
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
                    " px-6 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="https://www.instagram.com/wjgolfacademy"
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
                <ReactWhatsapp number="1-212-736-5000" message="Hello World!!!">
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-whatsapp text-lg leading-lg "
                    }
                  />
                </ReactWhatsapp>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </div>
  );
}
