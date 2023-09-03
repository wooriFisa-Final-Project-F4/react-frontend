import React, { useEffect, useState } from "react";
import ProductReadResponse from "../../../Api/ProducService/ProductResponse";
import { findAllProducts } from "../../../Api/ProducService/ProductAPI";
import "./AllProduct.css";

export const AllProduct = () => {
  const [products, setProducts] = useState<ProductReadResponse[]>([]);

  useEffect(() => {
    // Fetch all products when component mounts
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await findAllProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("An error occurred while fetching data: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="allProduct">
      <div>
        <table border={1}>
          <tbody>
            <tr>
              {products[0] &&
                Object.keys(products[0]).map((key, index) => (
                  <th key={index} style={{ paddingLeft: 10, paddingRight: 10 }}>
                    {key}
                  </th>
                ))}
            </tr>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.artist}</td>
                <td>{product.identifier}</td>
                <td>{product.country}</td>
                <td>{product.description}</td>
                <td>{product.completionDate}</td>
                <td>{product.size}</td>
                <td>{product.medium}</td>
                <td>{product.theme}</td>
                <td>{product.style}</td>
                <td>{product.technique}</td>
                <td>{product.auctionPrice}</td>
                <td>{product.auctionStatus}</td>
                <td>{product.auctionStartTime}</td>
                <td>{product.auctionEndTime}</td>
                <td>{product.bidUserId}</td>
                <td>
                  {product.images.map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt={url}
                      style={{ width: "50px", height: "auto" }}
                    />
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
