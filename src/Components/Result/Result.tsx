import { useNavigate } from 'react-router';
import Button from '../Shared/Button/Button';
import image from './../../assets/images/high.score.png'
import './../../index.css';

export default function Result() {

    const navigate = useNavigate();

  return (
    <div className="background-result h-screen flex justify-center items-center font-manga">
      <div className="flex flex-col justify-center items-center gap-16 bg-black-50 inset-0 w-[70%] h-[35rem] rounded-3xl backdrop-blur-lg">
        <img className='w-36 rounded-full ' src={image} alt="" />
        <h1 className='font-semibold text-xl'>your score =</h1>
        <Button
        onClick={() => navigate('setUp')}
        text="...(*￣０￣)ノ"/>
      </div>
    </div>
  );
}
