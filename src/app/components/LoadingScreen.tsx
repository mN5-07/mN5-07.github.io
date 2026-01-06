import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState(0); // 0 = entering, 1 = visible, 2 = exiting
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const appearTimer = setTimeout(() => setPhase(1), 100);

    const ellipsisInterval = setInterval(() => {
      setDots((prev) => (prev + 1) % 4);
    }, 400);

    const exitTimer = setTimeout(() => {
      setPhase(2);
      setTimeout(onLoadComplete, 700);
    }, 2000);

    return () => {
      clearTimeout(appearTimer);
      clearTimeout(exitTimer);
      clearInterval(ellipsisInterval);
    };
  }, [onLoadComplete]);

  const ellipsis = '.'.repeat(dots);

  return (
    <div
      className={`
        fixed inset-0 z-[9999] flex items-center justify-center
        bg-gradient-to-br from-slate-50 via-slate-50/90 to-white/80
        dark:from-slate-950 dark:via-slate-950/90 dark:to-slate-900/80
        backdrop-blur-sm transition-opacity duration-700 ease-out
        ${phase === 2 ? 'opacity-0 pointer-events-none' : 'opacity-100'}
      `}
    >
      <div
        className={`
          relative flex flex-col items-center gap-10
          transition-all duration-1000 ease-out
          ${phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
      >
        {/* Compact Spinner + MN Logo */}
        <div className="relative">
          <div className="animate-spin duration-[6500ms] ease-in-out">
            <svg
              width="96"
              height="96"
              viewBox="0 0 100 100"
              className="w-20 h-20 md:w-24 md:h-24 drop-shadow-[0_4px_10px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_4px_14px_rgba(0,0,0,0.35)]"
            >
              <defs>
                <linearGradient id="premium-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>

                <linearGradient id="fade-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                  <stop offset="20%" stopColor="#ffffff" stopOpacity="0.7" />
                  <stop offset="80%" stopColor="#ffffff" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Subtle static ring */}
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-slate-200/40 dark:text-slate-700/30"
              />

              {/* Main gradient arc */}
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="url(#premium-gradient)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeDasharray="62 100"
                opacity="0.92"
              />

              {/* Moving shine */}
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="url(#fade-gradient)"
                strokeWidth="2.8"
                opacity="0.45"
                className="animate-[dash_3s_linear_infinite]"
              />
            </svg>
          </div>

          {/* MN – scaled down to match smaller spinner */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="
                text-2xl md:text-3xl font-semibold tracking-widest
                bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                bg-clip-text text-transparent
                dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400
              "
              style={{
                filter: 'drop-shadow(0 2px 6px rgba(99,102,241,0.3))',
              }}
            >
              MN
            </span>
          </div>
        </div>

        {/* Subtle animated status */}
        <div className="text-xs font-medium tracking-widest text-slate-400/70 dark:text-slate-500/60 uppercase">
          initializing{ellipsis}
        </div>
      </div>

      {/* Custom shine animation */}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -160;
          }
        }
      `}</style>
    </div>
  );
}