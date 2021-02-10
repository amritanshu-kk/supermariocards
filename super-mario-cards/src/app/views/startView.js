import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions';

import {
  GAME_DIFFICULTY,
  GAME_STATES,
  MUSIC
  } from '../constants';

// import styled from 'styled-components';
import Modal from '../modal';
import RadioButton from '../radioButton';
import Audio from '../audio';


class StartView extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.keyboardHandler = this.keyboardHandler.bind(this);

    this.state = {
      selectedOption: GAME_DIFFICULTY.EASY
    };

  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyboardHandler );
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyboardHandler );
  }

  render() {

    return (
      <React.Fragment>
        <Modal
          tabIndex={1}
          title="Choose a difficulty setting:"
          buttonText="Start game"
          buttonHandler={this.handleClick}
          >
          <fieldset>
            <RadioButton
              difficulty={GAME_DIFFICULTY.EASY}
              checked={this.state.selectedOption === GAME_DIFFICULTY.EASY}
              changeHandler={this.handleChange }
            />
            <RadioButton
              difficulty={GAME_DIFFICULTY.MEDIUM}
              checked={this.state.selectedOption === GAME_DIFFICULTY.MEDIUM}
              changeHandler={this.handleChange }
            />

            <RadioButton
              difficulty={GAME_DIFFICULTY.HARD}
              checked={this.state.selectedOption === GAME_DIFFICULTY.HARD}
              changeHandler={this.handleChange }
              />
          </fieldset>
        </Modal>
        <Audio sound={MUSIC.START} />
      </React.Fragment>);
  }

  keyboardHandler(e) {

    if (e.key === "Enter") {
      this.handleClick(e);
    }

    if (e.key === "ArrowDown" || e.key === "ArrowUp"){
      this.setNewDifficulty(e);
    }

  }

  setNewDifficulty(e) {
    e.preventDefault();
    const difficulty = [ GAME_DIFFICULTY.EASY, GAME_DIFFICULTY.MEDIUM, GAME_DIFFICULTY.HARD];

    const list = document.querySelectorAll("input[type='radio']");

    const startPos = this.getStartPos(list);
    let newPos;

    if(e.key === "ArrowDown") {
      newPos = startPos + 1;
    }

    if(e.key === "ArrowUp") {
      newPos = startPos - 1;
    }

    if(newPos < 0) {
      newPos = list.length-1;
    }
    if(newPos > list.length-1) {
      newPos = 0;
    }

    this.setState({
      selectedOption: difficulty[newPos]
    });
  }

  getStartPos(list) {
    for(let key of list.keys()) {
      if(list[key].checked === true){
        return key;
      }
    }
  }

  handleChange(e) {
    this.setState({
      selectedOption: e.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();

    this.props.actions.createGame();
    this.props.actions.setGameDifficulty(this.state.selectedOption);
    this.props.actions.updateGameState(GAME_STATES.IN_PROGRESS);
  }

}


function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(null, mapDispatchToProps)(StartView);
