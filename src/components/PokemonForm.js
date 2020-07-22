import React from 'react'
import { Form } from 'semantic-ui-react'
const initialState = {
  name:"",
  hp:"",
  sprites:{
    front:"",
    back:""
  }
}

class PokemonForm extends React.Component {
  state = initialState

  changeFormHandler = (e) =>{
    const fieldName = e.target.name
    const value = e.target.value
    if(fieldName === 'front' || fieldName === 'back'){
      this.setState( prevState =>{
        const newState = {...prevState}
        newState.sprites[fieldName] = value
        return newState
      })
    }
    else{
      this.setState({[fieldName]:value})
    }
  }

  render() {
    const {name,hp,sprites} = this.props.pokemon
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.props.newPokemon}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={this.props.changeFormHandler}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={this.props.changeFormHandler}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" value={sprites.front} onChange={this.props.changeFormHandler}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" value={sprites.back} onChange={this.props.changeFormHandler}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
