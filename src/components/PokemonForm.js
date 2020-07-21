import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handlePictureChange = (e) => {
    this.setState({sprites: { ...this.state.sprites, [e.target.name]: e.target.value}})
  }

  handleSubmit = (e) => {
    
    e.preventDefault()
    fetch('http://localhost:3000/pokemon',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        hp: parseInt(this.state.hp),
        sprites:{
          front: this.state.sprites.front,
          back: this.state.sprites.back
        }
      })
    })
    .then(res=>res.json())
    .then(newPokemon=> {
        console.log(newPokemon),
        this.props.handleNewPokemon(newPokemon),
        this.setState({
                      name: "",
                      hp: "",
                      sprites: {
                        front: "",
                        back: ""
                      }
                    })
    })

  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid value={this.state.name} label="Name" placeholder="Name" name="name" onChange={this.handleChange}/>
            <Form.Input fluid value={this.state.hp} label="hp" placeholder="hp" name="hp" onChange={this.handleChange}/>
            <Form.Input fluid value={this.state.sprites.front} label="Front Image URL" placeholder="url" name="front" onChange={this.handlePictureChange}/>
            <Form.Input fluid value={this.state.sprites.back} label="Back Image URL" placeholder="url" name="back" onChange={this.handlePictureChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
