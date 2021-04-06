import { createPointsWay, equalPositions } from "../utils/game-utils";

const START_GAME = '/index/START_GAME';
const SET_ANSWER = '/index/SET_ANSWER';

const posAnswerDefault = { x: -1, y: -1 };

const initialState = {
  gameSettings: {
    posStart: { x: 0, y: 0 },
    posEnd: { x: 0, y: 0 },
    way: [],
    field: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    posAnswer: { ...posAnswerDefault },
    isWin: false,
  },
}

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      const newState = { ...state };
      newState.gameSettings.posStart = {
        x: Math.floor(Math.random() * state.gameSettings.field[0].length),
        y: Math.floor(Math.random() * state.gameSettings.field.length),
      }
      newState.gameSettings.posAnswer = { ...posAnswerDefault };
      newState.gameSettings.isWin = false;
      createPointsWay(newState);
      return newState;
    case SET_ANSWER:
      if (equalPositions(state.gameSettings.posAnswer, posAnswerDefault)) {
        const newState = { ...state };
        newState.gameSettings.posAnswer = { ...action.payload.choosePos };
        newState.gameSettings.isWin = equalPositions(action.payload.choosePos, state.gameSettings.posEnd);
        return newState;
      } else {
        return { ...state };
      }
    default:
      return state;
  }
}

export const startGame = () => {
  return { type: START_GAME }
}

export const setAnswer = (choosePos) => {
  return { type: SET_ANSWER, payload: { choosePos } }
}

export default indexReducer;