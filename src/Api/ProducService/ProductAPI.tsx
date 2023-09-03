import axios from "axios";
import ProductResponse from "./ProductResponse";
import ProductRequest from "./ProductRequest";

const API_BASE_URL = "http://localhost:8888/product/v1";
export const findAllProducts = async (): Promise<ProductResponse[]> => {
  const response = await axios.get<ProductResponse[]>(`${API_BASE_URL}`);
  return response.data;
};
export const findProductById = async (
  productId: number
): Promise<ProductResponse> => {
  const response = await axios.get<ProductResponse>(
    `${API_BASE_URL}/${productId}`
  );
  return response.data;
};
export const saveProduct = async (request: ProductRequest): Promise<string> => {
  const formData = new FormData();
  formData.append("name", request.name);
  formData.append("artist", request.artist);
  formData.append("country", request.country);
  formData.append("description", request.description);
  formData.append("completionDate", request.completionDate);
  formData.append("size", request.size);
  formData.append("medium", request.medium);
  formData.append("theme", request.theme);
  formData.append("style", request.style);
  formData.append("technique", request.technique);
  formData.append("auctionPrice", request.auctionPrice);
  formData.append("auctionStatus", request.auctionStatus);
  formData.append("auctionStartTime", request.auctionStartTime);
  formData.append("auctionEndTime", request.auctionEndTime);

  // Uploading multiple images
  request.images.forEach((image, index) => {
    formData.append(`images[${index}]`, image);
  });

  const response = await axios.post(`${API_BASE_URL}/save`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
