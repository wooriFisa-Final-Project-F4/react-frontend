import React, { useState } from "react";
import ProductRequest from "../../../Api/ProducService/ProductRequest";
import { saveProduct } from "../../../Api/ProducService/ProductAPI";
import "./AddProduct.css";
export const AddProduct = () => {
  const [request, setRequest] = useState<ProductRequest>({
    name: "",
    artist: "",
    country: "",
    description: "",
    completionDate: "",
    size: "",
    medium: "",
    theme: "",
    style: "",
    technique: "",
    auctionPrice: "",
    auctionStatus: "",
    auctionStartTime: "",
    auctionEndTime: "",
    images: [],
  });
  const dateToStr = (date: any) => {
    return date.toISOString().split(".")[0];
  };
  const handleSubmit = async () => {
    console.log(request);
    try {
      const response = await saveProduct(request);
      alert("Product successfully registered: " + response);
    } catch (error: any) {
      console.error("An error occurred:", error);
      alert("An error occurred: " + error.message);
    }
  };

  return (
    <section className="addProduct">
      <div className="productsTable">
        <table border={1}>
          <tbody>
            <tr>
              <td>제목</td>
              <td>아티스트</td>
              <td>나라</td>
              <td>설명</td>
              <td>작품완성일</td>
              <td>규격</td>
              <td>매체</td>
              <td>테마</td>
              <td>스타일</td>
              <td>기법</td>
              <td>경매가</td>
              <td>경매상태</td>
              <td>경매 시작 시간</td>
              <td>경매 종료 시간</td>
              <td>이미지</td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  onChange={(e) =>
                    setRequest({ ...request, name: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) =>
                    setRequest({ ...request, artist: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) =>
                    setRequest({ ...request, country: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) =>
                    setRequest({ ...request, description: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="date"
                  onChange={(e) =>
                    setRequest({ ...request, completionDate: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) =>
                    setRequest({ ...request, size: e.target.value })
                  }
                />
              </td>
              <td>
                <select
                  onChange={(e) =>
                    setRequest({ ...request, medium: e.target.value })
                  }
                >
                  <option value="회화">회화</option>
                  <option value="조각">조각</option>
                  <option value="사진">사진</option>
                  <option value="소묘">소묘</option>
                  <option value="인쇄">인쇄</option>
                  <option value="종이">종이</option>
                  <option value="섬유 예술">섬유 예술</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) =>
                    setRequest({ ...request, theme: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) =>
                    setRequest({ ...request, style: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) =>
                    setRequest({ ...request, technique: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  onChange={(e) =>
                    setRequest({ ...request, auctionPrice: e.target.value })
                  }
                />
              </td>
              <td>
                <select
                  onChange={(e) =>
                    setRequest({ ...request, auctionStatus: e.target.value })
                  }
                >
                  <option value="WAIT">WAIT</option>
                  <option value="PROGRESS">PROGRESS</option>
                  <option value="END">END</option>
                </select>
              </td>
              <td>
                <input
                  type="datetime-local"
                  onChange={(e) =>
                    setRequest({
                      ...request,
                      auctionStartTime: dateToStr(new Date(e.target.value)),
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="datetime-local"
                  onChange={(e) =>
                    setRequest({
                      ...request,
                      auctionEndTime: dateToStr(new Date(e.target.value)),
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="file"
                  multiple
                  onChange={(e) => {
                    const files = Array.from(e.target.files || []);
                    setRequest({ ...request, images: files });
                  }}
                />
              </td>
              <td>
                <button className="button" onClick={handleSubmit}>
                  추가
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
