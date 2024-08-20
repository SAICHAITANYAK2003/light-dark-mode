// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeMode = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }
  render() {
    const {isDarkMode} = this.state
    const ischangecontainer = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttontext = isDarkMode ? 'Light Mode' : 'Dark Mode'
    const changetext = isDarkMode ? 'light-text-mode' : 'dark-text-mode'

    return (
      <div className="main-container">
        <div className={`ld-container ${ischangecontainer}`}>
          <p className={`${changetext}`}>Click to Change Mode</p>
          <button
            type="button"
            className="mode-button"
            onClick={this.changeMode}
          >
            {buttontext}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
