import React, { useState, useEffect, useRef } from "react";
import Link from "gatsby";

const Menu = ({ user }) => {
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
        <img
          className="w-10 h-10 rounded-full"
          src={user.picture}
          alt={user.name}
        />
      </button>

      <Transition
        show={show}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="origin-top-right absolute right-0 w-48 py-2 mt-1 bg-gray-800 rounded shadow-md">
          <Link href="/profile">
            <a className="block px-4 py-2 hover:bg-green-500 hover:text-green-100">
              Profile
            </a>
          </Link>
          <Link href="/api/logout">
            <a className="block px-4 py-2 hover:bg-green-500 hover:text-green-100">
              Logout
            </a>
          </Link>
        </div>
      </Transition>
    </div>
  );
};
