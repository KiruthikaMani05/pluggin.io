import videoLibrary from "../global-data/video";

const ShortsWidget = ({ userId }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h4>Shorts for User: {userId}</h4>
      <div
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
      </div>
    </div>
  );
};

export default ShortsWidget;
