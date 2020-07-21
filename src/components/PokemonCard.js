import React from 'react';
import { Card } from 'semantic-ui-react';

class PokemonCard extends React.Component {
	state = {
    front: true
  
	};
	handlePic = () => {
		this.setState({ front: !this.state.front });
	};
	render() {
		return (
			<Card onClick={this.handlePic}>
				<div>
					<div className='image'>
						<img
							src={this.state.front ? this.props.front : this.props.back}
							alt='oh no!'
						/>
					</div>
					<div className='content'>
						<div className='header'>{this.props.name}</div>
					</div>
					<div className='extra content'>
						<span>
							<i className='icon heartbeat red' />
							{this.props.hp}
						</span>
					</div>
				</div>
			</Card>
		);
	}
}

export default PokemonCard;
