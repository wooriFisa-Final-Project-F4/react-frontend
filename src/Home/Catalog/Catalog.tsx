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
          <button className="allButton">모든 상품 보러가기</button>
          <button className="registerButton">회원가입</button>
        </div>
      </div>
    </>
  );
};
