import { useState, useEffect } from "react";
import UserBadge from "../components/userBadge";
import { useNavigate } from "react-router-dom";
import timeIcon from "/icons/laptop.png";
import launchIcon from "/icons/start-up.png";
import Button from "../components/button";

const TimeMarketing = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const totalBars = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prevProgress + 100 / totalBars, 100);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  const handleContinueClick = () => {
    navigate("/maintenance");
  };

  const bars = Array.from({ length: totalBars }, (_, index) => {
    const width = Math.min(
      (progress / 100) * 100,
      ((index + 1) / totalBars) * 100
    );
    return (
      <div
        key={index}
        className="h-2 border-2 border-white bg-white rounded-full"
        style={{ width: `${width}%`, transition: "width 0.5s ease-out" }}
      />
    );
  });

  return (
    <div
      className={`${
        loading ? "opacity-0" : "opacity-100"
      } transition-opacity duration-1000 ease-in-out h-screen w-full flex pt-[200px] px-[150px] flex-col`}
    >
      <UserBadge playerHearts={3} />
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <h1 className="text-white text-3xl">
          So... what are we going to learn to do?
        </h1>
        <p className="text-white text-2xl">3. Marketing and Launch</p>

        <div className="flex gap-4 mt-20 items-center">
          <img
            src={timeIcon}
            alt="time icon"
            className="h-20 w-20 filter invert brightness-100"
          />
          <div className="w-64 border p-2 h-fit border-lime-400 rounded-full">
            {bars}
          </div>
          <img
            src={launchIcon}
            alt="launch icon"
            className={`${progress === 100 ? "opacity-100" : "opacity-0"}
          transition ease-in-out h-20 w-20 filter invert brightness-100`}
          />
        </div>

        <div className={`${progress === 100 ? "opacity-100" : "opacity-0"} w-full flex justify-center`}>
            <Button onClick={handleContinueClick} variant="primary">
                Continue
            </Button>
        </div>
      </div>
    </div>
  );
};

export default TimeMarketing;
