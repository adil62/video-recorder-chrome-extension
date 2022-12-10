import React, {useState} from 'react';
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.body
);

function VideoControls (props) {
    const [isMenuOpen, setIsMenuOpen] = useState();
    const [isPlaying, setIsPlaying] = useState();
    const time = '01:41';
    const handleDelete = () => {}
    const handleStop = () => {}

    const handlePlayPause = () => {
        if (isPlaying) {
            // stop the recording
        }
        // continue the recording
    }

    return (
        <div>
            <span>${time}</span>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handlePlayPause}> {isPlaying ? 'Pause' : "Play"}</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

root.render(
    <React.StrictMode>
      <VideoControls />
    </React.StrictMode>
);
