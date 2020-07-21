import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {


  
  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.props.frontImg} alt="oh no!" />
          </div>
          <div className="content">
              <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
