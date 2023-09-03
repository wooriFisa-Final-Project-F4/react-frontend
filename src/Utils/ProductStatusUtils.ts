interface StatusMap {
  [key: string]: { label: string; color: string };
}

export const getAuctionStatus = (status: string) => {
  const map: StatusMap = {
    WAIT: { label: "경매예정", color: "orange" },
    PROGRESS: { label: "경매중", color: "green" },
    END: { label: "경매종료", color: "red" },
  };

  return map[status] || { label: "Unknown", color: "black" };
};
