import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchUserInput: ''}

  onSearch = event => {
    this.setState({searchUserInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchUserInput} = this.state

    const searchResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchUserInput),
    )

    return (
      <div className="app-container">
        <div className="destinations-search-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              className="search-input"
              onChange={this.onSearch}
            />{' '}
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-icon"
              alt="search icon"
            />
          </div>
          <ul className="destinations-list">
            {searchResult.map(eachDestination => (
              <DestinationItem
                key={eachDestination.id}
                eachDestination={eachDestination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
