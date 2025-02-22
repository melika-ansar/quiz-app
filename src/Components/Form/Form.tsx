import { useNavigate } from 'react-router';
import Button from '../Shared/Button/Button';
import Inputs from '../Shared/Inputs/Inputs';
import { getData } from '../Api/Get';
import { useContext, useState } from 'react';
import { QuizContext } from '../../context/context';

export default function Form() {
  const [value, setValue] = useState('');
  const [err, setErr] = useState('');
  const { setQuizList } = useContext(QuizContext);
  const navigate = useNavigate();

  const REJEX = /^(10|[1-4]\d|50)$/;

  // هندل چینج برای کنترل مقدار ورودی
  const handleChange = e => {
    setValue(e.target.value);
    setErr(''); // هر بار که ورودی تغییر میکنه، ارور پاک میشه
  };

  // هندل سابمیت فرم
  const handleBtn = e => {
    e.preventDefault();

    const countValue = value;
    const categoryValue = e.target.category.value;
    const difficultyValue = e.target.difficulty.value;

    // چک کردن برای اطمینان از اینکه count عدد صحیح و بین 10 تا 50 هست
    if (!REJEX.test(countValue.trim())) {
      setErr('The number must be between 10 and 50');
      return;
    }

    // اگر چک‌ها درست بودن، داده‌ها رو می‌فرستیم و به صفحه بعدی میریم
    getData({
      count: countValue,
      category: categoryValue,
      difficulty: difficultyValue,
    }).then(response => {
      setQuizList(response);
      navigate('/question');
    });
  };

  return (
    <form
      onSubmit={handleBtn}
      className="flex flex-col mx-10 px-8 py-12 gap-6 font-manga text-lg font-semibold border border-black border-4 w-[35%]"
    >
      <Inputs
        name="count"
        label="Number of Questions"
        type="number"
        value={value}
        onChange={handleChange}
        className="text-xs w-[80%] p-3 border border-black border-2 outline-none mt-1"
        placeHolder="Choose your number"
      />
      {err && <p className="font-manga text-xs text-red-500">{err}</p>}

      <div className="flex flex-col gap-1">
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          className="w-[60%] p-2 border border-black border-2 outline-none text-base"
        >
          <option value="25">Art</option>
          <option value="27">Animals</option>
          <option value="23">History</option>
          <option value="21">Sports</option>
          <option value="26">Celebrities</option>
          <option value="22">Geography</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="difficulty">Difficulty</label>
        <select
          name="difficulty"
          id="difficulty"
          className="w-[60%] p-2 border border-black border-2 outline-none text-base"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <Button text="Let's go (≧∇≦)ﾉ" />
    </form>
  );
}
