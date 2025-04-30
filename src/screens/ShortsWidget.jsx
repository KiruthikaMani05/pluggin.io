const ShortsWidget = ({ userId, videos = [] }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h4>Shorts for User: {userId} Pluggin.io</h4>
      {/* <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {videoLibrary.map((video) => (
          <div
            key={video.id}
            style={{
              height: "50%",
              width: "25%",
              marginBottom: "20px",
            }}
          >
            <video src={video.url} controls width="100%" />
          </div>
        ))}
      </div> */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {videos.map((video) => (
          <div key={video.id} style={{ width: "45%" }}>
            <video src={video.url} controls width="100%" />
            <h5>{video.title}</h5>
            <p>{video.description}</p>
            {video.buyLink && (
              <a
                href={video.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "6px 12px",
                  backgroundColor: "#ff4081",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                🛒 Buy Now
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortsWidget;
