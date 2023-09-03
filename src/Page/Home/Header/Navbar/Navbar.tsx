import { Categories } from "./Categories";
import { NavLink } from "./NavLink";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="container d_flex">
        <Categories />
        <NavLink />
      </div>
    </header>
  );
};
