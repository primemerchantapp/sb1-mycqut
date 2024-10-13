import React, { useState, useEffect } from 'react';
import { Play, Mic, Music, Volume2 } from 'lucide-react';
import CDSpinner from './components/CDSpinner';
import EffectButton from './components/EffectButton';
import VolumeSlider from './components/VolumeSlider';
import Waveform from './components/Waveform';

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);

  useEffect(() => {
    let interval: number | undefined;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      setRecordingTime(0);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const effectButtons = [
    { name: 'Whoosh', color: 'bg-purple-500' },
    { name: 'Yes', color: 'bg-green-500' },
    { name: 'Ohh oh', color: 'bg-orange-500' },
    { name: 'Crunchy', color: 'bg-yellow-500' },
    { name: 'Downlifter', color: 'bg-pink-500' },
    { name: 'Uplifter', color: 'bg-blue-500' },
    { name: 'DJing', color: 'bg-indigo-500' },
    { name: 'Countdown', color: 'bg-red-500' },
    { name: 'Applause', color: 'bg-teal-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl shadow-2xl p-6 w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top Section */}
          <div className="col-span-1 md:col-span-3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-2xl font-bold">DJ Mixer</h2>
              <div className="flex items-center space-x-2">
                <div className={`h-4 w-4 rounded-full ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`}></div>
                <span className="text-white">{formatTime(recordingTime)}</span>
              </div>
            </div>
            <Waveform />
          </div>

          {/* Middle Section */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
            <CDSpinner isPlaying={true} />
            <div className="grid grid-cols-2 gap-4 mt-4">
              <VolumeSlider label="Voice 1" />
              <VolumeSlider label="Voice 2" />
              <VolumeSlider label="BGM" />
              <VolumeSlider label="Effects" />
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-1">
            <div className="grid grid-cols-3 gap-2">
              {effectButtons.map((effect, index) => (
                <EffectButton key={index} name={effect.name} color={effect.color} />
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="col-span-1 md:col-span-3 flex justify-center space-x-4 mt-6">
            <button className="bg-green-500 text-white p-4 rounded-lg shadow-lg hover:bg-green-600 flex items-center">
              <Play className="mr-2" />
              Play
            </button>
            <button
              className={`${isRecording ? 'bg-red-600' : 'bg-red-500'} text-white p-4 rounded-lg shadow-lg hover:bg-red-600 flex items-center`}
              onClick={() => setIsRecording(!isRecording)}
            >
              <Mic className="mr-2" />
              {isRecording ? 'Stop' : 'Record'}
            </button>
            <button className="bg-blue-500 text-white p-4 rounded-lg shadow-lg hover:bg-blue-600 flex items-center">
              <Music className="mr-2" />
              Mix
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;