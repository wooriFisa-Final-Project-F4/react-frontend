import { Dashboard } from "@mui/icons-material";
import { NavLink } from "./NavLink";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import BorderAllOutlinedIcon from "@mui/icons-material/BorderAllOutlined";
export const Navbar = () => {
  return (
    <header className="header">
      <div className="container d_flex">
        <div className="categories d_flex">
          <span className="fa-solid fa-border-all">
            <Dashboard className="header_icon" />
          </span>
          <h4>작품 </h4>
        </div>
        <NavLink />
      </div>
    </header>
  );
};
