import React, { useEffect, useState } from "react";
import "./Product.css";
import "./button.scss";
import { Timer } from "./Timer";
import { useParams } from "react-router-dom";
import ProductReadResponse from "../../../Api/ProducService/ProductResponse";
import { findProductById } from "../../../Api/ProducService/ProductAPI";
import { getAuctionStatus } from "../../../Utils/ProductStatusUtils";
import { Loading } from "../../../Utils/Loading";
import { FetchFail } from "../../../Utils/FetchFail";

export const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<ProductReadResponse | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [bidPrice, setBidPrice] = useState("");
  const [confirmBid, setConfirmBid] = useState(false);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const fetchedProduct = await findProductById(Number(productId));
        setProduct(fetchedProduct);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchProductDetail();
    setIsLoading(false);
  }, [productId]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <FetchFail message={error} />;
  }

  const { label, color } = product?.auctionStatus
    ? getAuctionStatus(product.auctionStatus)
    : { label: "N/A", color: "N/A" };

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
              src={product?.images[activeIndex]}
              alt={`Artwork image ${activeIndex}`}
            />
          </div>
          <div className="thumbnails">
            {product?.images.map((image, index) => (
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
            <h2>{product?.name}</h2>
            <p className="artist">{`${product?.artist} ${product?.completionDate}`}</p>
            <div className="inform">
              <p>{product?.country}</p>
              <p>{product?.technique}</p>
              <p>{product?.style}</p>
              <p>{product?.size}</p>
            </div>
          </div>
          <div className="bidPrice">
            <p style={{ color: color }}>{label}</p>
            {product?.auctionStartTime && product?.auctionEndTime && (
              <Timer
                startTime={product.auctionStartTime}
                endTime={product.auctionEndTime}
              />
            )}
            <p style={{ fontSize: "15px" }}>
              (
              {product?.auctionEndTime
                ? `${product.auctionEndTime.split("T")[0]} ${
                    product.auctionEndTime.split("T")[1]
                  }`
                : "N/A"}
              에 종료)
            </p>
            <p>경매가</p>
            <span>
              ₩
              {product?.auctionPrice
                ? parseInt(product.auctionPrice, 10).toLocaleString("ko-KR")
                : "N/A"}
              원
            </span>
            <p>입찰자 : {product?.bidUserId}</p>
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
                  <h3>
                    입찰가: {parseInt(bidPrice, 10).toLocaleString("ko-KR")}원.{" "}
                  </h3>
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
      <div className="product_detail">{product?.description}</div>
    </section>
  );
};
