import React from 'react';

import { ReactComponent as CardStack } from '../assets/cards.svg';
import { ReactComponent as Infinity } from '../assets/infinity.svg';

import { MAX_ATTEMPTS } from './constants';

import styled from 'styled-components';
import { BLACK } from './styling/colors';

function Counter(props) {
  const attempt_limit = MAX_ATTEMPTS[props.difficulty];
  let attempts;

  if(props.difficulty === "easy") {
    attempts = (
      <span className="infinite-attempts">
        <Infinity className="symbol"> </Infinity>
      </span>
    );
  } else {
    attempts = (
      <span className="attempts">{`0${attempt_limit - props.attempts}`}</span>
    );
  }

  return (
    <StyledCounter className="counter">
      <CardStack className="card-icon" alt="card-icon" />
        <span className="multiplier">x</span>
        {attempts}
    </StyledCounter>
  )
}

export default Counter;

const StyledCounter = styled.div`
  color: ${BLACK};
  display: flex;
  align-items: center;
  flex-direction: row;

  .card-icon {
    height: 50px;
    width: auto;
  }

  .multiplier {
    font-size: 20px;
    padding: 10px;
    margin-top: 3px;
  }

  .attempts {
    display: flex;
    font-size: 44px;
  }

  .infinite-attempts {
    position: relative;

    .symbol {
      display: block;
      fill: ${BLACK};
      width: 44px;
      height: auto;
    }

    .infinity {
      fill: ${BLACK};
    }
  }
`
