class ProductSaveRequest {
  name: string;
  images: File[];
  artist: string;
  country: string;
  description: string;
  completionDate: string;
  size: string;
  medium: string;
  theme: string;
  style: string;
  technique: string;
  auctionPrice: string;
  auctionStatus: string;
  auctionStartTime: any;
  auctionEndTime: any;

  constructor(
    name: string,
    images: File[],
    artist: string,
    country: string,
    description: string,
    completionDate: string,
    size: string,
    medium: string,
    theme: string,
    style: string,
    technique: string,
    auctionPrice: string,
    auctionStatus: string,
    auctionStartTime: any,
    auctionEndTime: any
  ) {
    this.name = name;
    this.images = images;
    this.artist = artist;
    this.country = country;
    this.description = description;
    this.completionDate = completionDate;
    this.size = size;
    this.medium = medium;
    this.theme = theme;
    this.style = style;
    this.technique = technique;
    this.auctionPrice = auctionPrice;
    this.auctionStatus = auctionStatus;
    this.auctionStartTime = auctionStartTime;
    this.auctionEndTime = auctionEndTime;
  }
}

export default ProductSaveRequest;
