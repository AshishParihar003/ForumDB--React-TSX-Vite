import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ForumDELogo from "../../assets/Header_LOGO.png";

const Navbar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const handleNavbarToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLinkClick = () => {
    setIsCollapsed(true);
  };

  const courses = [
    { name: "Python", link: "/courses/python" },
    { name: "SQL", link: "/courses/sql" },
    { name: "Docker", link: "/courses/docker" },
    { name: "Kubernetes", link: "/courses/kubernetes" },
    { name: "Upcoming", link: "#", disabled: true },
    { name: "Baap Course", link: "#", disabled: true }
  ];

  return (
    <div className="bg-yellow-100 mb-5">
      <div className="container mx-auto">
        <nav className="bg-gray-100 border-b border-black fixed top-0 left-0 right-0 z-50">
          <div className="flex items-center justify-between p-4">
            <Link className="flex items-center" to="/">
              <img className="h-8" src={ForumDELogo} alt="Brand Logo" />
            </Link>
            <button
              className="text-black focus:outline-none md:hidden"
              type="button"
              onClick={handleNavbarToggle}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <div className={`absolute top-14 left-0 right-0 bg-gray-100 md:relative md:top-0 md:bg-transparent md:flex md:flex-row md:items-center md:justify-center w-full md:w-auto ${isCollapsed ? 'hidden' : 'flex'} md:space-y-0 space-y-2 md:space-x-8 font-bold`}>
              <ul className="flex flex-col md:flex-row md:items-center md:justify-center w-full md:w-auto space-y-2 md:space-y-0 md:space-x-4 font-bold">
                <li className="nav-item">
                  <Link className="nav-link px-2 py-2 text-black" to="/" onClick={handleLinkClick}>Home</Link>
                </li>
                <li className="nav-item relative group">
                  <button className="nav-link px-2 py-2 text-black flex items-center">
                    Courses
                    <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                  </button>
                  <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block">
                    {courses.map((course, index) => (
                      <li key={index}>
                        <Link
                          className={`block px-4 py-2 text-black ${course.disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-200'}`}
                          to={course.link}
                          onClick={handleLinkClick}
                        >
                          {course.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-2 py-2 text-black" to="/our-selection" onClick={handleLinkClick}>Our Selection</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-2 py-2 text-black" to="/contact-us" onClick={handleLinkClick}>Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-2 py-2 text-black" to="/blogs" onClick={handleLinkClick}>Blogs</Link>
                </li>
              </ul>
              <a href="https://lms.forumde.in/" className="block md:hidden mt-4">
                <button className="Signbtn rounded-full bg-orange-500 text-white px-4 py-2">Dashboard</button>
              </a>
            </div>
            <a href="https://lms.forumde.in/" className="hidden md:block">
              <button className="Signbtn rounded-full bg-orange-500 text-white px-4 py-2">Dashboard</button>
            </a>
          </div>
        </nav>
      </div>
      <hr className="border-t border-black m-0" />
    </div>
  );
}

export default Navbar;
