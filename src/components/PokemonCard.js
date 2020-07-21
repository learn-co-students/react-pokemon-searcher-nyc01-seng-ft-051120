import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state ={
    clicked: false,
    image: this.props.frontImg
  }

  handleToggleImage = () => {
    if(this.state.clicked === true){
      this.setState({
        clicked: false,
        image: this.props.backImg
      })
    } else{
      this.setState({
        clicked: true,
        image: this.props.frontImg})
    }
  }
  
  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleToggleImage}>
            <img src={this.state.image} alt="oh no!" />
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
