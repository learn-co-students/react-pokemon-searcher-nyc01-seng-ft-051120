import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    cardSideUp: true
  }

  flipCard = () => {
   this.setState({cardSideUp: !this.state.cardSideUp})
  }

  render() {
    const { id, name, hp, sprites} = this.props.pokemon
    const { front, back} = sprites

     let cardSide = front
     if (this.state.cardSideUp){
      cardSide = front
      } else {
      cardSide = back
    }

    return (
      <Card>
        <div>
          <div onClick={()=> this.flipCard()} className="image">
            <img src={cardSide} alt="oh no!" />
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
