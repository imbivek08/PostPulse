import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
export default function Header() {
  const path = useLocation().pathname;
  return (
    <div>
      <Navbar className="border-b-2 whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white ">
        <Link to={"/"} className="self-center">
          <span className="px-3 py-1 bg-gradient-to-r text-white from-red-500 via-purple-700 to-pink-700 rounded-lg w-[200px]">
            Bivek
          </span>
          Blog
        </Link>
        {/* this will be hidden after small  size  */}
        <form>
          <TextInput
            type="text "
            placeholder="search"
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
          />
        </form>
        {/* this will be hidden after large size  */}
        <Button className="h-10 w-12 lg:hidden  " pill color="gray">
          <AiOutlineSearch />
        </Button>
        <div className="flex gap-3 md:order-2">
          <Button className="" pill color="gray">
            <FaMoon />
          </Button>
          <Link to={"/signin"}>
            <Button gradientDuoTone="purpleToBlue">Sign In</Button>
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/project"} as={"div"}>
            <Link to="/project">Project</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/contact"} as={"div"}>
            <Link to="/contact">Contact</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
