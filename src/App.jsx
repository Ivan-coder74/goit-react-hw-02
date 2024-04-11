// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Description from "./Description/Description";
import Options from "./Options/Options";
import { useState } from "react";
import Feedback from "./Feedback/Feedback";

const saveFeedbackToLocalStorage = (feedback) => {
  localStorage.setItem("feedback", JSON.stringify(feedback));
};
const loadFeedbackFromLocalStorage = () => {
  const savedFeedback = localStorage.getItem("feedback");
  return savedFeedback
    ? JSON.parse(savedFeedback)
    : { good: 0, neutral: 0, bad: 0 };
};

export default function App() {
  const [feedback, setFeedback] = useState(loadFeedbackFromLocalStorage());

  const updateFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
    saveFeedbackToLocalStorage(feedback);
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  return (
    <>
      <Description />
      <Options
        onFeedback={updateFeedback}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback >= 0 && <Feedback feedback={feedback} />}
    </>
  );
}
