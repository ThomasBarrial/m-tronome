import React from 'react';

function Métronome() {
  return (
    <div>
      <p>BPM</p>
      <input type="range" min="40" max="240" value="" onChange="" />
      <button>Start</button>
    </div>
  );
}

export default Métronome;
