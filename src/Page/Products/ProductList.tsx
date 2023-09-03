import React, { useEffect, useState } from "react";
import ProductReadResponse from "../../Api/ProducService/ProductResponse";
import { findAllProducts } from "../../Api/ProducService/ProductAPI";
import { Grid, Container } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { Link } from "react-router-dom";
import { Loading } from "../../Utils/Loading";
import { FetchFail } from "../../Utils/FetchFail";

export const ProductList = () => {
  const [products, setProducts] = useState<ProductReadResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await findAllProducts();
        setProducts(fetchedProducts);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchProducts();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <FetchFail message={error} />;
  }

  return (
    <Container style={{ marginTop: "20px", width: "100%" }}>
      <Grid container direction="column">
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <ProductCard {...product} />
          </Link>
        ))}
      </Grid>
    </Container>
  );
};
