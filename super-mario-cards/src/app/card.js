import React from 'react';
import { CARD_STATES, CARD_SIGNS } from './constants';
import styled from 'styled-components';

import { BLACK } from './styling/colors';

class Card extends React.Component {

  shouldComponentUpdate(nextProps) {
    if(JSON.stringify(nextProps) === JSON.stringify(this.props)) {
      return false
    } else {
      return true;
    }
  }

  setCard() {
    let card;

    switch(this.props.state) {

      case CARD_STATES.HIDDEN:
        card = (
          <StyledCard className="card" id={this.props.id} onClick={this.props.cardHandler}>
            <div className="card__side card__side--front">
            </div>
            <div className="card__side card__side--back"
              style={{ backgroundImage: "url(" + CARD_SIGNS[this.props.sign] + ")" }}
            >
            </div>
          </StyledCard>
        );
        break;

      case CARD_STATES.VISIBLE:
        card = (
          <StyledCard className="card card--visible" id={this.props.id} >
            <div className="card__side card__side--front">
            </div>
            <div className="card__side card__side--back"
              style={{ backgroundImage: "url(" + CARD_SIGNS[this.props.sign] + ")" }}
            >
            </div>
          </StyledCard>
        );
        break;

      case CARD_STATES.INACTIVE:
        card = (
          <StyledCard className="card card--inactive" id={this.props.id}>
            <div className="card__side card__side--front">

            </div>
            <div className="card__side card__side--back"
              style={{ backgroundImage: "url(" + CARD_SIGNS[this.props.sign] + ")" }}
            >
            </div>
          </StyledCard>
        );
        break;

        default:
          card = (
            <StyledCard className="card" id={this.props.id} onClick={this.props.cardHandler}>
              <div className="card__side card__side--front">

              </div>
              <div className="card__side card__side--back"
                style={{ backgroundImage: "url(" + CARD_SIGNS[this.props.sign] + ")" }}
              >
              </div>
            </StyledCard>
          );
    }
    return card;
  }

  render() {
    const card = this.setCard();

    return (
      <React.Fragment>
        {card}
      </React.Fragment>
    )
  }
}

const StyledCard = styled.div`
  position: relative;
  display: block;
  font-size: 0;
  width: 100%;
  text-align: center;
  padding-top: calc(77 / 52.5 * 100%);

  &:not(.card--inactive){
    cursor: pointer;
  }

  .card__side {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border: 3px solid ${BLACK};
    border-radius: 10px;
    box-sizing: border-box;

    &:not(.card--inactive) {
      transition: transform .6s ease;

      &--back {
        transform: rotateY(180deg);
      }
    }

    &--front {
      background-color: white;
      background-image: url(${CARD_SIGNS.spades});
      background-repeat: no-repeat;
      background-size: 70% auto;
      background-position: center;
    }

    &--back {
      background-color: white;
      transform: rotateY(180deg);
      background-repeat: no-repeat;
      background-position: center;
    }

  }

  &.card--visible .card__side--front {
    transform: rotateY(-180deg);
  }

  &.card--visible .card__side--back {
    transform: rotate(0);
  }

  &.card--inactive .card__side {
    &--front {
      transform: rotateY(-180deg);
    }

    &--back {
      transform: rotate(0);
    }

  }


  img {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;


export default Card;
