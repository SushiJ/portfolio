import { navOptionItem } from 'interfaces/navOption';
import Link from 'next/link';
import React from 'react';

// import { BiMenuAltRight } from 'react-icons/bi';
import { navData } from '@/data/navdata';

// import Logo from './Icons/Logo';
// import { SideBar } from './SideBar';
import Social from './Socials';

const Navbar: React.FC = () => {
  return (
    <>
      <MobileNav />
      <Nav />
    </>
  );
};
export const NavigationOptions: React.FC = () => {
  return (
    <>
      {navData.map((el: navOptionItem) => (
        <li key={el.id}>
          <Link href={el.href}>
            <a className="hover:text-coral p-1">
              <span className="text-sm mr-1 text-coral">{el.id}.</span>
              {el.name}
            </a>
          </Link>
        </li>
      ))}
    </>
  );
};
export default Navbar;

const MobileNav: React.FC = () => {
  // const [toggle, setToggle] = useState<boolean>(false);

  // const toggleMenu = () => {
  //   setToggle((s) => !s);
  // };

  // console.log(toggle);
  return (
    <nav className="md:hidden h-[10vh] flex w-full mx-auto p-4 px-6 justify-between relative">
      {/* <Logo /> */}
      <a className="font-kremlin">Sushi</a>
      {/* <div className="text-4xl">
        <BiMenuAltRight onClick={toggleMenu} />
      </div>
      {toggle ? <SideBar /> : ''} */}
    </nav>
  );
};

const Nav: React.FC = () => {
  return (
    <div className="mx-auto md:block w-full h-[10vh] hidden relative px-6">
      <div className="flex items-center justify-between px-2 2xl:px-0 py-4">
        {/* <Logo className="" /> */}
        <a className="font-kremlin text-2xl text-accent-50">Sushi</a>
        {/* <ul className="flex space-x-4 text-lg">
          <NavigationOptions />
        </ul> */}
      </div>
      <Social />
    </div>
  );
};
