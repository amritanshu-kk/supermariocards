import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styled from 'styled-components';

import Card from './card';
import * as actionCreators from './actions';


import { BEIGE, ORANGE } from './styling/colors';


class Playfield extends React.Component {
  constructor(props) {
    super(props);

    this.cardHandler = this.cardHandler.bind(this);
  }

  createCardList() {
    return this.props.cardList.map((card, index) => {
      return (<Card key={"kc"+ index } id={card.id} cardHandler={this.cardHandler}
        sign={card.sign} pos={card.pos} state={card.state} />);
    });
  }

  cardHandler(e) {
    e.preventDefault();

    const currentSelectedCard = e.currentTarget.id;

    if(this.props.selectedCards.length < 1) {
      this.props.actions.updateSelectedCards(currentSelectedCard);
    } else if(this.props.selectedCards.length === 1) {
      if(this.props.selectedCards[0] !== currentSelectedCard) {
        this.props.actions.updateSelectedCards(currentSelectedCard);
      }
    }
  }

  render() {
    const list = this.createCardList();

    return (
      <StyledPlayfield className="playfield">
        {list}
      </StyledPlayfield>
    )
  }

}

function mapStateToProps(state) {
  return {
    cardList: state.cardList,
    selectedCards: state.selectedCards
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playfield);

const StyledPlayfield = styled.div`
  background-color: ${ORANGE.normal}
  border: 10px solid ${ORANGE.border};
  border-radius: 30px;
  color: ${BEIGE};
  position: relative;
  width: 85vh;
  height: 61vh;
  padding: 30px 30px 30px 30px;
  box-shadow: inset 0px -9px 0px 0px ${ORANGE.shadow};
  left: 50%;
  transform: translateX(-50%);
  top: 10px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  grid-gap: 5px 5px;
  min-height: 360px;
  min-width: 500px;
  max-height: 600px;
  max-width: 834px;


  &:before {
    border-radius: 20px 20px 0 0;
    box-shadow: inset 0px 10px 0px 0px ${ORANGE.light};
    content: "";
    display: block;
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
  }
  `
