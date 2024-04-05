import logoImg from '../assets/quiz-logo.png';

export default function Header() {
  return (
    <header className='quiz1Header'>
      <img src={logoImg} alt="Quiz logo" />
      <h1 className='quizH1'>ReactQuiz</h1>
    </header>
  );
}
