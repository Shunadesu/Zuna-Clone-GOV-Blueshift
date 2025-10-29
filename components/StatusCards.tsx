export default function StatusCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Status Card */}
      <div
        className="glass-card p-4 text-center flex flex-col relative group"
        title="Overall vote status - shows if proposal is passing"
      >
        <h3 className="text-sm font-semibold text-white mb-2 font-mono uppercase tracking-wider">
          Status
        </h3>
        <div className="mb-2 flex-1 flex items-center justify-center gap-2">
          <span className="text-xl font-bold font-mono text-blueshift-cyan">PASSING</span>
          <svg
            className="w-5 h-5 text-blueshift-cyan"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <p className="text-xs text-blueshift-gray-500 font-mono">98.3% VOTED YES</p>
      </div>

      {/* Quorum Card */}
      <div
        className="glass-card p-4 text-center flex flex-col relative group"
        title="Quorum requires at least 33.33% of total token supply to participate in voting"
      >
        <h3 className="text-sm font-semibold text-white mb-2 font-mono uppercase tracking-wider">
          Quorum
        </h3>
        <div className="mb-2 flex-1 flex items-center justify-center gap-2">
          <span className="text-xl font-bold font-mono text-blueshift-cyan">ACHIEVED</span>
          <svg
            className="w-5 h-5 text-blueshift-cyan"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <p className="text-xs text-blueshift-gray-500 font-mono">52.1% PARTICIPATED</p>
      </div>

      {/* Supermajority Card */}
      <div
        className="glass-card p-4 text-center flex flex-col relative group"
        title="Supermajority requires at least 66.67% of participants to vote YES"
      >
        <h3 className="text-sm font-semibold text-white mb-2 font-mono uppercase tracking-wider">
          Supermajority
        </h3>
        <div className="mb-2 flex-1 flex items-center justify-center gap-2">
          <span className="text-xl font-bold font-mono text-blueshift-cyan">ACHIEVED</span>
          <svg
            className="w-5 h-5 text-blueshift-cyan"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <p className="text-xs text-blueshift-gray-500 font-mono">98.3% VOTED YES</p>
      </div>

      {/* Time Left Card */}
      <div
        className="glass-card p-4 text-center flex flex-col relative group"
        title="Voting deadline - countdown to end of Epoch 842"
      >
        <h3 className="text-sm font-semibold text-white mb-2 font-mono uppercase tracking-wider">
          Time Left
        </h3>
        <div className="mb-2 flex-1 flex items-center justify-center">
          <span className="text-xl font-bold font-mono text-white">LOADING</span>
        </div>
        <p className="text-xs text-blueshift-gray-500 font-mono uppercase">UNTIL EPOCH 843</p>
      </div>
    </div>
  );
}

