import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Intro: React.FC = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const handlePlay = () => {
    setStarted(true);
    videoRef.current?.play();
  };

  const handleEnded = () => {
    navigate("/team");
  };

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black z-[9999] flex items-center justify-center">
      <video
        ref={videoRef}
        src="/intro.mp4"
        onEnded={handleEnded}
        className="w-full h-full object-cover"
        playsInline
        controls={false}
        style={{ background: "#000" }}
      >
        Trình duyệt của bạn không hỗ trợ video.
      </video>
      {!started && (
        <button
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-0 m-0 border-none bg-transparent hover:bg-transparent focus:bg-transparent shadow-none flex items-center justify-center"
          onClick={handlePlay}
          aria-label="Phát video"
        >
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
            <polygon points="28,20 56,36 28,52" fill="#06b6d4" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Intro;
