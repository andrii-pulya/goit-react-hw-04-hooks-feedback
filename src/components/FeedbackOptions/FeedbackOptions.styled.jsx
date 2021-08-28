import styled from '@emotion/styled/macro'

const getBtnColor = ({ typeFeedback }) => {
  switch (typeFeedback) {
    case 'good':
      return 'green'
    case 'neutral':
      return 'blue'
    case 'bad':
      return 'tomato'
    default:
      return 'grey'
  }
}

export const Button = styled.button`
  display: block;
  width: max-content;
  border: 2px solid grey;
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  text-transform: capitalize;
  cursor: pointer;

  background-color: ${getBtnColor};
`
export const BtnContainer = styled.ul`
  display: flex;
  padding: 0;
  justify-content: center;
  list-style: none;
`

export const ItemBtnList = styled.li`
  display: block;
`
