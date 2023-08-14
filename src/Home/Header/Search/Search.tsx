import { SearchOutlined, Dashboard } from "@mui/icons-material";

import { SearchBox } from "./SearchBox";
import { Link } from "react-router-dom";

export const Search = () => {
  return (
    <section className="search">
      <div className="container c_flex">
        <div className="mobile_nav">
          <Dashboard />
          <SearchOutlined style={{ marginLeft: "10px" }} />
        </div>
        <div className="logo">
          <div className="c_flex">
            <img src="logo.png" alt="logo" />
            <Link to="/">
              <h1>Arte Moderni</h1>
            </Link>
          </div>
        </div>
        <SearchBox />
      </div>
    </section>
  );
};
