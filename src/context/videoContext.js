import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../api/api1";

export const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [video, setVideo] = useState([]);
  const [lvideo, setLvideo] = useState([]);
  const [watchL, setWatchL] = useState([]);
  const [liked, setLike] = useState([]);
  const handleData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/videos");
      if (res.status == 200) {
        console.log(res.data.videos);
        setVideo(res.data.videos);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  const likedVideo = (video) => {
    setLvideo((lvideo) => [...lvideo, video]);
    setLike((liked) => [...liked, video.id]);
  };

  const wLater = (video) => {
    setWatchL((watchL) => [...watchL, video]);
  };

  return (
    <VideoContext.Provider
      value={{ video, likedVideo, lvideo, watchL, wLater, liked }}
    >
      {children}
    </VideoContext.Provider>
  );
}
