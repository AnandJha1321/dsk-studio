import React from 'react';
import Image from 'next/image';
import { PlayIcon } from '@heroicons/react/solid';

const Video = ({ reelThumbnail, reelLink, width }) => {
  return (
    <div
      style={{
        width: {width},
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onClick={() => window.open(reelLink, '_blank')}
    >
      {/* Reel Thumbnail */}
      <Image
        src={reelThumbnail}
        alt="Instagram Reel"
        width = {width}
        height= "500"
        style={{ objectFit: 'cover', display: 'block' }}
      />
      
      {/* Play Button */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          pointerEvents: 'none', // Ensure this div doesn't block the click event
        }}
      >
        <PlayIcon alt="Play Button" width={30} height={30} className='text-white'/>
      </div>
    </div>
  );
};

export default Video;
