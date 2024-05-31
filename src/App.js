import "./styles.css";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import LikedVideos from "./pages/likedVideos";
import Videos from "./pages/videos";
import Home from "./pages/home";
import WatchLater from "./pages/watchLater";
import { useContext } from "react";
import { VideoContext } from "./context/videoContext";

import { useEffect } from "react";
export default function App() {
  const { lvideo, watchL } = useContext(VideoContext);
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"} style={{ margin: "10px" }}>
          Home
        </NavLink>
        <NavLink to={"/videos"} style={{ margin: "10px" }}>
          Videos
        </NavLink>
        <NavLink to={"/likedVideos"} style={{ margin: "10px" }}>
          Liked Videos ({lvideo.length})
        </NavLink>
        <NavLink to={"/watchLater"} style={{ margin: "10px" }}>
          Watch Later ({watchL.length})
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/likedVideos" element={<LikedVideos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/watchLater" element={<WatchLater />} />
      </Routes>
    </div>
  );
}
