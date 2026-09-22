import React from 'react';
import { WORLD_WIDTH, WORLD_HEIGHT } from '../../data/mapData';

interface FloorMapProps {
  floor: 1 | 2;
}

export function FloorMap({ floor }: FloorMapProps) {
  return (
    <div
      className="absolute inset-0 bg-[#060b10] pointer-events-none overflow-hidden"
      style={{ width: WORLD_WIDTH, height: WORLD_HEIGHT }}
    >
      {/* Starry Space Background */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px), radial-gradient(circle at center, rgba(255,255,255,0.8) 2px, transparent 2px), radial-gradient(circle at center, rgba(255,255,255,0.5) 3px, transparent 3px)',
          backgroundSize: '250px 250px, 400px 400px, 600px 600px',
          backgroundPosition: '0 0, 150px 200px, 350px 100px',
        }}
      />

      {/* Glow Effects Behind Ship */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-900/20 rounded-full blur-[100px]" />

      <svg width={WORLD_WIDTH} height={WORLD_HEIGHT} viewBox={`0 0 ${WORLD_WIDTH} ${WORLD_HEIGHT}`} className="absolute inset-0 drop-shadow-[0_20px_50px_rgba(0,0,0,1)]">
        <defs>
          {/* Among Us Patterns */}
          <pattern id="metal-floor" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <rect width="80" height="80" fill="#697686" />
            {/* Panel lines */}
            <path d="M 0 40 L 80 40 M 40 0 L 40 80" stroke="#5b6675" strokeWidth="3" />
            <path d="M 0 38 L 80 38 M 38 0 L 38 80" stroke="#7a889a" strokeWidth="1" />
            {/* Rivets */}
            <circle cx="10" cy="10" r="2" fill="#44555d" />
            <circle cx="70" cy="10" r="2" fill="#44555d" />
            <circle cx="10" cy="70" r="2" fill="#44555d" />
            <circle cx="70" cy="70" r="2" fill="#44555d" />
          </pattern>

          <pattern id="library-floor" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <rect width="60" height="60" fill="#a0a0a0" />
            <rect x="0" y="0" width="30" height="30" fill="#e0e0e0" />
            <rect x="30" y="30" width="30" height="30" fill="#e0e0e0" />
          </pattern>

          <pattern id="hazard-stripes" x="0" y="0" width="40" height="40" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="40" height="20" fill="#eab308" />
            <rect x="0" y="20" width="40" height="20" fill="#171717" />
          </pattern>

          <pattern id="corridor-floor" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="#809099" />
            <path d="M 50 0 L 50 100" stroke="#72828b" strokeWidth="4" />
          </pattern>

          {/* Wall Filters */}
          <filter id="wall-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="15" stdDeviation="10" floodColor="#000000" floodOpacity="0.8" />
          </filter>
        </defs>

        {floor === 1 && (
          <g id="floor-1-map" transform="translate(900, 350)">
            {/* --- HULL / CORRIDORS --- */}
            {/* The outer spaceship hull acting as the main corridor floor */}
            <path
              d="M 20 150 Q 20 50 120 50 L 880 50 Q 980 50 980 150 L 980 950 Q 980 1050 880 1050 L 120 1050 Q 20 1050 20 950 Z"
              fill="url(#corridor-floor)"
              stroke="#2d3748"
              strokeWidth="40"
              strokeLinejoin="round"
              filter="url(#wall-shadow)"
            />
            {/* Inner wall highlight */}
            <path
              d="M 20 150 Q 20 50 120 50 L 880 50 Q 980 50 980 150 L 980 950 Q 980 1050 880 1050 L 120 1050 Q 20 1050 20 950 Z"
              fill="none"
              stroke="#4a5568"
              strokeWidth="10"
              strokeLinejoin="round"
            />

            {/* --- ROOMS --- */}
            {/* Library (Top center) */}
            <rect x="350" y="50" width="300" height="180" fill="url(#library-floor)" />
            <path d="M 350 50 L 650 50 L 650 230 L 350 230 Z" fill="none" stroke="#2d3748" strokeWidth="20" strokeLinejoin="round" />
            <text x="500" y="140" fill="#333" fontSize="36" fontWeight="900" textAnchor="middle" letterSpacing="5" style={{ textShadow: '0 2px 4px rgba(255,255,255,0.5)' }}>LIBRARY</text>
            <rect x="420" y="170" width="160" height="40" fill="#718096" stroke="#4a5568" strokeWidth="4" rx="5" /> {/* Desk */}

            {/* C1 (Left Room) */}
            <rect x="-260" y="200" width="260" height="320" fill="url(#metal-floor)" rx="20" />
            <rect x="-260" y="200" width="260" height="320" fill="none" stroke="#2d3748" strokeWidth="30" rx="20" />
            <rect x="-260" y="200" width="260" height="320" fill="none" stroke="#4a5568" strokeWidth="10" rx="20" />
            <text x="-130" y="370" fill="#1a202c" fontSize="48" fontWeight="900" textAnchor="middle" letterSpacing="5">C1</text>

            {/* C2 (Right Room) */}
            <rect x="1000" y="200" width="260" height="320" fill="url(#metal-floor)" rx="20" />
            <rect x="1000" y="200" width="260" height="320" fill="none" stroke="#2d3748" strokeWidth="30" rx="20" />
            <rect x="1000" y="200" width="260" height="320" fill="none" stroke="#4a5568" strokeWidth="10" rx="20" />
            <text x="1130" y="370" fill="#1a202c" fontSize="48" fontWeight="900" textAnchor="middle" letterSpacing="5">C2</text>

            {/* Central Hub Box */}
            <rect x="380" y="250" width="240" height="220" fill="#52616b" rx="15" />
            <rect x="380" y="250" width="240" height="220" fill="none" stroke="#2d3748" strokeWidth="30" rx="15" />
            <rect x="380" y="250" width="240" height="220" fill="none" stroke="#4a5568" strokeWidth="10" rx="15" />
            <circle cx="500" cy="360" r="50" fill="#2d3748" stroke="#1a202c" strokeWidth="10" />
            <circle cx="500" cy="360" r="30" fill="#4fd1c5" opacity="0.8" /> {/* Glowing center */}

            {/* Stairwell Room */}
            <g transform="translate(380, 520)">
              {/* Box */}
              <rect x="0" y="0" width="240" height="200" fill="#718096" rx="10" />
              <rect x="0" y="0" width="240" height="200" fill="none" stroke="#2d3748" strokeWidth="30" rx="10" />
              <rect x="0" y="0" width="240" height="200" fill="none" stroke="#4a5568" strokeWidth="10" rx="10" />

              {/* Stairs */}
              <rect x="20" y="20" width="200" height="120" fill="#4a5568" stroke="#1a202c" strokeWidth="5" />
              <line x1="20" y1="50" x2="220" y2="50" stroke="#2d3748" strokeWidth="6" />
              <line x1="20" y1="80" x2="220" y2="80" stroke="#2d3748" strokeWidth="6" />
              <line x1="20" y1="110" x2="220" y2="110" stroke="#2d3748" strokeWidth="6" />
              <line x1="120" y1="20" x2="120" y2="140" stroke="#1a202c" strokeWidth="10" />

              {/* Landing Zone */}
              <rect x="20" y="140" width="200" height="40" fill="url(#hazard-stripes)" stroke="#1a202c" strokeWidth="5" />
            </g>

            {/* Bottom Utility Room */}
            <rect x="380" y="750" width="240" height="180" fill="url(#metal-floor)" rx="15" />
            <rect x="380" y="750" width="240" height="180" fill="none" stroke="#2d3748" strokeWidth="30" rx="15" />
            <rect x="380" y="750" width="240" height="180" fill="none" stroke="#4a5568" strokeWidth="10" rx="15" />
            {/* Crates */}
            <rect x="420" y="790" width="60" height="60" fill="#9c4221" stroke="#742a12" strokeWidth="5" rx="5" />
            <rect x="450" y="820" width="80" height="80" fill="#b7791f" stroke="#975a16" strokeWidth="5" rx="5" />

            {/* Hallway Details (Vents, Panels) */}
            {/* Vent left */}
            <rect x="150" y="550" width="60" height="60" fill="#4a5568" stroke="#1a202c" strokeWidth="8" rx="5" transform="rotate(15 180 580)" />
            <line x1="160" y1="565" x2="200" y2="565" stroke="#1a202c" strokeWidth="4" transform="rotate(15 180 580)" />
            <line x1="160" y1="580" x2="200" y2="580" stroke="#1a202c" strokeWidth="4" transform="rotate(15 180 580)" />
            <line x1="160" y1="595" x2="200" y2="595" stroke="#1a202c" strokeWidth="4" transform="rotate(15 180 580)" />

            {/* Floor Grates */}
            <rect x="800" y="650" width="80" height="150" fill="#4a5568" stroke="#2d3748" strokeWidth="6" rx="5" />
            <rect x="810" y="660" width="60" height="130" fill="transparent" stroke="#1a202c" strokeWidth="4" strokeDasharray="10 5" />
          </g>
        )}

        {floor === 2 && (
          <g id="floor-2-map" transform="translate(900, 350)">
            {/* --- HULL / CORRIDORS --- */}
            {/* An abstract ship hull bridging the components */}
            <path
              d="M 50 300 Q 50 200 150 200 L 750 200 Q 850 200 850 300 L 850 900 Q 850 1050 750 1050 L 150 1050 Q 50 1050 50 900 Z"
              fill="url(#corridor-floor)"
              stroke="#2d3748"
              strokeWidth="40"
              strokeLinejoin="round"
              filter="url(#wall-shadow)"
            />
            {/* Inner wall highlight */}
            <path
              d="M 50 300 Q 50 200 150 200 L 750 200 Q 850 200 850 300 L 850 900 Q 850 1050 750 1050 L 150 1050 Q 50 1050 50 900 Z"
              fill="none"
              stroke="#4a5568"
              strokeWidth="10"
              strokeLinejoin="round"
            />

            {/* Right-side external wing/corridor represented by the lines */}
            <path d="M 850 200 L 950 200 L 950 400 L 850 400" fill="url(#metal-floor)" stroke="#2d3748" strokeWidth="20" strokeLinejoin="round" filter="url(#wall-shadow)" />
            <path d="M 850 900 L 1100 900 L 1100 1100 L 850 1100" fill="url(#metal-floor)" stroke="#2d3748" strokeWidth="20" strokeLinejoin="round" filter="url(#wall-shadow)" />

            {/* --- ROOMS --- */}
            {/* Library (Middle) */}
            <rect x="250" y="300" width="280" height="200" fill="url(#library-floor)" rx="20" />
            <rect x="250" y="300" width="280" height="200" fill="none" stroke="#2d3748" strokeWidth="30" rx="20" />
            <rect x="250" y="300" width="280" height="200" fill="none" stroke="#4a5568" strokeWidth="10" rx="20" />
            <text x="390" y="415" fill="#333" fontSize="40" fontWeight="900" textAnchor="middle" letterSpacing="5" style={{ textShadow: '0 2px 4px rgba(255,255,255,0.5)' }}>LIBRARY</text>

            {/* Left Complex Shape (Engine / Systems Area) */}
            <g transform="translate(40, 550)">
              {/* Base floor area */}
              <path d="M 0 0 L 160 0 L 160 80 L 110 80 L 110 160 L 160 160 L 160 290 L 240 290 L 240 400 L 140 400 L 140 290 L 40 290 L 40 240 L 0 240 Z" fill="url(#metal-floor)" />
              {/* Outer stroke */}
              <path d="M 0 0 L 160 0 L 160 80 L 110 80 L 110 160 L 160 160 L 160 290 L 240 290 L 240 400 L 140 400 L 140 290 L 40 290 L 40 240 L 0 240 Z" fill="none" stroke="#2d3748" strokeWidth="25" strokeLinejoin="round" />
              <path d="M 0 0 L 160 0 L 160 80 L 110 80 L 110 160 L 160 160 L 160 290 L 240 290 L 240 400 L 140 400 L 140 290 L 40 290 L 40 240 L 0 240 Z" fill="none" stroke="#4a5568" strokeWidth="8" strokeLinejoin="round" />

              {/* Dark Engine Core */}
              <rect x="40" y="240" width="100" height="50" fill="#1a202c" rx="5" />
              <circle cx="90" cy="265" r="15" fill="#f56565" className="animate-pulse" />
              <line x1="50" y1="265" x2="130" y2="265" stroke="#fc8181" strokeWidth="2" opacity="0.5" />
            </g>

            {/* Stairwell Room */}
            <g transform="translate(250, 550)">
              {/* Box */}
              <rect x="0" y="0" width="280" height="200" fill="#718096" rx="10" />
              <rect x="0" y="0" width="280" height="200" fill="none" stroke="#2d3748" strokeWidth="30" rx="10" />
              <rect x="0" y="0" width="280" height="200" fill="none" stroke="#4a5568" strokeWidth="10" rx="10" />

              {/* Stairs */}
              <rect x="30" y="20" width="220" height="120" fill="#4a5568" stroke="#1a202c" strokeWidth="5" />
              <line x1="30" y1="50" x2="250" y2="50" stroke="#2d3748" strokeWidth="6" />
              <line x1="30" y1="80" x2="250" y2="80" stroke="#2d3748" strokeWidth="6" />
              <line x1="30" y1="110" x2="250" y2="110" stroke="#2d3748" strokeWidth="6" />
              <line x1="140" y1="20" x2="140" y2="140" stroke="#1a202c" strokeWidth="10" />

              {/* Landing Zone */}
              <rect x="30" y="140" width="220" height="40" fill="url(#hazard-stripes)" stroke="#1a202c" strokeWidth="5" />
            </g>

            {/* Bottom Gray Box */}
            <rect x="250" y="780" width="280" height="150" fill="url(#metal-floor)" rx="15" />
            <rect x="250" y="780" width="280" height="150" fill="none" stroke="#2d3748" strokeWidth="30" rx="15" />
            <rect x="250" y="780" width="280" height="150" fill="none" stroke="#4a5568" strokeWidth="10" rx="15" />
            <circle cx="390" cy="855" r="40" fill="#2d3748" stroke="#1a202c" strokeWidth="5" />
            <rect x="370" y="835" width="40" height="40" fill="#90cdf4" rx="5" />

            {/* Right Gray Box (Storage/Security) */}
            <rect x="600" y="650" width="220" height="220" fill="#4a5568" rx="20" />
            <rect x="600" y="650" width="220" height="220" fill="none" stroke="#2d3748" strokeWidth="30" rx="20" />
            <rect x="600" y="650" width="220" height="220" fill="none" stroke="#4a5568" strokeWidth="10" rx="20" />
            {/* Computer Panels */}
            <rect x="640" y="690" width="140" height="50" fill="#1a202c" stroke="#2d3748" strokeWidth="5" rx="5" />
            <rect x="650" y="700" width="30" height="30" fill="#48bb78" />
            <rect x="690" y="700" width="30" height="30" fill="#4299e1" />
            <rect x="730" y="700" width="30" height="30" fill="#ed8936" />
          </g>
        )}
      </svg>
    </div>
  );
}
