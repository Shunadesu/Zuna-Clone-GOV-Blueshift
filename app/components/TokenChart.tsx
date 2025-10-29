"use client";

export default function TokenChart() {
  return (
    <div className="glass-card p-6">
      <h2 className="text-lg font-semibold text-white mb-4 font-mono uppercase tracking-wider">
        Token Distribution
      </h2>
      <div className="h-[200px] flex items-center justify-center">
        <svg viewBox="0 0 400 200" className="w-full h-full">
          {/* Y-axis labels */}
          <text x="25" y="20" textAnchor="end" fill="#6B7280" fontSize="11" fontFamily="monospace">100</text>
          <text x="25" y="58" textAnchor="end" fill="#6B7280" fontSize="11" fontFamily="monospace">75</text>
          <text x="25" y="96" textAnchor="end" fill="#6B7280" fontSize="11" fontFamily="monospace">50</text>
          <text x="25" y="134" textAnchor="end" fill="#6B7280" fontSize="11" fontFamily="monospace">25</text>
          <text x="25" y="172" textAnchor="end" fill="#6B7280" fontSize="11" fontFamily="monospace">0</text>

          {/* Grid lines */}
          <line x1="35" y1="15" x2="380" y2="15" stroke="#2A2B30" strokeWidth="1" />
          <line x1="35" y1="53" x2="380" y2="53" stroke="#2A2B30" strokeWidth="1" />
          <line x1="35" y1="91" x2="380" y2="91" stroke="#2A2B30" strokeWidth="1" />
          <line x1="35" y1="129" x2="380" y2="129" stroke="#2A2B30" strokeWidth="1" />
          <line x1="35" y1="167" x2="380" y2="167" stroke="#2A2B30" strokeWidth="1" />

          {/* CLAIMED bar (52.5%) */}
          <rect x="80" y="87" width="70" height="80" fill="#00FFFF" rx="6" />
          <text
            x="115"
            y="185"
            textAnchor="middle"
            fill="#9CA3AF"
            fontSize="10"
            fontFamily="monospace"
          >
            CLAIMED
          </text>

          {/* VOTED bar (52.1%) */}
          <rect x="165" y="88" width="70" height="79" fill="#7B9FFF" rx="6" />
          <text
            x="200"
            y="185"
            textAnchor="middle"
            fill="#9CA3AF"
            fontSize="10"
            fontFamily="monospace"
          >
            VOTED
          </text>

          {/* UNCLAIMED bar (47.5%) */}
          <rect x="250" y="95" width="70" height="72" fill="#505050" rx="6" />
          <text
            x="285"
            y="185"
            textAnchor="middle"
            fill="#9CA3AF"
            fontSize="10"
            fontFamily="monospace"
          >
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
            <div className="w-3 h-3 rounded-full bg-[#505050]"></div>
            <span className="text-white font-mono">UNCLAIMED</span>
          </div>
          <span className="text-white font-mono font-bold">47.5%</span>
        </div>
      </div>
    </div>
  );
}

