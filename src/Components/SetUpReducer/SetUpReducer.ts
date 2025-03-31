import { useReducer } from 'react';

interface IquizState {
  count: number | null;
  category: number;
  difficulty: string;
}

type QuizAction =
  | { type: 'SET_COUNT'; payload: number }
  | { type: 'SET_CATEGORY'; payload: number }
  | { type: 'SET_DIFFICULTY'; payload: string }
  | { type: 'RESET' };

export const initialSetupState: IquizState = {
  count: null,
  category: 0,
  difficulty: '',
};

const reducer = (state: IquizState, action: QuizAction) => {
  switch (action.type) {
    case 'SET_COUNT':
      return { ...state, count: action.payload };
    case 'SET_CATEGORY':
      return { ...state, category: action.payload };
    case 'SET_DIFFICULTY':
      return { ...state, difficulty: action.payload };
    case 'RESET':
      return initialSetupState;
    default:
      return state;
  }
};

export const QuizSetupReducer = () => {
  return useReducer(reducer, initialSetupState);
};
