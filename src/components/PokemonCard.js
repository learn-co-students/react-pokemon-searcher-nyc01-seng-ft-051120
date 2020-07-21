import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    showBack: false
  }
  
  togglePhoto=()=>{
    this.setState({showBack: !this.state.showBack})
  }

  renderFrontPhoto=()=>{
    return(
      <div className="image">
        <img src={this.props.sprites.front}alt="oh no!" />
      </div>
    )
  }

  renderBackPhoto=()=>{
    return(
      <div className="image">
        <img src={this.props.sprites.back}alt="oh no!" />
      </div>
    )
  }

  render() {
    const {name, hp}=this.props

    return (
      <Card>
        <div onClick={this.togglePhoto}>
          {this.state.showBack ? this.renderBackPhoto() :this.renderFrontPhoto()}
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
