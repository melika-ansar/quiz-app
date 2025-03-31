import { useNavigate } from 'react-router';
import Button from '../Shared/Button/Button';
import './../../index.css';
import { QuizResultContext, QuizSetupContext } from '../../App';
import { useContext } from 'react';
import baka from './../../assets/images/baka.png';
import bad from './../../assets/images/not bad.png';
import improving from './../../assets/images//improving.png';
import sugoi from './../../assets/images/sugoi.png';

export default function Result() {
  const { quizState, quizDispatch } = useContext(QuizResultContext);
  const { state, dispatch } = useContext(QuizSetupContext);
  const totalQuestions = quizState.questions.length;
  const correctAnswers = quizState.score;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  const navigate = useNavigate();

  const resultImgHandler = () => {
    if (percentage < 20) {
      return baka;
    } else if (percentage < 50) {
      return bad;
    } else if (percentage < 70) {
      return improving;
    } else {
      return sugoi;
    }
  };

  const resoultContextHandler = () => {
    if (percentage < 20) {
      return 'BAKAAA!!!';
    } else if (percentage < 50) {
      return 'ITS BAD';
    } else if (percentage < 70) {
      return 'WAAAH!! YOU RE IMPROVING';
    } else {
      return 'SUGOII!!';
    }
  };

  return (
    <div className="background-result h-screen flex justify-center items-center font-manga">
      <div className="flex flex-col justify-center items-center gap-12 bg-black-50 inset-0 w-[70%] h-[35rem] rounded-3xl backdrop-blur-lg">
        <img className="w-44 rounded-full" src={resultImgHandler()} alt="img" />
        <h1 className="text-[30px]">{resoultContextHandler()}</h1>
        <h1 className="font-semibold text-xl">your score = {percentage}%</h1>
        <h1 className="font-semibold text-xl mb-0">try again</h1>
        <Button
          onClick={() => {
            quizDispatch({ type: 'RESULT_PAGE' });
            dispatch({ type: 'RESET' });
            navigate('/');
          }}
          text="...(*￣０￣)ノ"
        />
      </div>
    </div>
  );
}
