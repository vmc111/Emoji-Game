// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {onclickFunction, item} = props

  const toDo = () => {
    onclickFunction(item.id)
  }

  return (
    <li value={item.id} className="card-item">
      <img
        src={item.emojiUrl}
        onClick={toDo}
        alt={item.emojiName}
        className="img"
      />
    </li>
  )
}

export default EmojiCard
