import React, { useState, useEffect, useRef } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Menu() {
  const [show, setShow] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!container.current.contains(event.target)) {
        if (!show) return;
        setShow(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [show, container]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (!show) return;

      if (event.key === "Escape") {
        setShow(false);
      }
    };

    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [show]);

  return (
    <div ref={container} className="relative">
      <button
        className="menu focus:outline-none focus:shadow-solid "
        onClick={() => setShow(!show)}
      >
        <i className="fas fa-bars"></i>
      </button>

      <div
        show={show}
        className="transition ease-out duration-100 transform transition ease-in duration-75 transform"
      >
        <div className="origin-top-right absolute right-0 w-48 py-2 mt-1 bg-gray-800 rounded shadow-md">
          <AniLink
            swipe
            direction="down"
            className={
              (props.transparent ? "text-white" : "text-gray-800") +
              " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase align-center"
            }
            to="/"
          >
            {" "}
            <a className="block px-4 py-2 hover:bg-green-500 hover:text-green-100">
              Profile
            </a>
          </Link>
          <Link href="#">
            <a className="block px-4 py-2 hover:bg-green-500 hover:text-green-100">
              Logout
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
