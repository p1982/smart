import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Header: React.FC = () => {
  return (
    <header className="fixed z-10 top-0 left-0 right-0 bg-slate-400">
      <div className="max-w-[1200px] mx-auto py-2 items-center flex justify-between sm:px-4 md:px-6 lg:px-8">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[50px] h-[50px] object-contain"
            loading="lazy"
          />
        </Link>
        <nav>
          <ul className="flex gap-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
