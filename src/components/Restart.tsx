import { Link } from 'react-router-dom';
import { resetQuiz } from '../redux/quizSlice';
import { resetWineBody } from '../redux/wineSlice';
import { useAppDispatch } from '../redux/hooks';

export function Restart() {
  const dispatch = useAppDispatch();

  function handleRestart() {
    dispatch(resetQuiz());
    dispatch(resetWineBody());
  }

  return (
    <Link onClick={handleRestart} to="/">
      Refazer Quiz
    </Link>
  );
}
