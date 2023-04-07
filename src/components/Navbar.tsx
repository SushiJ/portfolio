import { useState } from "react";
import { CloseMenuIcon, Logo, MenuIcon } from "./Icons";
const Links = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/resume.pdf", name: "Resume", target: "_blank" },
];
function Navbar() {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center py-4 bg-nightOwl-transparent mt-8 text-nightOwl-text">
      <a href="/" className="text-nightOwl-pink">
        <Logo className="w-20 h-20 lg:w-16 lg:h-16" />
      </a>
      <ul className="hidden lg:flex py-4 space-x-4">
        {Links.map((link) => (
          <li className="" key={link.name}>
            <a
              className="border-[.5px] border-nightOwl-text hover:text-nightOwl-pink hover:border-[.5px] hover:border-nightOwl-pink rounded-sm p-2 tex-sm"
              href={link.href}
              target={link.target ? link.target : ""}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="lg:hidden"
        onClick={() => setisSideBarOpen(!isSideBarOpen)}
      >
        <span className="hover:text-nightOwl-pink">
          {isSideBarOpen ? <CloseMenuIcon /> : <MenuIcon />}
        </span>
      </button>
      {isSideBarOpen && (
        <div
          tabIndex={isSideBarOpen ? 1 : -1}
          className="text-4xl space-y-4 p-4 fixed right-0 top-0 bottom-0 z-10 w-72 h-72 rounded-sm 
            mt-44 mr-4 text-left transition ease-in-out delay-100 text-nightOwl-text"
        >
          {Links.map((link) => (
            <p key={link.name}>
              <a
                className="hover:text-nightOwl-pink"
                href={link.href}
                target={link.target ? link.target : ""}
              >
                {link.name}
              </a>
            </p>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
