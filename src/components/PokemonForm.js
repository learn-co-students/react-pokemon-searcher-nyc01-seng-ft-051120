import React from 'react'
import { Form } from 'semantic-ui-react'

const initialState ={
  name: '',
  hp: 0,
  frontUrl: '',
  backUrl: ''
  }


class PokemonForm extends React.Component {

  state = initialState

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    let {name, hp} = this.state
    e.preventDefault()
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
          name,
          hp,
          sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl}
      })
    })
    .then(resp => resp.json())
    .then(newPokemon => {
      this.setState(initialState)
      this.props.handleNewPokemon(newPokemon)})
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange} value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange} value={this.state.frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange} value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
