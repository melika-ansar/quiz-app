import oops from './../../assets/images/oops.png';
import cat from './../../assets/images/catears.png';
import bang3 from './../../assets/images/bang3.png';
import yes from './../../assets/images/yes.png'
import star from './../../assets/images/star.png';
import boom from './../../assets/images/boom.png';
import circle from './../../assets/images/circle.png'
import { useContext } from 'react';
import { QuizContext } from '../../context/context';

export default function Question() {

  const {QuizList} = useContext(QuizContext);
  console.log(QuizList);

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

      <div className="flex flex-col justify-center items-center gap-6 rounded-2xl border border-4 border-black w-[65%] h-[35rem] mt-20 ml-64">
        <div className="w-[70%] h-[9rem] border border-black border-2"></div>
        <div className="w-[60%] h-[3rem] border border-black border-2"></div>
        <div className="w-[60%] h-[3rem] border border-black border-2"></div>
        <div className="w-[60%] h-[3rem] border border-black border-2"></div>
        <div className="w-[60%] h-[3rem] border border-black border-2"></div>
      </div>
    </div>
  );
}
