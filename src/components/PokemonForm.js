import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state = {
   name: "",
   hp: "",
   frontUrl: "",
   backUrl: ""
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = e => {
    console.log("ok")
    e.preventDefault()
    const { name, hp, frontUrl, backUrl } = this.state
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: name,
        hp: hp,
        sprites: {
            front: frontUrl,
            back: backUrl
          }
      })
    })
    .then(resp => resp.json())
   .then(pokemon => this.props.addPokemon(pokemon))
   .catch(error => console.error(error))
  }

  render() {
    console.log(this.state)

    const { handleChange, handleSubmit } = this
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={handleChange} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={handleChange} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={handleChange} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange={handleChange} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
