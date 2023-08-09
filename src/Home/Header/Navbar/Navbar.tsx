import { NavLink } from "./NavLink";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import BorderAllOutlinedIcon from "@mui/icons-material/BorderAllOutlined";
export const Navbar = () => {
  return (
    <header className="header">
      <div className="container d_flex">
        <div className="categories d_flex">
          <span className="fa-solid fa-border-all">
            <BorderAllOutlinedIcon />
          </span>
          <h4>작품 </h4>
          <span>
            <ArrowDropDownOutlinedIcon />
          </span>
        </div>
        <NavLink />
      </div>
    </header>
  );
};
