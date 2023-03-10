import React, { useCallback, useEffect, useState } from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import useAuth from "@/hooks/useAuth";
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { logout } = useAuth();
  const handleScroll = useCallback(() => {
    window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled && "bg-[#141414]"
      } transition-colors duration-[.5s]`}
    >
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          className="cursor-pointer"
          src="https://rb.gy/ulxxee"
          alt="netflix Logo"
          width={100}
          height={100}
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <FaBell className="w-6" />
        <p className="hidden lg:inline"> Kids</p>
        <FaSearch className="w-6" />

        <img
          src="https://rb.gy/g1pwyx"
          alt="profile"
          className="rounded cursor-pointer"
          onClick={logout}
        />
      </div>
    </header>
  );
}

export default Header;
