import React from 'react';

const Waveform: React.FC = () => {
  return (
    <div className="bg-gray-700 h-16 rounded-lg overflow-hidden">
      {/* Placeholder for waveform visualization */}
      <div className="h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50"></div>
    </div>
  );
};

export default Waveform;