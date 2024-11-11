import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Function to toggle between dark and light mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  // UseEffect to initialize the theme from localStorage or set default theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Function to toggle the navbar on mobile view
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // WhatsApp contact functionality with default message
  const handleWhatsAppClick = () => {
    const phoneNumber = "923014254468"; // Replace with the actual phone number
    const message = "Hello! I would like to inquire about your services."; // Default message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <nav
        className="fixed top-0 border-solid border-gray-200 w-full border-b py-6 bg-white text-white z-50 bg-inherit"
        style={{
          backgroundColor: "#090e34",
        }}
      >
        <div className="container mx-auto">
          <div className="w-full flex justify-between lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a
                href="https://pagedone.io/"
                className="flex items-center text-2xl"
              >
                Al-Hayat-Consultant
              </a>
              <button
                data-collapse-toggle="navbar-default-example"
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default-example"
                aria-expanded="false"
                onClick={toggleNavbar}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={`lg:flex lg:pl-11 ${
                isNavbarOpen ? "block" : "hidden"
              }`} // Show or hide navbar on mobile view
              id="navbar-default-example"
            >
              <ul className="flex items-center mt-4 lg:mt-0 lg:ml-auto lg:flex-row gap-6">
                <Link to="">
                  <li>
                    <a
                      href="javascript:;"
                      className="flex items-center justify-between text-white text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3"
                    >
                      Home
                    </a>
                  </li>
                </Link>
                <Link to="about">
                  <li>
                    <a
                      href="javascript:;"
                      className="flex items-center justify-between text-white text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3"
                    >
                      About
                    </a>
                  </li>
                </Link>
                <Link to="contact">
                  <li>
                    <a
                      href="javascript:;"
                      className="flex items-center justify-between text-white text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3"
                    >
                      Contact
                    </a>
                  </li>
                </Link>
                <li>
                  {/* WhatsApp Button */}
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <FaWhatsapp className="mr-2" size={20} /> Leave a message
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
