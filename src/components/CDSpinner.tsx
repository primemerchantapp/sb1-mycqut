import React from 'react';

interface CDSpinnerProps {
  isPlaying: boolean;
}

const CDSpinner: React.FC<CDSpinnerProps> = ({ isPlaying }) => {
  return (
    <div className="relative mx-auto my-4">
      <img
        src="https://stremio.aitek.site/assets/images/2.gif"
        className={`w-36 h-36 rounded-full ${isPlaying ? 'animate-spin' : ''}`}
        alt="CD Spinner"
        style={{ animationDuration: '4s' }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
          Rock Music
        </div>
      </div>
    </div>
  );
};

export default CDSpinner;