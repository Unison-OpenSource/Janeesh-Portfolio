import React from "react";
import YTCard from "./YtCard";
import videos from "./videos.json";

const App = () => {
  return (
    <div className="App p-4">
      <h1 className="text-center text-2xl mb-6">My YouTube Videos</h1>
      {videos.map((video) => (
        <YTCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default App;
