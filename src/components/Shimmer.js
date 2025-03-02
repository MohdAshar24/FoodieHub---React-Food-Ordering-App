const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img"></div>
      <div className="shimmer-line shimmer-title"></div>
      <div className="shimmer-line shimmer-subtitle"></div>
      <div className="shimmer-line shimmer-details"></div>
      <div className="shimmer-line shimmer-price"></div>
    </div>
  );
};

const ShimmerUI = () => {
  return (
    <div className="shimmer-container">
      {Array(6)
        .fill("")
        .map((_, index) => (
          <ShimmerCard key={index} />
        ))}
    </div>
  );
};

export default ShimmerUI;
