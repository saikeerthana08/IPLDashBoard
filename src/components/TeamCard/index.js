// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {name, id, imageUrl} = teamDetails
    return (
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="list-item-container">
          <img className="team-card-image" src={imageUrl} alt={` ${name} `} />
          <p className="item-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
