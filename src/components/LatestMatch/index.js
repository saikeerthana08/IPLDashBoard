// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const {
      umpires,
      result,
      manOfTheMatch,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
    } = latestMatchDetails
    return (
      <div className="latest-match-card-container">
        <h1 className="heading">Latest Matches</h1>
        <div className="latest-match-card">
          <div className="latest-match-logo-container">
            <div className="latest-match-details-main">
              <p className="latest-match-team name">{competingTeam}</p>
              <p className="latest-match-team date">{date}</p>
              <p className="latest-match-team venue">{venue}</p>
              <p className="latest-match-team status">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="latest-match-logo"
            />
          </div>
          <div className="latest-match-details-info">
            <div className="match-info-item">
              <p className="latest-match-team label">First Innings</p>
              <p className="latest-match-team value">{firstInnings}</p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-team label">Second Innings</p>
              <p className="latest-match-team value">{secondInnings}</p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-team label">Man Of The Match</p>
              <p className="latest-match-team value">{manOfTheMatch}</p>
            </div>
            <div className="match-info-item">
              <p className="latest-match-team label">Umpires</p>
              <p className="latest-match-team value">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
