import "server-only";

import Link from "next/link";
import "./navbar.scss";
import Search from "./search";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__wrapper wrapper">
        <Link className="nav__home-link" href={"/"}>
          Wiki Rocket!
        </Link>
        <Search />
      </div>
    </nav>
  );
}
