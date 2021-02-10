import {Howl} from 'howler';

import {
  CREATE_GAME,
  SET_GAME_DIFFICULTY,
  UPDATE_PREVIOUS_GAME_STATE,
  UPDATE_GAME_STATE,
  UPDATE_ATTEMPTS,
  FLIP_CARDS,
  UPDATE_CARDS,
  ADD_SELECTED_CARD,
  CLEAR_SELECTED_CARDS,
  TOGGLE_SOUND
  } from './actionTypes';

import {
  CARD_STATES,
  GAME_STATES,
  GAME_DIFFICULTY,
  MAX_ATTEMPTS,
  MUSIC
  } from './constants';


export function createGame() {
  return {
    type: CREATE_GAME
  }
}

export function setGameDifficulty(difficulty) {
  return {
    type: SET_GAME_DIFFICULTY,
    payload: difficulty
  }
}

export function updatePreviousGameState(gameState) {
  return {
    type: UPDATE_PREVIOUS_GAME_STATE,
    payload: gameState
  }
}

export function updateGameState(gameState) {
  return {
    type: UPDATE_GAME_STATE,
    payload: gameState
  }
}

export function updateSelectedCards(id) {
  return (dispatch, getState) => {

    dispatch({
      type: ADD_SELECTED_CARD,
      payload: id
    });

    if(getState().selectedCards.length === 2) {
      setTimeout(() => {
        let attempts = getState().attempts;
        let gameDifficulty = getState().gameDifficulty;

        let limitReached = checkLimitReached(gameDifficulty, attempts);

        if(!limitReached) {
          const cards = getData(getState());
          const result = compareCards(cards[0], cards[1]);
          playSounds(result);

          if(result === true) {

            dispatch({
              type: UPDATE_CARDS
            });

            const inProgress = checkGameInProgress(getState().cardList);

            if(!inProgress) {
              dispatch({
                type: UPDATE_GAME_STATE,
                payload: GAME_STATES.GAME_WON
              });
            }

          } else {
            dispatch({
              type: UPDATE_ATTEMPTS
            });


            attempts = getState().attempts;
            gameDifficulty = getState().gameDifficulty;


            limitReached = checkLimitReached(gameDifficulty, attempts);

            if(limitReached) {
              dispatch({
                type: UPDATE_GAME_STATE,
                payload: GAME_STATES.GAME_OVER
              })
            } else {
              dispatch({
                type: FLIP_CARDS
              });
            }


          }

          dispatch({
            type: CLEAR_SELECTED_CARDS
          });

        }

      }, 600)
    }

  }
}

export function toggleSound() {
  return {
    type: TOGGLE_SOUND
  }
}


/**
*   Helper functions
*/

function checkGameInProgress(cardList) {
  const progress = cardList.filter(card => card.state !== CARD_STATES.INACTIVE);
  return progress.length > 0 ? true : false;
}

function checkLimitReached(difficulty, attempts) {

  if(difficulty === GAME_DIFFICULTY.EASY) {
    return false;
  } else if(attempts < MAX_ATTEMPTS[difficulty]){
    return false;
  } else {
    return true;
  }
}

function getData(state) {
  const id1 = state.selectedCards[0];
  const id2 = state.selectedCards[1];
  const cardList = state.cardList

  const card1 = getCard(cardList, id1);
  const card2 = getCard(cardList, id2);

  return [card1, card2];
}

function compareCards(card1, card2) {

  return card1.sign === card2.sign ? true : false;
}

function getCard(list, id) {
  return list.find((card) => {
    return card.id === id;
  });
}

function playSounds(isMatch) {
  const sound = isMatch ? MUSIC.MATCH : MUSIC.MISMATCH

  const soundMatching = new Howl({
    src: [
      `../assets/sounds/${sound.src}`
    ],
    loop: sound.loop,
    volume: 1,
    autoplay: true
  });

  soundMatching.play();
}
