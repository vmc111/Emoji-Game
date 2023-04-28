// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, gameStatus} = props

  const gameOver = (
    <div className="navbar">
      <div className="row-ele">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
        />
        <p>Emoji Game</p>
      </div>
    </div>
  )

  const gameNotOver = (
    <div className="navbar">
      <div className="row-ele">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className="row-ele">
        <p className="score-margin">Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    </div>
  )

  const body = gameStatus ? gameOver : gameNotOver

  return <>{body}</>
}

export default NavBar
