const ShortsWidget = ({
  userId,
  videos = [],
  style = {},
  className = "",
  videoStyle = {},
}) => {
  const userVideos = videos.filter((video) => video.userId === userId);

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
      {/* <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {videos.map((video) => (
          <div key={video.id} style={{ width: "45%" }}>
            <video
              src={video.url}
              controls
              style={{ height: " 50%", width: "50%", borderRadius: "1rem" }}
            />
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
      </div> */}
      <div className={`shorts-widget-container ${className}`} style={style}>
        {userVideos.map((video) => (
          <div key={video.id} className="shorts-video-card">
            <video src={video.url} controls style={videoStyle} />
            <h4>{video.title}</h4>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortsWidget;
