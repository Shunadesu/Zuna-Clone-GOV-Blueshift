export default function TokenChart() {
  return (
    <div className="glass-card p-6">
      <h2 className="text-lg font-semibold text-white mb-4 font-mono uppercase tracking-wider">
        Token Distribution
      </h2>
      <div className="h-[200px] flex items-center justify-center">
        <svg viewBox="0 0 300 200" className="w-full h-full">
          {/* Y-axis lines */}
          <line x1="40" y1="20" x2="280" y2="20" stroke="#2A2B30" strokeWidth="1" />
          <line x1="40" y1="60" x2="280" y2="60" stroke="#2A2B30" strokeWidth="1" />
          <line x1="40" y1="100" x2="280" y2="100" stroke="#2A2B30" strokeWidth="1" />
          <line x1="40" y1="140" x2="280" y2="140" stroke="#2A2B30" strokeWidth="1" />
          
          {/* CLAIMED bar (52.5%) */}
          <rect x="60" y="77" width="50" height="63" fill="#00FFFF" rx="4" />
          <text x="85" y="155" textAnchor="middle" fill="#CDD1DB" fontSize="10" fontFamily="monospace">
            CLAIMED
          </text>
          
          {/* VOTED bar (52.1%) */}
          <rect x="125" y="78" width="50" height="62" fill="#7B9FFF" rx="4" />
          <text x="150" y="155" textAnchor="middle" fill="#CDD1DB" fontSize="10" fontFamily="monospace">
            VOTED
          </text>
          
          {/* UNCLAIMED bar (47.5%) */}
          <rect x="190" y="83" width="50" height="57" fill="#4A4A4A" rx="4" />
          <text x="215" y="155" textAnchor="middle" fill="#CDD1DB" fontSize="10" fontFamily="monospace">
            UNCLAIMED
          </text>
        </svg>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#00FFFF]"></div>
            <span className="text-white font-mono">CLAIMED</span>
          </div>
          <span className="text-white font-mono font-bold">52.5%</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#7B9FFF]"></div>
            <span className="text-white font-mono">VOTED</span>
          </div>
          <span className="text-white font-mono font-bold">52.1%</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#4A4A4A]"></div>
            <span className="text-white font-mono">UNCLAIMED</span>
          </div>
          <span className="text-white font-mono font-bold">47.5%</span>
        </div>
      </div>
    </div>
  );
}

