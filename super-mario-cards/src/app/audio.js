import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions';

import {Howl, Howler} from 'howler';

import styled from 'styled-components';
import { GREEN } from './styling/colors';

class Audio extends React.Component {
  constructor(props) {
    super(props);

    this.soundToggle = this.soundToggle.bind(this);
    this.setIcon();
    this.sound = new Howl({
      src: [`../assets/sounds/${this.props.sound.src}`],
      loop: this.props.sound.loop,
      volume: 0.7,
      autoplay: false
    });
    Howler.mute(this.props.soundMuted);

  }

  componentDidMount() {
    Howler.mute(this.props.soundMuted);
    this.sound.play();
  }

  componentWillUnmount() {
    this.sound.unload();
  }

  soundToggle(e) {
    e.preventDefault();
    this.props.actions.toggleSound();
  }

  setIcon() {
    this.buttonIcon = !this.props.soundMuted ? "icon-unmuted" : "icon-muted";
  }

  render() {
    Howler.mute(this.props.soundMuted);
    this.setIcon();

    return (
      <React.Fragment>
        <StyledButton onClick={this.soundToggle}>
          <i className={`icon ${this.buttonIcon}`}></i>
        </StyledButton>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    soundMuted: state.soundMuted
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actionCreators, dispatch) }
}


const StyledButton = styled.button`
  display: block;
  right: 20px;
  bottom: 20px;
  background-color: ${GREEN.normal};
  box-shadow: 0px 5px 0px 0px ${GREEN.shadow};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0;
  line-height: 0;
  padding: 10px;
  position:  absolute;
  z-index: 10;

  .icon {
    color: white;
    font-size: 1.5rem;
    line-height: 1em;
  }

  &:hover {
    box-shadow: 0px 4px 0px 0px ${GREEN.shadow};
    bottom: 19px;
  }

  &:active {
    background-color: darken(${GREEN.normal}, 7%);
    box-shadow: 0px 1px 0px 0px ${GREEN.shadow};
    bottom: 16px;
  }
`

export default connect(mapStateToProps, mapDispatchToProps)(Audio);
