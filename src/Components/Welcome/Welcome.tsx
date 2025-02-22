import Button from '../../Components/Shared/Button/Button';
import './../../index.css';
import { useNavigate } from 'react-router';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="background-wel h-screen flex justify-center items-center font-manga">
      <div className="flex flex-col justify-center items-center gap-16 bg-black-50 inset-0 w-[70%] h-[35rem] rounded-3xl backdrop-blur-lg">
        <h1 className="font-bold text-5xl">Welcome to my quiz app</h1>
        <h2 className="font-bold text-3xl">Ready to begin ? Click here</h2>
        <Button
          onClick={() => navigate('setUp')}
          text="(～￣▽￣)~"
        />
      </div>
    </div>
  );
}
