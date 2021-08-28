import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'

import { Button, BtnContainer, ItemBtnList } from './FeedbackOptions.styled'

export default function FeedbackOptions({ options, leaveFeedback }) {
  return (
    <BtnContainer>
      {Object.keys(options).map((option) => {
        return (
          <ItemBtnList key={nanoid()}>
            <Button
              key={option}
              typeFeedback={option}
              onClick={() => leaveFeedback(option)}
            >
              {option}
            </Button>
          </ItemBtnList>
        )
      })}
    </BtnContainer>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  leaveFeedback: PropTypes.func.isRequired,
}
