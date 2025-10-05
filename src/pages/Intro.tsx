import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const INTRO_VIDEO_DURATION = 17000; // ms, fallback if video can't detect end

const Intro: React.FC = () => {
  const navigate = useNavigate();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Fallback: auto next after fixed time
    timeoutRef.current = setTimeout(() => {
      navigate("/team");
    }, INTRO_VIDEO_DURATION);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [navigate]);

  const handleEnded = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    navigate("/team");
  };

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black z-[9999] flex items-center justify-center">
      <video
        src="/intro.mp4"
        autoPlay
        onEnded={handleEnded}
        className="w-full h-full object-cover"
        playsInline
        // controls={false} // Hide controls for clean intro
        style={{ background: "#000" }}
      >
        Trình duyệt của bạn không hỗ trợ video.
      </video>
      {/* Optional: overlay text */}
      {/* <div className="absolute bottom-10 left-0 right-0 text-center text-white text-xl font-bold drop-shadow-lg">Chào mừng các bạn và thầy!</div> */}
    </div>
  );
};

export default Intro;
