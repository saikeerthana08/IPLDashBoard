// Write your code here
import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {recentData} = this.props
    const {result, competingTeam, competingTeamLogo, matchStatus} = recentData
    return (
      <li className={`match-card ${matchStatus}`}>
        <img
          src={competingTeamLogo}
          className="match-card-logo"
          alt={`competing team ${competingTeam}`}
        />
        <p className="match name">{competingTeam}</p>
        <p className="match result">{result}</p>
        <p className="match status">{matchStatus}</p>
      </li>
    )
  }
}
export default MatchCard
