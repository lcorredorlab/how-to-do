import { useState, useEffect } from "react";

const RetroLoading = () => {
  const [progress, setProgress] = useState(0);
  const totalBars = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prevProgress + (100 / totalBars), 100);
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  const bars = Array.from({ length: totalBars }, (_, index) => {
    const width = Math.min((progress / 100) * 100, ((index + 1) / totalBars) * 100);
    return (
      <div
        key={index}
        className="h-2 border-2 border-white bg-white rounded-full"
        style={{ width: `${width}%`, transition: "width 0.5s ease-out" }}
      />
    );
  });

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <h1 className="text-3xl font-extrabold pixel-font mb-4 text-white">Loading...</h1>
      <div className="w-64 border p-2 border-lime-400 rounded-full">{bars}</div>
      <div className="text-sm text-center mt-1 text-white">Please wait...</div>
    </div>
  );
};

export default RetroLoading;
