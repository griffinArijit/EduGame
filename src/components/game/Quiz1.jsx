import Header from './components/Header.jsx';
import Quiz from './components/Quiz.jsx';
import './game.css'

function Quiz1({updateStat}) {
  return (
    <div className='quizBody quizHtml'>
      {/* <Header /> */}
      <div className='quizH1'>Short Quiz</div>
      <div>
        <Quiz updateStat={updateStat}/>
      </div>
    </div>
  );
}

export default Quiz1;
