// import { useState } from "react";
// import { CloseMenuIcon, Logo, MenuIcon } from "./Icons";
// const Links = [
//   { href: "/", name: "Home" },
//   { href: "/about", name: "About" },
//   { href: "/resume.pdf", name: "Resume", target: "_blank" },
// ];
// function Navbar() {
//   const [isSideBarOpen, setisSideBarOpen] = useState(false);
//   return (
//     <nav className="flex justify-between items-center py-4 bg-nightOwl-transparent mt-2 lg:mt-8 text-nightOwl-text">
//       <a href="/" className="text-nightOwl-pink">
//         <Logo className="w-12 h-12 lg:w-16 lg:h-16" />
//       </a>
//       <ul className="hidden lg:flex py-4 space-x-4">
//         {Links.map((link) => (
//           <li className="" key={link.name}>
//             <a
//               className="border-[.5px] border-nightOwl-text hover:text-nightOwl-pink hover:border-[.5px] hover:border-nightOwl-pink rounded-sm p-2 tex-sm"
//               href={link.href}
//               target={link.target ? link.target : ""}
//             >
//               {link.name}
//             </a>
//           </li>
//         ))}
//       </ul>
//       <button
//         type="button"
//         className="lg:hidden"
//         onClick={() => setisSideBarOpen(!isSideBarOpen)}
//       >
//         <span className="hover:text-nightOwl-pink">
//           {isSideBarOpen ? <CloseMenuIcon /> : <MenuIcon />}
//         </span>
//       </button>
//       {isSideBarOpen && (
//         <div
//           tabIndex={isSideBarOpen ? 1 : -1}
//           className="text-xl space-y-2 p-4 absolute right-0 top-0 bottom-0 z-10 w-32 h-32 rounded-sm
//             mt-20 mr-0 text-left text-nightOwl-pink backdrop-blur border-[1px] border-gray-800"
//         >
//           {Links.map((link) => (
//             <p key={link.name}>
//               <a
//                 className="hover:text-nightOwl-pink"
//                 href={link.href}
//                 target={link.target ? link.target : ""}
//               >
//                 {link.name}
//               </a>
//             </p>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }
//
// export default Navbar;
