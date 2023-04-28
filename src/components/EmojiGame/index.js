import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard'
import Card from '../WinOrLoseCard/index'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {
    score: 0,
    preScore: 0,
    topScore: 0,
    clickedEmojiIds: [],
    isGameOver: false,
  }

  render() {
    const {emojisList} = this.props
    const totalEmojis = emojisList.length
    const {score, preScore, topScore, clickedEmojiIds, isGameOver} = this.state
    const shuffledEmojiList = emojisList.sort(() => Math.random() - 0.5)

    const emojiClicked = id => {
      if (clickedEmojiIds.includes(id)) {
        if (topScore < score) {
          this.setState({topScore: score})
        }
        this.setState({preScore: score})
        this.setState({
          score: 0,
          clickedEmojiIds: [],
          isGameOver: true,
        })
      } else {
        this.setState(preState => ({
          score: preState.score + 1,
          clickedEmojiIds: [...preState.clickedEmojiIds, id],
        }))
      }
    }

    const nextGame = () =>
      this.setState({isGameOver: false, score: 0, preScore: score})

    const cardBody = (
      <Card
        score={preScore}
        topScore={topScore}
        btnFun={nextGame}
        totalScore={totalEmojis}
      />
    )

    const gameBody = (
      <ul className="emojis-container">
        {shuffledEmojiList.map(eachEmoji => (
          <EmojiCard
            onclickFunction={emojiClicked}
            item={eachEmoji}
            key={eachEmoji.id}
          />
        ))}
      </ul>
    )

    const body = isGameOver ? cardBody : gameBody

    return (
      <div className="bg-main">
        <NavBar score={score} topScore={topScore} gameStatus={isGameOver} />
        {body}
      </div>
    )
  }
}

export default EmojiGame
