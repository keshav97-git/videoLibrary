import { useContext, useState } from "react";
import { VideoContext } from "../context/videoContext";
import { Link } from "react-router-dom";

export default function Videos() {
  const { likedVideo, video, wLater, liked } = useContext(VideoContext);
  return (
    <div>
      <h3>All Videos</h3>
      <ul style={{ display: "flex" }}>
        {video.map((item) => {
          const isLiked = liked.includes(item.id);
          return (
            <li
              key={item.id}
              style={{
                border: "3px solid black",
                padding: "10px",
                margin: "10px",
                listStyle: "none",
              }}
            >
              <img src={item.thumbnail} width="200px" alt="" />
              <h3>{item.title}</h3>
              <Link to={item.url}>Video Link</Link>
              <br />
              <button
                style={{ marginTop: "18px" }}
                onClick={() => likedVideo(item)}
                disabled={isLiked}
              >
                {isLiked ? "liked" : "like"}
              </button>

              <button onClick={() => wLater(item)}>Add to watch later</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
