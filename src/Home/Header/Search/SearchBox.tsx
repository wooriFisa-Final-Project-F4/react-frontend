import { Link } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
export const SearchBox = () => {
  return (
    <>
      <div className="search-box f_flex">
        <i>
          <SearchOutlinedIcon style={{ color: "white" }} />
        </i>
        <input type="text" placeholder="작가 또는 카테고리를 입력하세요" />
      </div>
      <div className="icon f_flex width">
        <div className="cart">
          <Link to="/cart">
            <i>
              <NotificationsNoneIcon style={{ color: "white" }} />
            </i>
            <span>0</span>
          </Link>
        </div>
        <div className="cart">
          <Link to="/cart">
            <i>
              <FavoriteBorderOutlinedIcon style={{ color: "white" }} />
            </i>
          </Link>
        </div>
      </div>
    </>
  );
};
