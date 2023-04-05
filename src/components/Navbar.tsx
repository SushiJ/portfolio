import { useState } from "react";
import { Logo, MenuIcon } from "./Icons";
const Links = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/Resume.pdf", name: "Resume", target: "_blank" },
];
function Navbar() {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center py-4 bg-nightOwl-transparent text-nightOwl-property mt-8">
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
          <MenuIcon />
        </span>
      </button>
      {isSideBarOpen && (
        <div
          className="border-nightOwl-pink border-2 text-4xl space-y-4 p-4 fixed right-0 top-0 bottom-0 z-10 w-64 h-64 rounded-sm transform
            mt-44 mr-4 text-left bg-nightOwl-backdrop"
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
