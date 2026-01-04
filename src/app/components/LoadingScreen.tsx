import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + (100 - prev) * 0.1;
      });
    }, 80);

    const minTimeTimer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onLoadComplete, 600);
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(minTimeTimer);
    };
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-gray-900 transition-opacity duration-600 ease-out font-sans ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif' }}
    >
      <div className="w-full max-w-md px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light tracking-wider text-gray-800 dark:text-gray-100 mb-2">
            Loading
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 tracking-wide">
            Preparing something beautiful...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            >
              <div className="h-full w-12 bg-white/30 dark:bg-white/20 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Percentage */}
        <div className="mt-6 text-center">
          <span className="text-2xl font-medium text-gray-700 dark:text-gray-200 tabular-nums">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
}