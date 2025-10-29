"use client";

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto mb-8">
      <div className="flex items-center justify-between mb-6">
        <svg
          width="150"
          height="30"
          viewBox="0 0 150 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-auto"
        >
          <g>
            <rect x="0" y="8" width="4" height="4" fill="#00FFFF" />
            <rect x="4" y="4" width="4" height="4" fill="#00FFFF" />
            <rect x="8" y="0" width="4" height="4" fill="#00FFFF" />
            <rect x="4" y="12" width="4" height="4" fill="#00FFFF" />
            <rect x="8" y="8" width="4" height="4" fill="#00FFFF" />
            <rect x="12" y="4" width="4" height="4" fill="#00FFFF" />
            <rect x="8" y="16" width="4" height="4" fill="#00FFFF" />
            <rect x="12" y="12" width="4" height="4" fill="#00FFFF" />
            <rect x="16" y="8" width="4" height="4" fill="#00FFFF" />
          </g>
          <text
            x="24"
            y="20"
            fontFamily="monospace, sans-serif"
            fontSize="18"
            fontWeight="bold"
            fill="white"
          >
            blueshift
          </text>
        </svg>
        <button className="bg-blueshift-cyan hover:bg-blueshift-cyan/80 text-blueshift-dark font-mono font-semibold px-6 py-2 rounded-lg transition-colors">
          Connect Wallet
        </button>
      </div>
      <div className="text-left">
        <h1 className="text-3xl font-bold text-white font-mono uppercase mb-2">
          SIMD-0326:Alpenglow
        </h1>
        <div className="flex items-center space-x-4 text-xs">
          <a
            href="https://github.com/solana-foundation/solana-improvement-documents/pull/326"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-400 hover:text-blueshift-cyan font-mono transition-colors"
          >
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
            <span>View SIMD</span>
          </a>
          <a
            href="https://forum.solana.com/t/simd-0326-alpenglow-protocol/1234"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-400 hover:text-blueshift-cyan font-mono transition-colors"
          >
            <svg className="w-3 h-3 fill-current" x="0" y="0" version="1.1" viewBox="0 0 397.7 311.7">
              <path d="M64.6 237.9a13 13 0 0 1 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7a13 13 0 0 1-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z" />
              <path d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7a13 13 0 0 1-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z" />
              <path d="M333.1 120.1a13 13 0 0 0-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7a13 13 0 0 0 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z" />
            </svg>
            <span>Forum Discussion</span>
          </a>
        </div>
      </div>
    </header>
  );
}

