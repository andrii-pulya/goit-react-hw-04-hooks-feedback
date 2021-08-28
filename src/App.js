import React, { useState } from 'react'

import './App.css'

import Section from './components/Section/Section.jsx'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions.jsx'
import Statistics from './components/Statistics/Statistics.jsx'

export default function App() {
  const [good, setGoodFeedback] = useState(0)
  const [neutral, setNeutralFeedback] = useState(0)
  const [bad, setBadFeedback] = useState(0)

  const incrementFeedback = (feedback) => {
    switch (feedback) {
      case 'good':
        setGoodFeedback((prevState) => prevState + 1)
        break
      case 'neutral':
        setNeutralFeedback((prevState) => prevState + 1)
        break
      case 'bad':
        setBadFeedback((prevState) => prevState + 1)
        break
      default:
        break
    }
  }

  function total() {
    return good + neutral + bad
  }

  const positivePercentage = Math.round((good / total()) * 100)

  return (
    <div>
      <Section title="Please, leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          leaveFeedback={incrementFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total()}
          positivePercentage={positivePercentage}
        />
      </Section>
    </div>
  )
}
