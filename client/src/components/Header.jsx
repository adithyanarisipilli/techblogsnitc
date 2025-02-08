import { Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "flowbite-react";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const { pathname } = useLocation(); // ✅ Corrected path retrieval

  return (
    <Navbar className="border-b-8">
      <Link
        to="/"
        className="self-center text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1">techblogsnitc</span>
      </Link>

      {/* Search Bar */}
      <form className="hidden lg:flex">
        <TextInput
          type="text"
          placeholder="Search...."
          icon={AiOutlineSearch}
        />
      </form>

      {/* Search Button for Mobile */}
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      {/* Theme and Sign-in Buttons */}
      <div className="flex gap-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign_in">
          <Button className="w-12 h-10" color="gray" pill>
            SignIn
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>

      {/* Navigation Links */}
      <Navbar.Collapse>
        <Navbar.Link active={pathname === "/"} as={Link} to="/">
          Home
        </Navbar.Link>
        <Navbar.Link active={pathname === "/about"} as={Link} to="/about">
          About
        </Navbar.Link>
        <Navbar.Link
          active={pathname === "/dashboard"}
          as={Link}
          to="/dashboard"
        >
          Dashboard
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
