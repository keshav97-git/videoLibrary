import { useContext } from "react";
import { VideoContext } from "../context/videoContext";
import { Link } from "react-router-dom";
export default function LikedVideos() {
  const { lvideo } = useContext(VideoContext);
  return (
    <div>
      <h3>Liked Videos </h3>
      <ul style={{ display: "flex" }}>
        {lvideo.map((item) => {
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
            </li>
          );
        })}
      </ul>
    </div>
  );
}
