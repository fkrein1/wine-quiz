import { nextQuestion } from '../redux/quizSlice';
import { incrementWineBody, setRedWineShare } from '../redux/wineSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

interface AnswerProps {
  wineBody: number;
  redWineShare?: number | null;
  title: string;
  image?: {
    url: string;
  } | null;
}

export function Answer(props: AnswerProps) {
  const dispatch = useAppDispatch();
  const currentQuestion = useAppSelector((state) => state.quiz.currentQuestion);
  const maxQuestions = useAppSelector((state) => state.quiz.maxQuestions);
  const navigate = useNavigate();

  function handleBtnClick(wineBody: number, redWineShare?: number | null) {
    if (redWineShare || redWineShare === 0)
      dispatch(setRedWineShare(redWineShare));
    dispatch(incrementWineBody(wineBody));
    const isLastQuestion = currentQuestion === maxQuestions - 1;
    if (isLastQuestion) return navigate('/wines');
    dispatch(nextQuestion());
  }

  return (
    <button
      type="button"
      onClick={() => handleBtnClick(props.wineBody, props.redWineShare)}
      className={classNames(
        'flex flex-col justify-center items-center gap-1 bg-gray-50 p-2 text-lg break-words w-40 h-30 md:w-60 md:h-44 md:p-8 hover:bg-gray-100 hover:border',
        {
          'md:p-2 w-10/12 md:h-14 md:w-10/12': !props.image,
        },
      )}
    >
      <img
        src={props.image?.url}
        className={classNames('w-40 h-30 bg-white md:w-60 md:h-44', {
          hidden: !props.image,
        })}
      />
      <span>{props.title}</span>
    </button>
  );
}
