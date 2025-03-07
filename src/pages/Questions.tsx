import { useEffect, useState } from "react";
import UserBadge from "../components/userBadge";
import saw from "/icons/saw.png";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "What is the most important thing to start software development?",
    answers: [
      { text: "Money, obviously...", correct: false },
      { text: "Having a nephew who knows how to use a computer.", correct: false },
      { text: "Having a valuable idea.", correct: true },
    ],
  },
  {
    question: "Do I need a team of people?",
    answers: [
      { text: "No, one person is enough.", correct: false },
      { text: "Yes, having a team ensures a good product as long as it is organized.", correct: true },
      { text: "No, you can do it yourself.", correct: false },
    ],
  },
  {
    question: "If I create my product, is it necessary to improve it over time?",
    answers: [
      { text: "No, because only I will use it and show it off.", correct: false },
      { text: "Yes, because if it is intended for users, improvements will arise.", correct: true },
      { text: "No, once it is finished, it stays that way.", correct: false },
    ],
  },
];

const Questions = () => {
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [playerHearts, setPlayerHearts] = useState<number>(
    parseInt(localStorage.getItem("playerHearts") || "3", 10)
  );
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("playerHearts", playerHearts.toString());
  }, [playerHearts]);

  const handleAnswerClick = (correct: boolean) => {
    setPlayerHearts((prev) => {
      const newHearts = correct ? prev : Math.max(prev - 1, 0);
      return newHearts;
    });

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setTimeout(() => {
        if (playerHearts > 1) {
          navigate("/game-over");
        } else {
          navigate("/game-over-bad");
          localStorage.setItem("playerHearts", '3');
        }
      }, 500);
    }
  };

  return (
    <div className={`${
      loading ? "opacity-0" : "opacity-100"
    } transition-opacity duration-1000 ease-in-out h-screen w-full flex pt-[200px] px-[150px] flex-col`}>
      <UserBadge playerHearts={playerHearts} />
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <h1 className="text-white text-3xl">Let's see what we learned?</h1>

        <div className="flex w-full gap-4 mt-10 mb-10 justify-center">
          <div className="border border-white rounded-lg p-4 flex items-center justify-center">
            <img src={saw} alt="user icon" className="h-40 w-40 text-white" />
          </div>
          <div className="border border-white rounded-lg p-4 ">
            <p className="text-white text-xl mb-4">
              {questions[currentQuestionIndex].question}
            </p>
            {questions[currentQuestionIndex].answers.map((answer, index) => (
              <div className="mt-5" key={index}>
                <Button onClick={() => handleAnswerClick(answer.correct)}>
                  {answer.text}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
