// Write your code here.
import './index.css'

const Card = props => {
  const {score, topScore, btnFun, totalScore} = props

  const changeGame = () => {
    btnFun()
  }

  const gameWonUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const gameLostUrl =
    'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const imgUrl = score === totalScore ? gameWonUrl : gameLostUrl
  const winStatus = score === totalScore ? 'You Won' : 'You Lose'
  const isBest = score >= topScore ? 'Best ' : ''

  return (
    <div className="win-loss-container">
      <img src={imgUrl} alt="won" className="game-img" />
      <div className="column-ele">
        <h1>{winStatus}</h1>
        <p>{isBest}Score</p>
        <h4>
          {score}/{totalScore}
        </h4>
        <button type="button" className="btn" onClick={changeGame}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default Card
