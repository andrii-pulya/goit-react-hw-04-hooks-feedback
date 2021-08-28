import Notification from '../Notification/Notification'
import PropTypes from 'prop-types'

import { StatItem, StatContainer } from './Statistics.styled'

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      {total ? (
        <StatContainer>
          <StatItem>Good: {good}</StatItem>
          <StatItem>Neutral: {neutral}</StatItem>
          <StatItem>Bad: {bad}</StatItem>
          <StatItem>Total: {total}</StatItem>
          <StatItem>Positive feedback: {positivePercentage}%</StatItem>
        </StatContainer>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}
