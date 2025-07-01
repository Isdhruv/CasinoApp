// components/Loading.tsx

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[120px] w-full">
      {/* Spinner */}
      <div className="w-10 h-10 relative">
        <svg className="animate-spin w-full h-full" viewBox="0 0 50 50">
          <circle className="text-gray-500" cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="5" />
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="url(#grad)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="90"
            strokeDashoffset="25"
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#710F99" />
              <stop offset="100%" stopColor="#2E063E" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Text */}
      <p className="mt-4 text-white text-sm sm:text-base font-semibold uppercase tracking-wide text-center">
        Transfer in Progress...
      </p>
    </div>
  );
}
