import { nextQuestion } from '../redux/quizSlice';
import { incrementWineBody, setRedWineShare } from '../redux/wineSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useNavigate } from 'react-router-dom';

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

  function handleBtnClick(wineBody: number, redWineShare: number | null) {
    if(redWineShare) dispatch(setRedWineShare(redWineShare));
    dispatch(incrementWineBody(wineBody));
    const isLastQuestion = currentQuestion === maxQuestions - 1;
    if (isLastQuestion) return navigate('/wines');
    dispatch(nextQuestion());
  }

  return (
    <button
      type="button"
      onClick={() => handleBtnClick(props.wineBody, props.redWineShare)}
      className="flex flex-col justify-center gap-1"
    >
      <img src={props.image?.url} />
      {props.title}
    </button>
  );
}
