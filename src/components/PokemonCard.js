import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

 state = {
   displayBack: false
 }

 changeDisplay = () => {
   this.setState(prevState=>({displayBack: !prevState.displayBack}))
 }

 image = () => {
   if (this.state.displayBack){
     return this.props.sprites.back
   } else {
     return this.props.sprites.front
   }
   
 }

  render() {
    return (
      <Card>
        <div onClick={this.changeDisplay}>
          <div className="image">
            <img src={this.image()} alt="oh no!" />
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
