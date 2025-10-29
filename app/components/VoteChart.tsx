"use client";

import { useEffect, useRef } from 'react';

export default function VoteChart() {
  const chartRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const handleMouseEnter = () => {
      chart.classList.add('animated');
    };

    const handleAnimationEnd = (e: AnimationEvent) => {
      if ((e.target as HTMLElement).tagName === 'circle') {
        setTimeout(() => {
          chart.classList.remove('animated');
        }, 100);
      }
    };

    chart.addEventListener('mouseenter', handleMouseEnter);
    chart.addEventListener('animationend', handleAnimationEnd as EventListener);

    return () => {
      chart.removeEventListener('mouseenter', handleMouseEnter);
      chart.removeEventListener('animationend', handleAnimationEnd as EventListener);
    };
  }, []);

  return (
    <div className="glass-card p-6">
      <h2 className="text-lg font-semibold text-white mb-4 font-mono uppercase tracking-wider">
        Vote Distribution
      </h2>
      <div className="h-[200px] flex items-center justify-center">
        <svg ref={chartRef} viewBox="0 0 200 200" className="w-40 h-40 vote-chart">
          {/* YES slice (98.26%) - almost full circle */}
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#00FFFF"
            strokeWidth="25"
            transform="rotate(-90 100 100)"
          />
          {/* NO slice (1.04%) - small slice */}
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#FFAD66"
            strokeWidth="25"
            transform="rotate(-90 100 100)"
          />
          {/* ABSTAIN slice (0.68%) - tiny slice */}
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#6B7280"
            strokeWidth="25"
            transform="rotate(-90 100 100)"
          />
        </svg>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#00FFFF]"></div>
            <span className="text-white font-mono">YES</span>
          </div>
          <span className="text-white font-mono font-bold">98.26%</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#FFAD66]"></div>
            <span className="text-white font-mono">NO</span>
          </div>
          <span className="text-white font-mono font-bold">1.04%</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            <span className="text-white font-mono">ABSTAIN</span>
          </div>
          <span className="text-white font-mono font-bold">0.68%</span>
        </div>
      </div>
    </div>
  );
}

