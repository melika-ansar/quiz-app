import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import Button from '../Shared/Button/Button';
import Inputs from '../Shared/Inputs/Inputs';
import Select from '../Shared/Select/Select';
import { QuizSetupContext } from '../../App';

export default function Form() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(QuizSetupContext);
  const { count, category, difficulty } = state;
  const [isSubmitted, setIsSubmitted] = useState(false); // برای نمایش خطا فقط بعد از کلیک روی دکمه

  const CategoryOptions = [
    { value: 25, optionContent: 'ART' },
    { value: 23, optionContent: 'HISTORY' },
    { value: 22, optionContent: 'GEOGRAPHY' },
    { value: 27, optionContent: 'ANIMALS' },
    { value: 21, optionContent: 'SPORT' },
  ];

  const difficultyOptions = [
    { value: 'easy', optionContent: 'EASY' },
    { value: 'medium', optionContent: 'MEDIUM' },
    { value: 'hard', optionContent: 'HARD' },
  ];

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true); // زمانی که دکمه کلیک می‌شود، خطا نمایش داده شود

    if (count >= 10 && count <= 50) {
      navigate('/question');
    }
  };

  return (
    <form
      onSubmit={formHandler}
      className="flex flex-col mx-10 px-8 py-12 gap-6 font-manga text-lg font-semibold border border-black border-4 w-[35%]"
    >
      <Inputs
        name="count"
        label="Number of Questions"
        type="number"
        value={count ?? ''}
        onChange={(e: { target: { value: string | number } }) => {
          const value = +e.target.value;
          dispatch({ type: 'SET_COUNT', payload: value });
        }}
        className="text-xs w-[80%] p-3 border border-black border-2 outline-none mt-1"
        placeHolder="Choose your number"
      />
      {isSubmitted && (count < 10 || count > 50) && (
        <p className="text-red-500 text-sm">
          Number of questions must be between 10 and 50!
        </p>
      )}

      <Select
        options={CategoryOptions}
        labelContent="Category"
        selectValue={category}
        onChange={value => {
          dispatch({ type: 'SET_CATEGORY', payload: +value });
        }}
      />

      <Select
        options={difficultyOptions}
        labelContent="Difficulty"
        selectValue={difficulty}
        onChange={value => {
          dispatch({ type: 'SET_DIFFICULTY', payload: value });
        }}
      />

      <Button text="Let's go (≧∇≦)ﾉ" />
    </form>
  );
}
