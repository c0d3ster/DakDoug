import { FC, useEffect, useRef } from 'react';

const AudioPlayer: FC<any> = ({ audioDataURI }) => {
  const audioRef: any = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audioDataURI;
      audioRef.current.play();
    }
  }, [audioDataURI]);

  return (
    <div>
      <audio ref={audioRef} controls />
    </div>
  );
};

export default AudioPlayer;
