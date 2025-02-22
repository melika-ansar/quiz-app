import Form from '../Form/Form';
import './../../index.css';

export default function SetUp() {
  
  return (
    <div className="background-set h-screen ">
      <h1 className="p-10 text-4xl font-bold font-manga">set up quiz</h1>
      <p className="absolute right-[12.5rem] top-20 font-manga text-sm text-center">
        <br /> Here, you choose the
        <br /> number of questions, the
        <br /> question type, and the
        <br /> difficulty level.
        <br /> The number of questions must
        <br /> be between 10 and 50
        <br /> You fate depends on this.
        <br /> You have to win!
      </p>
      <p className="absolute right-[35.5rem] top-[18.5rem] font-manga text-base text-center">
        whats that
        <br />
        !!!!!
      </p>
        <Form />
    </div>
  );
}
