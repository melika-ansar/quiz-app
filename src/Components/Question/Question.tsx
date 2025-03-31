import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizSetupContext, QuizResultContext } from '../../App';
import { getData } from '../Api/Get';
import oops from './../../assets/images/oops.png';
import cat from './../../assets/images/catears.png';
import bang3 from './../../assets/images/bang3.png';
import yes from './../../assets/images/yes.png';
import star from './../../assets/images/star.png';
import boom from './../../assets/images/boom.png';
import circle from './../../assets/images/circle.png';

export default function Question() {
  const { state } = useContext(QuizSetupContext);
  const { quizState, quizDispatch } = useContext(QuizResultContext);
  const { count, category, difficulty } = state;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const questions = await getData({ count, category, difficulty });

      if (questions.length > 0) {
        const formattedQuestions = questions.map((item: any) => {
          const answers = [item.correct_answer, ...item.incorrect_answers].sort(
            () => Math.random() - 0.5
          );
          return {
            question: item.question,
            correctAnswer: item.correct_answer,
            answers,
          };
        });
        quizDispatch({ type: 'SET_QUESTIONS', payload: formattedQuestions });
      }
      setLoading(false);
    })();
  }, [count, category, difficulty, quizDispatch]);

  const handleAnswerClick = (answer: string) => {
    if (quizState.questions[quizState.questionIndex].correctAnswer === answer) {
      quizDispatch({ type: 'UPDATE_SCORE' });
    }

    if (quizState.questionIndex === quizState.questions.length - 1) {
      navigate('/result');
    } else {
      quizDispatch({ type: 'NEXT_QUESTION' });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center font-manga h-screen text-2xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full">
      <img className="absolute w-36 left-72 top-[2.5rem]" src={cat} alt="cat" />
      <img
        className="absolute w-36 top-2 -rotate-[30deg] m-6"
        src={bang3}
        alt="bang"
      />
      <img
        className="absolute w-48 top-[34rem] right-[0.5rem]  m-10"
        src={oops}
        alt="oops"
      />
      <img
        className="absolute w-44 top-[24rem] -rotate-[27deg] m-10"
        src={yes}
        alt="yes"
      />
      <img
        className="absolute w-32 top-[1rem] right-[13rem] -z-10 "
        src={star}
        alt="star"
      />
      <img
        className="absolute w-36 top-[36.5rem] left-[10.8rem] rotate-180 -z-10 "
        src={star}
        alt="star"
      />
      <img
        className="absolute w-48 top-[9rem] right-[3rem] -rotate-12 "
        src={boom}
        alt="boom"
      />
      <img
        className="absolute w-44 top-[22rem] right-[3rem] "
        src={circle}
        alt="circle"
      />
      <img
        className="absolute w-44 top-[13rem] left-[3rem] "
        src={circle}
        alt="circle"
      />

      <div className="flex flex-col justify-center items-center gap-4 rounded-2xl border border-4 border-black w-[65%] h-[35rem] mt-20 ml-64">
        <div className="w-[70%] h-[9rem] border border-black border-2 flex justify-center items-center p-4 mb-5">
          {quizState.questions.length > 0 && (
            <h1 className="text-xl font-manga text-center">
              {quizState.questions[quizState.questionIndex].question}
            </h1>
          )}
        </div>

        <div className="flex flex-col gap-10">
          {quizState.questions.length > 0 &&
            quizState.questions[quizState.questionIndex].answers.map(
              (answer: string) => (
                <button
                  key={answer}
                  className="w-[20rem] h-[3rem] font-manga border border-black border-2"
                  onClick={() => handleAnswerClick(answer)}
                >
                  {answer}
                </button>
              )
            )}
        </div>
      </div>
    </div>
  );
}
