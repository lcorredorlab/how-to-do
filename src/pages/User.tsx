import React, { useState, useEffect, useRef } from "react";
import Button from "../components/button";
import playIcon from "/icons/play.png";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [loading, setLoading] = useState(true);
  const [playerName, setPlayerName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("playerName");
    if (storedName) {
      setPlayerName(storedName);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setPlayerName(name);
    localStorage.setItem("playerName", name);
    localStorage.setItem("playerHearts", '3');
  };

  const handleContinue = () => {
    navigate("/game");
  };

  const handleReset = () => {
    setPlayerName("");
    localStorage.removeItem("playerName");
    localStorage.removeItem("playerHearts");
    inputRef.current?.focus();
  };

  return (
    <div
      className={`${
        loading ? "opacity-0" : "opacity-100"
      } transition-opacity duration-1000 ease-in-out h-screen w-full flex items-center justify-center flex-col`}
    >
      <label
        className="text-white text-2xl font-bold mb-3"
        htmlFor="playerName"
      >
        Ready player one?
      </label>
      <input
        type="text"
        id="playerName"
        value={playerName}
        onChange={handleInputChange}
        ref={inputRef}
        className="p-2 rounded-md bg-gray-700 w-[300px] text-white border border-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-400 placeholder:text-white"
        placeholder="Enter your player name"
        autoComplete="off"
      />
      {playerName && (
        <>
          <p className="text-white text-xl mt-3">Welcome, {playerName}!</p>

          <div className="w-full flex gap-3 justify-center mt-5">
            <Button onClick={handleReset} variant="secondary">
              Cancel
            </Button>
            <Button onClick={handleContinue} variant="primary">
              Continue
              <img
                src={playIcon}
                className="h-4 w-4 ilter invert brightness-100"
                alt="play icon button"
              />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default User;
