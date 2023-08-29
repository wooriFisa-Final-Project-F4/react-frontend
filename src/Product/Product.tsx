import React, { useState } from "react";
import "./Product.css";
import "./button.scss";
import { Timer } from "./Timer";
interface Art {
  id: number;
  images: string;
  name: string;
  artist: string;
  category: string;
  theme: string;
  style: string;
  technique: string;
  size: string;
  completion_date: string;
  status: string;
  price: string;
  auction_product: any;
}

export const Product = () => {
  const arts: Art = {
    id: 1,
    images:
      "https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8zNzAxXC9tYWluXC96b29tXC8xNzg4OTEwXzM1MjkxMTBkMmY4ZjI0ZTg1MzExNWFiY2I1MmYzNDQ1LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwODQsImhlaWdodCI6Nzc4LCJmaXQiOiJpbnNpZGUiLCJiYWNrZ3JvdW5kIjpudWxsfSwidG9Gb3JtYXQiOiJ3ZWJwIn19?signature=132953817ce43ffd2f4f732e6e2633634e3eca44f018fff5a30332df9ec057b0 https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8zNzAxXC9hbHRzXC96b29tXC9hbHRfMTc4ODkxMF9jMGYxZjFhZWQ2ZDdlYTY5NmMzMTIwYTlhZDY1YmZiMy5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDg0LCJoZWlnaHQiOjc3OCwiZml0IjoiaW5zaWRlIiwiYmFja2dyb3VuZCI6bnVsbH0sInRvRm9ybWF0Ijoid2VicCJ9fQ==?signature=26d5ef81092433e16bf6fe49275728af845e46aaa656e95d9c0cd2037f064e51 https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8zNzAxXC9hbHRzXC96b29tXC9hbHRfMTc4ODkxMF8yZjU3YjBhOWFjYjgxZWY4NjU1MmE4ZjE0MDRmMWE5Ny5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDg0LCJoZWlnaHQiOjc3OCwiZml0IjoiaW5zaWRlIiwiYmFja2dyb3VuZCI6bnVsbH0sInRvRm9ybWF0Ijoid2VicCJ9fQ==?signature=5afe569af284fd1371a2618316dae4c03d4011bdfd50f03d9ef0d977b58e3922",
    name: "Eine Frage der Perspektive",
    artist: "Ute Bivona",
    category: "회화",
    theme: "추상기법",
    style: "추상",
    technique: "아크릴",
    size: "100x100cm",
    completion_date: "2023",
    status: "sale",
    price: "7,520,000",
    auction_product: {
      id: 1,
      product_id: 1,
      bid_user: "jiwoonKim@gmail.com",
      bid_user_name: "김지운",
      start_time: "2023-08-16T12:00:32",
      bid_price: "4,550,000",
      end_time: "2023-08-23T12:00:32",
      status: "sale",
    },
  };

  const imageArray = arts.images.split(" ");
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [bidPrice, setBidPrice] = useState("");
  const [confirmBid, setConfirmBid] = useState(false);

  const handleBidClick = () => {
    setShowModal(true);
  };

  const handleBidPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBidPrice(e.target.value);
  };

  const handleSubmitBid = () => {
    setConfirmBid(true);
  };

  const handleConfirmBid = () => {
    // 모달창 닫기
    setConfirmBid(false);
    setShowModal(false);
    setBidPrice(""); // 가격 초기화
  };
  const handleCloseModal = () => {
    setBidPrice("");
    setShowModal(false);
  };
  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <section className="product">
      <div className="productContainer">
        <div className="product_imgContainer">
          <div className="product_imgBox">
            <img
              src={imageArray[activeIndex]}
              alt={`Artwork image ${activeIndex}`}
            />
          </div>
          <div className="thumbnails">
            {imageArray.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={index === activeIndex ? "active" : ""}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        </div>
        <div className="product_info">
          <div className="information">
            <h2>{arts.name}</h2>
            <p className="artist">
              {arts.artist}&nbsp;{arts.completion_date}
            </p>
            <p>{arts.category}</p>
            <p>{arts.technique}</p>
            <p>{arts.style}</p>
            <p>{arts.size}</p>
          </div>
          <div className="bidPrice">
            {arts.auction_product.status === "sale" && (
              <p style={{ color: "blue" }}>경매 진행중</p>
            )}
            <Timer
              startTime={arts.auction_product.start_time}
              endTime={arts.auction_product.end_time}
            />
            <p>경매종료일</p>
            <p>
              {arts.auction_product.end_time.split("T")[0]}&nbsp;
              {arts.auction_product.end_time.split("T")[1]}
            </p>
            <p>현재 입찰가</p>
            <span>₩{arts.auction_product.bid_price}원</span>
          </div>
          <div className="buttons">
            <a className="frame-btn btn-bid" href="#">
              <span className="frame-btn__outline frame-btn__outline--tall">
                <span className="frame-btn__line frame-btn__line--tall"></span>
                <span className="frame-btn__line frame-btn__line--flat"></span>
              </span>
              <span className="frame-btn__outline frame-btn__outline--flat">
                <span className="frame-btn__line frame-btn__line--tall"></span>
                <span className="frame-btn__line frame-btn__line--flat"></span>
              </span>
              <span className="frame-btn__solid"></span>
              <span className="frame-btn__text" onClick={handleBidClick}>
                입찰하기
              </span>
            </a>
            {showModal && (
              <div className="modal">
                <div className="modal-content">
                  <h2>입찰가격 입력</h2>
                  <input
                    type="number"
                    value={bidPrice}
                    onChange={handleBidPriceChange}
                    placeholder="가격을 입력하세요"
                  />
                  <div>
                    <button onClick={handleSubmitBid}>입찰하기</button>
                    <button onClick={handleCloseModal}>취소</button>
                  </div>
                </div>
              </div>
            )}

            {confirmBid && (
              <div className="modal">
                <div className="modal-content">
                  <h2>입찰 확정</h2>
                  <h3>입찰가: {bidPrice}원. </h3>
                  <h4>이 가격으로 입찰하시겠습니까?</h4>
                  <div>
                    <button onClick={handleConfirmBid}>확인</button>
                    <button onClick={() => setConfirmBid(false)}>취소</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="product_detail">작품 설명</div>
    </section>
  );
};
