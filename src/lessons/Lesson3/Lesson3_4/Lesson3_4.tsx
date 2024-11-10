import { MyVideoPlayer } from "./MyVideoPlayer";
import { useRef } from "react";

const Lesson3_4 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div>
      <button onClick={() => videoRef.current?.play()}>Play</button>
      <button onClick={() => videoRef.current?.pause()}>Pause</button>
      <br />
      <MyVideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        type="video/mp4"
        width="250"
        ref={videoRef}
      />
    </div>
  );
};

export default Lesson3_4;
