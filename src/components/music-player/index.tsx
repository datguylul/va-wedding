"use client";
import { useRef, useState } from "react";
import { RiVolumeMuteFill, RiVolumeUpFill } from "react-icons/ri";
import "./music-player.css";

export function MusicPlayer() {
  const [pause, setPause] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onToggleMute = () => {
    const audio: Partial<HTMLAudioElement> | null =
      document.getElementById("audio");
    if (pause) {
      audio?.play?.();
      return;
    }
    audio?.pause?.();
  };

  return (
    <div className="fixed left-6 bottom-6 z-10">
      <button
        className="btn btn-primary text-textWhite music-toggle"
        style={{
          borderRadius: 9999,
        }}
        data-fancybox="gallery"
        onClick={onToggleMute}
        ref={buttonRef}
      >
        {pause ? (
          <RiVolumeMuteFill size={16} className="min-w-[30px]" />
        ) : (
          <RiVolumeUpFill size={16} />
        )}
      </button>
      <audio
        ref={audioRef}
        id="audio"
        autoPlay={true}
        // controls
        loop
        onPause={() => setPause(true)}
        onPlay={() => setPause(false)}
      >
        <source
          src="https://res.cloudinary.com/dl764aic5/video/upload/v1722321653/va-wedding/music/TAEYANG_-_WEDDING_DRESS___Piano_Cover_AnCoong_128kbps_v3vaep.mp3"
          type="audio/mp3"
        />
      </audio>
    </div>
  );
}
