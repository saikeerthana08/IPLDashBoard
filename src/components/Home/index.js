// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(eachItem => ({
      name: eachItem.name,
      imageUrl: eachItem.team_image_url,
      id: eachItem.id,
    }))
    this.setState({teamsList: formattedData, isLoading: false})
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Oval" color="#FFFFFF" height={80} width={80} />
    </div>
  )

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="app-container">
        <div className="ipl-container">
          <div className="home-title-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logo"
            />
            <h1 className="title">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            this.renderLoader()
          ) : (
            <ul className="list-container">
              {teamsList.map(item => (
                <TeamCard teamDetails={item} key={item.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
