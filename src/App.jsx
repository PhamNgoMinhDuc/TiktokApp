import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import Header from "./components/Header";

import Video from "./components/Video";
import { db } from "./firebase";
import "./scss/app.scss";

function App() {
  const [videos, setVideos] = useState([]);
  const videosColection = collection(db, "Videos");
  useEffect(() => {
    const getVideos = async () => {
      const data = await getDocs(videosColection);
      setVideos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getVideos();
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="mt"></div>

        {videos.map((video) => (
          <Video key={video.id} data={video} />
        ))}
      </div>
    </div>
  );
}

export default App;
