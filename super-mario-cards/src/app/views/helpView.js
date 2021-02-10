import React from 'react';

import styled from 'styled-components';
import { BEIGE, ORANGE } from '../styling/colors';
import { CARD_SIGNS } from '../constants';

const HelpView = () => {
  return (
    <React.Fragment>
      <HelpModal
        tabIndex={1}
        title="Help"
        >
        <p>Super Mario Cards is a memory card / find the matching card game,
          loosely based on the minigame from Super Mario Bros 3.</p>
          <br />
        <p>  You can play this game on 3 different difficulty levels:</p>

          <ul>
            <li><span>Easy</span> - infinite attempts</li>
            <li><span>Medium</span> - max 5 attempts</li>
            <li><span>Hard</span> - max 3 attempts</li>
          </ul>
          <img src={CARD_SIGNS.flower} className="signature-icon"
          width="80" height="80" alt="ice-flower" />
      </HelpModal>
    </React.Fragment>
  )
}

export default HelpView;

const HelpModal = styled.div`
  color: ${BEIGE};
  display: inline-block;
  background-color: ${ORANGE.normal}
  border: 10px solid ${ORANGE.border};
  border-radius: 30px;
  line-height:  1.4em;
  position: relative;
  width: 500px;
  padding: 30px 20px 40px 20px;
  box-shadow: inset 0px -9px 0px 0px ${ORANGE.shadow};
  top: 40%;
  transform: translateY(-50%);
  text-align: left;

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

  p {
    margin-bottom: 20px;
    text-transform: none;
  }

  ul {
    list-style: none;
  }

  span {
    color: #350e0a;
  }

  img {
    position: absolute;
    right: 20px;
    bottom: 35px;
  }
`
