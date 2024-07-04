import { useState, useEffect } from 'react';

import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options'
import Notification from '../Notification/Notification';




export default function App() {
  const [feedback, setFeedbacks] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
    if (savedFeedback !== null) {
      return savedFeedback;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }
  );
  
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback))
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedbacks((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }))
  };
  const reset = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0
    })
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);



  return (<>
    <Description />
    <Options updateFeedback={updateFeedback} reset={reset} totalFeedback={totalFeedback} />
    {totalFeedback > 0 ? (<Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}  />) : (<Notification/>)}
  </>)

}

  