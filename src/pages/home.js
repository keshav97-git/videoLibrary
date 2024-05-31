import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Welcome to Video Library</h2>
      <h2>To browse all videos, click the below button or go to video page</h2>
      <Link to="/videos">
        <button>Explore Videos</button>
      </Link>
    </div>
  );
}
