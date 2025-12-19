export default function Snowfall() {
  // Pre-generated snowflakes - subtle effect
  const snowflakes = [
    { id: 1, left: 5, duration: 18, delay: 0, opacity: 0.4, size: 3 },
    { id: 2, left: 12, duration: 22, delay: 2, opacity: 0.3, size: 2 },
    { id: 3, left: 20, duration: 20, delay: 5, opacity: 0.5, size: 3 },
    { id: 4, left: 28, duration: 25, delay: 1, opacity: 0.35, size: 4 },
    { id: 5, left: 36, duration: 19, delay: 7, opacity: 0.4, size: 2 },
    { id: 6, left: 44, duration: 23, delay: 3, opacity: 0.3, size: 3 },
    { id: 7, left: 52, duration: 21, delay: 6, opacity: 0.45, size: 3 },
    { id: 8, left: 60, duration: 18, delay: 0, opacity: 0.35, size: 4 },
    { id: 9, left: 68, duration: 24, delay: 4, opacity: 0.4, size: 2 },
    { id: 10, left: 76, duration: 20, delay: 8, opacity: 0.3, size: 3 },
    { id: 11, left: 84, duration: 22, delay: 2, opacity: 0.5, size: 3 },
    { id: 12, left: 92, duration: 19, delay: 5, opacity: 0.35, size: 2 },
    { id: 13, left: 8, duration: 26, delay: 3, opacity: 0.4, size: 3 },
    { id: 14, left: 32, duration: 17, delay: 6, opacity: 0.3, size: 4 },
    { id: 15, left: 56, duration: 21, delay: 1, opacity: 0.45, size: 2 },
    { id: 16, left: 80, duration: 23, delay: 4, opacity: 0.35, size: 3 },
    { id: 17, left: 16, duration: 20, delay: 7, opacity: 0.4, size: 3 },
    { id: 18, left: 48, duration: 18, delay: 0, opacity: 0.3, size: 2 },
    { id: 19, left: 72, duration: 25, delay: 5, opacity: 0.5, size: 4 },
    { id: 20, left: 96, duration: 22, delay: 2, opacity: 0.35, size: 3 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
