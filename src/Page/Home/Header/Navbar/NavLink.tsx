import { Link } from "react-router-dom";

export const NavLink = () => {
  return (
    <div className="navlink">
      <ul className="link f_flex capitalize">
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/products">모든작품</Link>
        </li>
        <li>
          <Link to="/favorite">관심작품</Link>
        </li>
        <li>
          <Link to="/myauction">내 경매</Link>
        </li>
      </ul>
    </div>
  );
};
