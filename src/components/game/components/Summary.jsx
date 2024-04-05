import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';


export default function Summary({ userAnswers ,updateStat}) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;
  const coin=correctAnswers*2+(userAnswers.length-correctAnswers.length-skippedAnswers.length)*(-1);
  const curDate = new Date();
  const day=curDate.getDate();
  const month=curDate.getMonth();
  const Year=curDate.getFullYear();
  const status={date: day,month: month,year: Year,skip: skippedAnswersShare, correct: correctAnswersShare, wrong: wrongAnswersShare,coin: coin };

  return (
    
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = 'user-answer';

          if (answer === null) {
            cssClass += ' skipped';
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += ' correct';
          } else {
            cssClass += ' wrong';
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
      <div className='flex justify-center'>
      <button 
              className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500 '
               onClick={()=>updateStat(status)}
              >FINISH
      </button>
      </div>

    </div>
  );
}
