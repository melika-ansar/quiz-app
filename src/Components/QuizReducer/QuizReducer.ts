import { useReducer } from 'react';

interface Question {
  question: string;
  correctAnswer: string;
  answers: string[];
}

interface quizState {
  score: number;
  questionIndex: number;
  questions: Question[];
}

type QuizAction =
  | { type: 'SET_QUESTIONS'; payload: Question[] }
  | { type: 'NEXT_QUESTION' }
  | { type: 'UPDATE_SCORE' }
  | { type: 'RESULT_PAGE' };

export const initialQuizState: quizState = {
  score: 0,
  questionIndex: 0,
  questions: [],
};

const reducer = (state: quizState, action: QuizAction) => {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return { ...state, questions: action.payload };
    case 'NEXT_QUESTION':
      return { ...state, questionIndex: state.questionIndex + 1 };
    case 'UPDATE_SCORE':
      return { ...state, score: state.score + 1 };
    case 'RESULT_PAGE':
      return initialQuizState;
    default:
      return state;
  }
};

export const QuizReducer = () => {
  return useReducer(reducer, initialQuizState);
};
