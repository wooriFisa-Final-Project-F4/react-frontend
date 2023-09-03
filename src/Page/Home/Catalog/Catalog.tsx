import { Link } from "react-router-dom";
import "../button.css";
export const Catalog = () => {
  return (
    <>
      <div className="catalog">
        <h1>
          ArteModerni와 <br />
          미술을 즐기세요
        </h1>
        <div className="button">
          <Link to="/products" className="allButton">
            모든 상품 보러가기
          </Link>
          <Link to="/register" className="registerButton">
            회원가입
          </Link>
        </div>
      </div>
    </>
  );
};
