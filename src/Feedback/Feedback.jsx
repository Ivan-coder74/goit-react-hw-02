function Feedback({ feedback }) {
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const totalFeedbacks = feedback.good + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedbacks) * 100);

  return totalFeedback > 0 ? (
    <div>
      <div>Good: {feedback.good}</div>
      <div>Neutral: {feedback.neutral}</div>
      <div>Bad: {feedback.bad}</div>
      <div>Positive:{positiveFeedback || 0}</div>
    </div>
  ) : (
    "No feedback yet"
  );
}

export default Feedback;
