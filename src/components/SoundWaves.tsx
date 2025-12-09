import { useEffect, useState } from 'react';

export default function SoundWaves() {
  const [bars] = useState(() =>
    Array.from({ length: 60 }, () => ({
      height: Math.random() * 100 + 20,
      delay: Math.random() * 2,
    }))
  );

  return (
    <>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-end gap-1 h-64 opacity-20">
        {bars.slice(0, 30).map((bar, i) => (
          <div
            key={i}
            className="w-1 bg-blue-400 rounded-full animate-wave"
            style={{
              height: `${bar.height}%`,
              animationDelay: `${bar.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-end gap-1 h-64 opacity-20">
        {bars.slice(30, 60).map((bar, i) => (
          <div
            key={i}
            className="w-1 bg-blue-400 rounded-full animate-wave"
            style={{
              height: `${bar.height}%`,
              animationDelay: `${bar.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
