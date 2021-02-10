import React from 'react';
import Playfield from '../playfield';
import Audio from '../audio';

import { MUSIC } from '../constants';

const GameView = () => {
  return (
    <React.Fragment>
      <h1>Find all the matching cards</h1>
      <Playfield />
      <Audio
        sound={MUSIC.IN_PROGRESS}

        />

    </React.Fragment>
  )
}

export default GameView;
