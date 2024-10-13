import React from 'react';
import { Volume2 } from 'lucide-react';

interface VolumeSliderProps {
  label: string;
}

const VolumeSlider: React.FC<VolumeSliderProps> = ({ label }) => {
  return (
    <div className="flex items-center space-x-2">
      <Volume2 className="text-white" size={16} />
      <input
        type="range"
        min="0"
        max="100"
        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
      />
      <span className="text-white text-xs">{label}</span>
    </div>
  );
};

export default VolumeSlider;