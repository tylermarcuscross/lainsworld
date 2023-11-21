import './VideoPlayer.css'; // Make sure to create this CSS file
import loadingVideo from '../assets/loadingVideo.mp4'; // Path to your loading video

const VideoPlayer = ({ videoRef, onVideoEnd }) => {
  
  return (
    <div className="video-container">
      <video ref={videoRef} onEnded={onVideoEnd}>
        <source src={loadingVideo} type="video/mp4"/>
      </video>
    </div>
  );
};

export default VideoPlayer;
