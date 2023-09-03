class ProductReadResponse {
  id: number;
  name: string;
  artist: string;
  identifier: string;
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
  auctionStartTime: string;
  auctionEndTime: string;
  bidUserId: string;
  images: string[];

  constructor(
    id: number,
    name: string,
    artist: string,
    identifier: string,
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
    auctionStartTime: string,
    auctionEndTime: string,
    bidUserId: string,
    images: string[]
  ) {
    this.id = id;
    this.name = name;
    this.artist = artist;
    this.identifier = identifier;
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
    this.bidUserId = bidUserId;
    this.images = images;
  }
}

export default ProductReadResponse;
