import React, { Component} from 'react';

class AddPlayerForm extends Component {

  static PropTypes = {
    changeScore: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
  };

  playerInput = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.playerInput.current.value);
    e.currentTarget.reset();
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
        <input
          type="text"
          ref={this.playerInput}
          placeholder="Enter a player's name"
        />

        <input
          type="submit"
          value="Add Player"
        />
      </form>
    );
  }
}

export default AddPlayerForm;
