import { Link } from "react-router-dom";

export const Head = () => {
  return (
    <section className="header">
      <div className="container d_flex">
        <div className="left row"></div>
        <div className="right row RText">
          <Link to="/servicecenter" className="header_item">
            고객센터
          </Link>
          <Link to="/mypage" className="header_item">
            마이페이지
          </Link>
          <Link to="/login" className="header_item">
            로그인
          </Link>
          <Link to="/register" className="header_item">
            회원가입
          </Link>
        </div>
      </div>
    </section>
  );
};
