import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    toggleBack: true
  }

  toggleImage = () => {
    this.setState(prevState => {
      return { toggleBack: !prevState.toggleBack }
    })
  }
  render() {
    const { name, id, hp, sprites } = this.props

    return (
      <Card>
        <div>
          <div className="image" onClick={this.toggleImage}>
            { this.state.toggleBack
            ? <img alt="oh no!" src={sprites.front}/>
            : <img alt="oh no!" src={sprites.back}/>}
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
