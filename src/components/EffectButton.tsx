import React from 'react';

interface EffectButtonProps {
  name: string;
  color: string;
}

const EffectButton: React.FC<EffectButtonProps> = ({ name, color }) => {
  return (
    <button
      className={`${color} text-white p-2 rounded-lg neon-border text-sm`}
    >
      {name}
    </button>
  );
};

export default EffectButton;